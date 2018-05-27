function home_view(){

    create_base_view()
}

function python_view(){

    // create page wrapper
    create_base_view('python')

    // gets posts data and then puts them on the dom 
    get_data("https://coding-resources-api.herokuapp.com/items/filter", 'python')

    link_href = 'https://drive.google.com/drive/u/0/folders/10LSb-wYQUDX9gvAgQ1wrQF-o3Wp_2yIY'
    create_pdf_section(link_href, 'python' )

}

//${location == 'posts'? 'active' : '' }
function create_base_view(location){

    page_wrapper.innerHTML =  `

    <div class="container">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">

                    <li class="nav-item ${location == 'terminal'? 'active' : '' }">
                        <a class="nav-link" href="#">terminal <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item ${location == 'git'? 'active' : '' }">
                        <a class="nav-link" href="#">git <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item ${location == 'python'? 'active' : '' }">
                        <a class="nav-link" href="#">python <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item ${location == 'javascript'? 'active' : '' }">
                        <a class="nav-link" href="#">javascript <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item ${location == 'html'? 'active' : '' }">
                        <a class="nav-link" href="#">HTML <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item ${location == 'css'? 'active' : '' }">
                        <a class="nav-link" href="#">CSS <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item ${location == 'editors'? 'active' : '' }">
                        <a class="nav-link" href="#">editors <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item ${location == 'posts'? 'active' : '' }">
                        <a class="nav-link" href="#">posts <span class="sr-only">(current)</span></a>
                    </li>
                  
                </ul>
            </div>
        </nav>

        <div id="posts" class="container"></div>

    </div>
    
    `

}

// takes in a url string, and a string for the category of the posts
function get_data(url, category){

    // sends a post request to the desired url.
    // object that is on the data key gets sent over to the endpoint
    // in the body of the request, in this case the data is used on the 
    // server to filter posts by category. a successful server request will run
    // the callback that is assigned to the success key on the object, and 
    // will pass in a server response object into the response argument
    $.ajax({
        method: "POST",
        url: url,
        data: {category: category},
        success: (response)=>{populate_posts(response)},
        async: true
    })

}

// creates posts from data and puts them on the page
function populate_posts(posts_data){

    // posts wrapper
    var posts_wrapper = document.getElementById("posts")

    // create wrapper for posts
    var posts_row = document.createElement("div")

    // set posts_wrapper class to bootstrap container 
    posts_row.className = "row"

    // initalize posts html
    var posts_html = ''

    // iterate over json and built html posts from it
    for(var post_index = 0; post_index < posts_data.length; post_index++){

        // current post
        var post_data = posts_data[post_index]

        // this is object destructuring, takes keys from the object and sets 
        // them as variables with values that were on the keys in the object
        // that is right of the equal sign
        const { title, description, link_href, link_name } = post_data

        // single post html
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

        // appends new post to the posts_wrapper element
        posts_row.innerHTML += post_element

    }

    // puts the posts_wrapper on the dom under the page_wrapper parent element
    posts_wrapper.appendChild(posts_row)


    
}

function create_pdf_section(link_href, link_name){

    var pdf_section_wrapper = document.createElement("div")

    pdf_section_wrapper.innerHTML = `

        <div class="container">
            <div class="row" >
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">pdfs</h3>
                            <a class="btn btn-primary" href="${link_href}">${link_name}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    `
    page_wrapper.appendChild(pdf_section_wrapper)

}


