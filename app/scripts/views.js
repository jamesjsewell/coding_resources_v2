var HOME = 'home',
TERMINAL = 'terminal',
GIT = 'git',
PYTHON = 'python',
JAVASCRIPT = 'javascript',
HTML = 'html',
EDITORS = 'editors',
POSTS = 'posts'

location_has_changed()

function location_has_changed(){

    var browser_location = location.hash.substr(1)

    switch(browser_location){

        case HOME:
    
            home_view()
            
            break
    
        case TERMINAL:
    
            break
    
        case GIT:
    
            break
    
        case PYTHON:
    
            var pdfs = {link_href: 'https://drive.google.com/drive/u/0/folders/10LSb-wYQUDX9gvAgQ1wrQF-o3Wp_2yIY', link_name: 'python' }
            var python_page = new Page('python', pdfs)

            break
        
        case JAVASCRIPT:

            break
        
        case HTML:

            break

        case EDITORS:

            break

        case POSTS:

            break
    
    }

}

window.onhashchange = location_has_changed;






