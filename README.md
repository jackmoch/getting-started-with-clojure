#Reagent With Figwheel

##Set-Up

The following prompts should be run in your terminal

1. Run `brew -v` to check if homebrew is currently installed on your system. If homebrew is installed continue to step 2, if homebrew is not installed continue to step 1a.

1a. Run `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` to install the latest version

2. Run `java -version` to check if java is currently installed on your system. If Java is installed continue to step 3, if Java is not installed continue to step 2a.

2a. If Java is not installed visit [Java Download](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and download the Java install that matches your OS

3. Run `brew install leiningen` to install leiningen on your system.

4. Initialize project with command `lein new reagent-figwheel <project-name>`.

5. Cd into newly created directory with `cd <project-name>`.

6. Run `lein clean`

7. Run `lein figwheel dev`. This runs the initial build of the project, starts the CSS watcher, serves the public directory to localhost:3449. 

8. Open your browser and navigate to [localhost://3449/](http://localhost:3449/) Upon connecting to localhost:3449 the cljs REPL will be available in the terminal.
