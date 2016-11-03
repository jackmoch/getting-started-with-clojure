(ns testing-reagent.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   ))

(enable-console-print!)

(defonce app-state (atom 
                      {:counters {1 {:id 1 :name "Build App" :count 0}
                                  2 {:id 2 :name "Broke Something" :count 0}}}))

(defn increment-counter [c]
  (swap! app-state update-in [:counters (:id c) :count] inc))

(defn counter-view [c]
  [:div.row
      [:div.col-sm-2 (str (:count c))]
      [:div.col-sm-6 (:name c)]
    [:div.col-sm-4
      [:button.btn.btn-default {:on-click #(increment-counter c)} "Did it!"]]])

(defn hello-world []
  [:div.container
    [:h1 "Chore tracking"]
    (for [c (vals (:counters @app-state))]
      ^{:key (:id c)}
      [counter-view c])])

(reagent/render-component [hello-world]
  (. js/document (getElementById "app")))