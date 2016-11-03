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



;; EXPLAINATION OF ON CHANGE LINE IN NEW COUNTER FUNCTION 

;; we can also write this as
;;(fn [event] (reset! text (-> event .-target .-value))
;; (fn [event] (reset! text (.-value (.-target event)))
;; so the hash `#` is making an anonymous function whose first parameter is `%`
;;  `->` is the threading macro which i'm not sure how to explain succinctly
;; it takes a value and then _threads_ it though the following forms
;; the `(.-value (.-target event)` are javascript concepts
;; an event in javascript has a target, the element that was changed
;; an element can have a value, in this case the input's text



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