var HOME = 'home',
GITHUB = 'git',
TERMINAL = 'terminal',
PYTHON = 'python'

location_has_changed()

function location_has_changed(){

    var browser_location = location.hash.substr(1)

    switch(browser_location){

        case HOME:
    
            home_view()
            
            break
    
        case GITHUB:
    
            break
    
        case TERMINAL:
    
            break
    
        case PYTHON:
    
            var pdfs = {link_href: 'https://drive.google.com/drive/u/0/folders/10LSb-wYQUDX9gvAgQ1wrQF-o3Wp_2yIY', link_name: 'python' }
            var python_page = new Page('python', pdfs)

            break
    
    }

}

window.onhashchange = location_has_changed;






