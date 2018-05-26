var HOME = 'home',
GITHUB = 'github',
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
    
            python_view()

            break
    
    }

}

window.onhashchange = location_has_changed;
