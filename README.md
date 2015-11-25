# November2015
Intermediate jQuery (November 2015)

This month Tim Franklin presented on some of the more intermediate level aspects of jQuery.

Specifically, Tim discussed:

- Method chaining (and ending)
- Arrays: each, grep, map
- Cloning vs. templates
- Find, children, siblings, parents
- Selector context
- Event handling
- AJAX (basic usage)

## Demo App

Nicknamed "Todooey", the demo app was a single HTML page quickly put together with the Foundation UI framework to show a list of tasks, or "ToDo's".  In the demo, Tim showed how to use jQuery to:

- Populate the list of ToDo's (from a hard-coded JSON array)
- Use cloning or templates to add repetitive complex DOM elements for each ToDo
- Update a counter on the page each time a task is marked completed
- Wire up the remove buttons for each ToDo
- Wire up 'Add ToDo' functionality
- Populate the list of ToDo's (from a remote data source using AJAX)

## Demo Files
The majority of the files are part of the Foundation UI framework Tim used to get a leg up on starting the project.

The relevant files manipulated during the demo are the intermediate-jquery HTML file and the app JS file.

### DIY

You can play around with the demo files yourself with the following starter files:

- intermediate-jquery.htm
- js/app.js

### It Works!

Or you can review a functional, completed version of the project with the following finished files:

- intermediate-jquery-finished.htm
- js/app-finished.js

### Just for Fun

The CSS files were not adjusted as part of this demo, but you can review some of the customizations from the baseline Foundation UI framework in either of the following (identical) style sheets:

- css/app.css
- css/app-finished.css

## Helpful Links

- [jQuery API](http://api.jquery.com/) - official jQuery documentation; browse or suffix the URL with the function name to go directly to the documentation for that function
- [Foundation 6](http://foundation.zerb.com) - UI framework from Zerb (similar to Bootstrap)
- [JSONPlaceholder](https://github.com/typicode/jsonplaceholder) - a RESTful API for returning fake data as JSON to use with AJAX calls for sample/starter projects