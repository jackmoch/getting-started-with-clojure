(ns testing-reagent.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   ))

(enable-console-print!)

(defonce app-state (atom {:text "Hello world"}))

(defn hello-world []
  [:div
    [:h1 (:text @app-state)]
    [:button {:on-click #(println "hey")} "Push Me"]])

(reagent/render-component [hello-world]
  (. js/document (getElementById "app")))