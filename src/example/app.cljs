(ns example.app 
  (:require
   ["react" :as react]))

(defn $
  ([el & children]
   (apply react/createElement el nil children))
  ([el props & children]
   (apply react/createElement el (clj->js props) children)))

(defn page-index
  {:export true
   :next/page "index"}
  []
  ($ "div" "Hello, world"))
