; https://github.com/thheller/next-cljs/blob/master/src/main/shadow/next_js.clj
(ns interop.shadow-next
  (:require
   [clojure.java.io :as io]
   [cljs.compiler :as cljs-comp]
   [clojure.string :as str]))

(defn all-vars [state]
  (for [[ns ns-info] (get-in state [:compiler-env :cljs.analyzer/namespaces])
        ns-def (-> ns-info :defs vals)]
    ns-def))

(defn create-pages
  {:shadow.build/stage :flush}
  [state]
  (doseq [ns-def (all-vars state)
          :when (get-in ns-def [:meta :next/page])]
    (println "HERE!!")
    (let [{:next/keys [page]}
          (:meta ns-def)
          
          page-ns
          (-> ns-def :name namespace cljs-comp/munge)
          
          page-var
          (-> ns-def :name name cljs-comp/munge)
          
          content
          (str
           "\nexport {" page-var " as default} from \"../cljs/" page-ns ".js\";")
          
          out-dir
          (io/file "native-web" "pages")
          
          out-file
          (io/file out-dir (str page ".js"))]
      (io/make-parents out-file)
      (spit out-file content)))
  state)
