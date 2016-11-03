(ns testing-reagent.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   ))

(defonce app-state (atom {:text "Hello world"}))

(defn hello-world []
  [:div
    [:h1 (:text @app-state)]])

(reagent/render-component [hello-world]
  (. js/document (getElementById "app")))