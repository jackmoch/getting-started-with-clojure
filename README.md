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

Clojure and [ClojureScript](https://clojurescript.org/) differ mainly in the fact that Clojure runs on the [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine) (Java Virtual Machine) platform and compiles down to [Java bytecode](https://en.wikipedia.org/wiki/Java_bytecode), where as ClojureScript compiles to JavaScript. Syntactically Clojure is very minimalistic, expressing itself via [persistent data structures](https://en.wikipedia.org/wiki/Persistent_data_structure). 

Clojure is notated using lists: `(a b c)`, vectors: `[a b c]`, and maps: `{:a 1 :b 2 :c 3}`, and uses the Lisp [s-expression](https://en.wikipedia.org/wiki/S-expression) to build its data structures. For example to add the integers 2 and 4 one would write `(+ 2 4)` which would evaluate to 6. 

##Play With Code

Here is some boilerplate code that you can copy and paste into `src/cljs/<project-name>/core.cljs`:

```Clojure
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

##Example Explained

The following block introduces your project name as the core namespace, requires the reagent core as the symbol `reagent`, and pulls `atom` out of the reagent core library. The require statement could be written as `import reagent, { atom } from 'reagent'` in an ES6 JavaScript syntax.

```Clojure
(ns <project-name>.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   ))
```

The folloing block defines the app-state as an atom with a key of :text and a value of "Hello world".

```Clojure
(defonce app-state (atom {:text "Hello world"}))
```

The following defines a function called hello-world, which accepts no arguments `[]`, followed by a div which contains an h1 element with a value of `(:text @app-state)`. The `@` character is used to dereference the app-state symbol and `:text` pulls out the value contained in the `:text` key.

```Clojure
(defn hello-world []
  [:div
    [:h1 (:text @app-state)]])
```

Finally, this last block pulls the `render-component` function out of the reagent library, passes it the hello-world function, which returns our div containing an h1 with the value of the app-state key. It then uses the `.getElementById` JavaScript function to locate the html element with an id of app, which contained in our index.html file in the `resource/public/index.html` file. 

```Clojure
(reagent/render-component [hello-world]
  (. js/document (getElementById "app")))
```

Note that we are explicitly using the reagent library with ClojureScript in this example, which builds on top of the React framework. This last line is the equivalent of React's:

```Javascript
ReactDOM.render(
  <hello-world />,
  document.getElementById("app")
)
```               


###Resources

[Reagent Github Repo](https://github.com/reagent-project/reagent)

[Reagent Getting Started](http://reagent-project.github.io/)

[ClojureScript Online REPL](http://clojurescript.net/)

[Clojure Resources Repo](https://github.com/chemouna/ClojureResources)

[Free Online Book on Clojure](http://www.braveclojure.com/foreword/)

[Functional Programming Terms Explained](https://github.com/hemanth/functional-programming-jargon)

###Videos

[SPA with ClojureScript/Reagent](https://www.youtube.com/watch?v=HucWRsXUwqw&list=PLUGkVn388pDI-xCI6aIAt4Yxoui4QdeYt)

[A Look At The History/Future of ClojureScript](https://www.youtube.com/watch?v=mty0RwkPmE8&list=PLUGkVn388pDI-xCI6aIAt4Yxoui4QdeYt&index=2)

[Live Coding With ClojureScript/Reagent](https://www.youtube.com/watch?v=wq6ctyZBb0A&list=PLUGkVn388pDI-xCI6aIAt4Yxoui4QdeYt&index=5)

###Why Clojure/ClojureScript/Functional Programming?

[Clojure Made Simple](https://www.youtube.com/watch?v=VSdnJDO-xdg)

[Simple Made Easy](https://www.youtube.com/watch?v=rI8tNMsozo0)

[The Value of Values](https://www.youtube.com/watch?v=-6BsiVyC1kM&list=PLRZ9CBXkZGmPtdCa8veT_fa5auxuI-BKi)

[Hammock Driven Development](https://www.youtube.com/watch?v=f84n5oFoZBc)

[The Language of the System](https://www.youtube.com/watch?v=ROor6_NGIWU)
