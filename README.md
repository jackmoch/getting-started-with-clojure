#Reagent With Figwheel

##Set-Up
Initialize project with command `lein new reagent-figwheel <project-name>`.

Cd into newly created directory with `cd <project-name>`.

Run `lein clean`??? Not totally sure about this command, updated lein-template from 0.2.7 to 0.5.7.

Run `lein figwheel dev`. This runs the initial build of the project, starts the CSS watcher, serves the public directory to localhost:3449. Upon connecting to localhost:3449 the cljs REPL will be available in the terminal.
