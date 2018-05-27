
class Page {

    constructor(category, pdfs) {

        this.category = category
        this.posts_url = 'https://coding-resources-api.herokuapp.com/items/filter'

        if(pdfs){
            this.pdfs = pdfs
        }
        
        this.add_nav_bar()
        this.add_posts_section()
        
    }

    add_nav_bar(){

        console.log(this.category)

        page_wrapper.innerHTML =  `

            <div class="container">

                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">

                            <li class="nav-item ${this.category == 'terminal'? 'active' : '' }">
                                <a class="nav-link" href="#terminal">terminal <span class="sr-only">(current)</span></a>
                            </li>

                            <li class="nav-item ${this.category == 'git'? 'active' : '' }">
                                <a class="nav-link" href="#git">git <span class="sr-only">(current)</span></a>
                            </li>

                            <li class="nav-item ${this.category == 'python'? 'active' : '' }">
                                <a class="nav-link" href="#python">python <span class="sr-only">(current)</span></a>
                            </li>

                            <li class="nav-item ${this.category == 'javascript'? 'active' : '' }">
                                <a class="nav-link" href="#javascript">javascript <span class="sr-only">(current)</span></a>
                            </li>

                            <li class="nav-item ${this.category == 'html'? 'active' : '' }">
                                <a class="nav-link" href="#html">HTML <span class="sr-only">(current)</span></a>
                            </li>

                            <li class="nav-item ${this.category == 'editors'? 'active' : '' }">
                                <a class="nav-link" href="#editors">editors <span class="sr-only">(current)</span></a>
                            </li>

                            <li class="nav-item ${this.category == 'posts'? 'active' : '' }">
                                <a class="nav-link" href="#posts">posts <span class="sr-only">(current)</span></a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    CSS
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">layout</a>
                                    <a class="dropdown-item" href="#">fonts and icons</a>
                                    <a class="dropdown-item" href="#">svgs</a>
                                </div>
                            </li>
                        
                        </ul>
                    </div>
                </nav>

        
                ${ this.pdfs? `<div class="row m-4">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">pdfs</h3>
                                <a class="btn btn-primary" href="${this.pdfs.link_href}">${this.pdfs.link_name}</a>
                            </div>
                        </div>
                    </div>
                </div>` : ''}
           

            </div>
        
        `

    }

    add_posts_section(){

        page_wrapper.innerHTML += `<div id="posts" class="container"></div>`

        var posts_wrapper = document.getElementById("posts")

        var posts_row = document.createElement("div")

        posts_row.className = "row"

        this.get_posts()


    }

    get_posts(){

        $.ajax({
            method: "POST",
            url: this.posts_url,
            data: {category: this.category},
            success: (response)=>{this.generate_posts(response)},
            async: true
        })

    }

    generate_posts(posts_data){

        var posts_wrapper = document.getElementById("posts")

        var posts_row = document.createElement("div")

        posts_row.className = "row"

        var posts_html = ''

        for(var post_index = 0; post_index < posts_data.length; post_index++){

            var post_data = posts_data[post_index]

            const { title, description, link_href, link_name } = post_data

            var post_element = `
            
                <div class="col">

                    
                    <div class="m-3 card">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${description}</p>
                            <a href="${link_href}" class="btn btn-primary">${link_name}</a>
                        </div>
                    </div>
            

                </div>
            
            `

            posts_row.innerHTML += post_element

        }

        posts_wrapper.appendChild(posts_row)

    }

}
