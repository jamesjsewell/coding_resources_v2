function home_view(){

    create_base_view()
}

function python_view(){

    // create page wrapper
    create_base_view()

    // gets posts data and then puts them on the dom 
    get_data("https://coding-resources-api.herokuapp.com/items/filter", 'python_info')

    link_href = 'https://drive.google.com/drive/u/0/folders/10LSb-wYQUDX9gvAgQ1wrQF-o3Wp_2yIY'
    create_pdf_section(link_href, 'python' )

}

// creates the wrapper for the page content
function create_base_view(){

    page_wrapper.innerHTML =  `
    
        <div class="container">
    
        </div>
    
    `

}

// takes in a url string, and a string for the category of the posts
function get_data(url, category){

    page_wrapper.innerHTML = ''

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

    // create wrapper for posts
    var posts_wrapper = document.createElement("div")

    // set posts_wrapper class to bootstrap container 
    posts_wrapper.className = "container"

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
        
            <div class="post_wrapper card">

                <h4>${title}</h4>

                <p>${description}</p>

                <a href="${link_href}">${link_name}</a>

            </div>
        
        
        `

        // appends new post to the posts_wrapper element
        posts_wrapper.innerHTML += post_element


    }

    // puts the posts_wrapper on the dom under the page_wrapper parent element
    page_wrapper.appendChild(posts_wrapper)
    
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
