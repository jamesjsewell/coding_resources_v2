
// Create a Browsersync instance
var bs = require("browser-sync").create();

// these are the filetypes i want browser-sync to reload
var filetypes = '*.css, *.html, *.js'
// watches for changes on the files with the filetypes i specified
function reload_on_change(event, file) {
    if (event === "change") {
        bs.reload(filetypes);
    }
}

// in the path, the /**/ means look in all sub folders as well
// the * is a catchall or wildcard infront of the filetype *.js for example
// that will look at any file with that filetype in the folder

// i want to watch changes to .js files in a folder called scripts and it's subfolders
var folder_1 = './app/scripts'
var path_1 = folder_1 + '/**/' + '*.js'
bs.watch(path_1, reload_on_change);

// i want to watch changes to .css files in a folder called scripts and it's subfolders
var folder_2 = './app/styles'
var path_2 = folder_2 + '/**/' + '*.css'
bs.watch(path_2, reload_on_change);

// i want to watch changes to .html files in the root directory
var folder_3 = './app'
var path_3 = folder_3 + '/*.html'
bs.watch(path_3, reload_on_change);

// I could continue to add various paths like i did above

// Now init the Browsersync server
// server: ""   this should be set to whatever folder your app is in
// in this case, mine is at the root directory
bs.init({
    server: "./app"
});