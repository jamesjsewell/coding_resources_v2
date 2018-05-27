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

        case '':

            var html_page = new Page('home')

            break

        case HOME:
    
            var pdfs = {link_href: 'https://drive.google.com/drive/folders/1phgTaKD7SVr0GCybSHdgb9QbWlUqXnRy?usp=sharing', link_name: 'python' }
            var html_page = new Page('html', pdfs)
            
            break
    
        case TERMINAL:

          
            var pdfs = {link_href: 'https://drive.google.com/drive/folders/1RZq96RQHPSHXlLWpojqvYbj-q70uaOnJ?usp=sharing', link_name: 'python' }
            var terminal_page = new Page('terminal', pdfs)
            
            break
    
        case GIT:

            var pdfs = {link_href: 'https://drive.google.com/drive/folders/1R9Jva2pJ6eDXZapg9vREZ_2NepMmVoLd', link_name: 'python' }
            var git_page = new Page('git', pdfs)
    
            break
    
        case PYTHON:
    
            var pdfs = {link_href: 'https://drive.google.com/drive/u/0/folders/10LSb-wYQUDX9gvAgQ1wrQF-o3Wp_2yIY', link_name: 'python' }
            var python_page = new Page('python', pdfs)

            break
        
        case JAVASCRIPT:

            var javascript_page = new Page('javascript')

            break
        
        case HTML:

            var pdfs = {link_href: 'https://drive.google.com/drive/folders/1phgTaKD7SVr0GCybSHdgb9QbWlUqXnRy?usp=sharing', link_name: 'python' }
            var html_page = new Page('html', pdfs)

            break

        case EDITORS:

            var editors_page = new Page('editors')

            break

        case POSTS:

            var posts_page = new Page('posts')

            break
    
    }

}

window.onhashchange = location_has_changed;






