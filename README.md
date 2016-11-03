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

##Resources

[Reagent Github Repo](https://github.com/reagent-project/reagent)

[Reagent Getting Started](http://reagent-project.github.io/)

[ClojureScript Online REPL](http://clojurescript.net/)

[Free Online Book on Clojure](http://www.braveclojure.com/foreword/)

##Videos

[SPA with ClojureScript/Reagent](https://www.youtube.com/watch?v=HucWRsXUwqw&list=PLUGkVn388pDI-xCI6aIAt4Yxoui4QdeYt)

[A Look At The History/Future of ClojureScript](https://www.youtube.com/watch?v=mty0RwkPmE8&list=PLUGkVn388pDI-xCI6aIAt4Yxoui4QdeYt&index=2)

[Live Coding With ClojureScript/Reagent](https://www.youtube.com/watch?v=wq6ctyZBb0A&list=PLUGkVn388pDI-xCI6aIAt4Yxoui4QdeYt&index=5)
