var HOME = 'home',
TERMINAL = 'terminal',
GIT = 'git',
PYTHON = 'python',
JAVASCRIPT = 'javascript',
HTML = 'html',
EDITORS = 'editors',
POSTS = 'posts',
CSS_GENERAL = 'css_general',
CSS_EFFECTS = 'css_effects',
CSS_ICONS = 'css_icons',
CSS_FONTS = 'css_fonts',
CSS_SVGS = 'css_svgs',
CSS_GRADIENTS = 'css_gradients',
CSS_FRAMEWORKS = 'css_frameworks'

location_has_changed()

function location_has_changed(){

    var browser_location = location.hash.substr(1)

    switch(browser_location){

        case '':

            var html_page = new Page('home')

            break

        case HOME:
    
            var home_page = new Page('html')
            
            break
    
        case TERMINAL:

          
            var pdfs = {link_href: 'https://drive.google.com/drive/folders/1RZq96RQHPSHXlLWpojqvYbj-q70uaOnJ?usp=sharing', link_name: 'terminal' }
            var terminal_page = new Page('terminal', pdfs)
            
            break
    
        case GIT:

            var pdfs = {link_href: 'https://drive.google.com/drive/folders/1R9Jva2pJ6eDXZapg9vREZ_2NepMmVoLd', link_name: 'git' }
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

            var pdfs = {link_href: 'https://drive.google.com/drive/folders/1phgTaKD7SVr0GCybSHdgb9QbWlUqXnRy?usp=sharing', link_name: 'html' }
            var html_page = new Page('html', pdfs)

            break

        case EDITORS:

            var editors_page = new Page('editors')

            break

        case POSTS:

            var posts_page = new Page('posts')

            break
    
    }

    //css
    switch(browser_location){
        
        case CSS_GENERAL:

            var css_general_page = new Page(CSS_GENERAL)

            break

        case CSS_EFFECTS:

            var css_effects_page = new Page(CSS_EFFECTS)

            break

        case CSS_ICONS:

            var css_icons_page = new Page(CSS_ICONS)

            break

        case CSS_FONTS:

            var css_fonts_page = new Page(CSS_FONTS)

            break

        case CSS_SVGS:

            var css_svgs_page = new Page(CSS_SVGS)

            break

        case CSS_GRADIENTS:

            var css_gradients_page = new Page(CSS_GRADIENTS)

            break

        case CSS_FRAMEWORKS:

            var css_frameworks_page = new Page(CSS_FRAMEWORKS)

            break

    }
}

window.onhashchange = location_has_changed;






