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

(defn add-counter [text]
  (let [next-id (inc (count (keys (:counters @app-state))))
       new-counter {:id next-id :name text :count 0}]
    (swap! app-state update-in [:counters] assoc next-id new-counter)))

(defn new-counter []
  (let [text (atom "")]
    (fn []
      [:div.row.container
        [:div.col-sm-10
          [:input.form-control {:type "text" :value @text
                                :on-change #(reset! text (-> % .-target .-value))}]]
          [:button.btn.btn-success {:on-click #(add-counter @text)} "Add"]])))

(defn hello-world []
  [:div.container
    [:h1 "Chore tracking"]
    [new-counter]
    (for [c (vals (:counters @app-state))]
      ^{:key (:id c)}
      [counter-view c])])

(reagent/render-component [hello-world]
  (. js/document (getElementById "app")))