function home_view(){

    create_base_view()
}

function python_view(){

    create_base_view()

  
    get_data("https://coding-resources-api.herokuapp.com/items/filter", 'terminal_info', populate_posts)

}


function create_base_view(){

    page_wrapper.innerHTML =  `
    
        <div class="container">
    
        </div>
    
    `

}

function get_data(url, category, populate_posts){

    page_wrapper.innerHTML = ''

    $.ajax({
        method: "POST",
        url: url,
        data: {category: category},
        success: (response)=>{populate_posts(response)},
        async: true
    })


}

function populate_posts(posts_data){

    page_wrapper.innerHTML = ''
    var posts_wrapper = document.createElement("div")
    posts_wrapper.className = "container"
    var posts_html = ''

    for(var post_index = 0; post_index < posts_data.length; post_index++){

        var post_data = posts_data[post_index]

        const { title, description, link_href, link_name } = post_data

        var post_element = `
        
            <div class="post_wrapper card">

                <h4>${title}</h4>

                <p>${description}</p>

                <a href="${link_href}">${link_name}</a>

            </div>
        
        
        `

        posts_wrapper.innerHTML += post_element


    }

    page_wrapper.appendChild(posts_wrapper)
    

}
