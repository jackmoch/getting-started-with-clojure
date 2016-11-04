#Reagent With Figwheel

##Set-Up

The following prompts should be run in your terminal

1. Run `brew -v` to check if homebrew is currently installed on your system. If homebrew is installed continue to step 3, if homebrew is not installed continue to step 2.

2. Run `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` to install the latest version

3. Run `java -version` to check if java is currently installed on your system. If Java is installed continue to step 5, if Java is not installed continue to step 4.

4. If Java is not installed visit [Java Download](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and download the Java install that matches your OS

5. Run `brew install leiningen` to install leiningen on your system.

6. Initialize project with command `lein new reagent-figwheel <project-name>`.

7. Cd into newly created directory with `cd <project-name>`.

8. Run `lein clean`

9. Run `lein figwheel dev`. This runs the initial build of the project, starts the CSS watcher, serves the public directory to localhost:3449. 

10. Open your browser and navigate to [localhost://3449/](http://localhost:3449/) Upon connecting to localhost:3449 the cljs REPL will be available in the terminal.

##What is Clojure/ClojureScript?

[Clojure](http://clojure.org/) is a dialect of [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)) and a [functional](https://en.wikipedia.org/wiki/Functional_programming) programming language. It was written by Rich Hickey, and released in 2007. 

Clojure and ClojureScript differ main in the fact that Clojure runs on the JVM (Java Virtual Machine) platform and compiles down to Java bytecode, where as ClojureScript compiles to JavaScript. Syntactically Clojure is very minimalistic, mainly expressing itself via data structures. 

Clojure is mainly expressed using lists: `(a b c)`, vectors: `[a b c]`, and maps: `{:a 1 :b 2 :c 3}` which act as key value pairs. Clojure uses the Lisp s-expression as it's common notation. For example to add the integers 2 and 4 one would write `(+ 2 4)` which would evaluate to 6. 

##Play With Code

Here is some boilerplate code that you can copy and paste into `src/cljs/<project-name>/core.cljs`:

```
(ns <project-name>.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   ))

(defonce app-state (atom {:text "Hello world"}))

(defn hello-world []
  [:div
    [:h1 (:text @app-state)]])

(reagent/render-component [hello-world]
  (. js/document (getElementById "app")))
```

It will simply render "Hello world" on the page.


```
(ns <project-name>.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   ))
```
This block introduces your project name as the core namespace, requires the reagent core as the symboly reagent, and pulls atom out of the reagent core library. The require statement could be written as `import reagent, { atom } from 'reagent'` in an ES6 JavaScript syntax.

```
(defonce app-state (atom {:text "Hello world"}))
```
This block defines the app-state as an atom with a key of :text and a value of "Hello world".

```
(defn hello-world []
  [:div
    [:h1 (:text @app-state)]])
```
This block defines a function called hello-world, which accepts no arguments `[]`, followed by a div which contains an h1 element with a value of `(:text @app-state)`. The `@` character is used to dereference the app-state symbol and `:text` pulls out the value contained in the `:text` key.

```
(reagent/render-component [hello-world]
  (. js/document (getElementById "app")))
```
Finally, this line pulls the render-component function out of the reagent library, passes it the hello-world function, which returns our div containing an h1 with the value of the app-state key, and then uses the `.getElementById` JavaScript function to locate the html element with an id of app, contained in our index.html file in the `resource/public/index.html` file. Note that we are explicitly using the reagent library of ClojureScript in this example, which builds on top of the  React framework. This last line is the equivalent of React's:
```
ReactDOM.render(
  <hello-world />,
  document.getElementById("app")
)
```               

##Resources

[Reagent Github Repo](https://github.com/reagent-project/reagent)

[Reagent Getting Started](http://reagent-project.github.io/)

[ClojureScript Online REPL](http://clojurescript.net/)

[Free Online Book on Clojure](http://www.braveclojure.com/foreword/)

##Videos

[SPA with ClojureScript/Reagent](https://www.youtube.com/watch?v=HucWRsXUwqw&list=PLUGkVn388pDI-xCI6aIAt4Yxoui4QdeYt)

[A Look At The History/Future of ClojureScript](https://www.youtube.com/watch?v=mty0RwkPmE8&list=PLUGkVn388pDI-xCI6aIAt4Yxoui4QdeYt&index=2)

[Live Coding With ClojureScript/Reagent](https://www.youtube.com/watch?v=wq6ctyZBb0A&list=PLUGkVn388pDI-xCI6aIAt4Yxoui4QdeYt&index=5)

##Why Clojure/ClojureScript/Functional Programming?

[Clojure Made Simple](https://www.youtube.com/watch?v=VSdnJDO-xdg)

[Simple Made Easy](https://www.youtube.com/watch?v=rI8tNMsozo0)

[The Value of Values](https://www.youtube.com/watch?v=-6BsiVyC1kM&list=PLRZ9CBXkZGmPtdCa8veT_fa5auxuI-BKi)

[Hammock Driven Development](https://www.youtube.com/watch?v=f84n5oFoZBc)

[The Language of the System](https://www.youtube.com/watch?v=ROor6_NGIWU)
