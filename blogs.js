import BlogsData from "./Data/Blogs.js"
const displayBlogs = document.querySelector("#display-jobs")

class blog {
    constructor(heading,content,image) {
        this.heading = heading;
        this.content = content;
        this.image = image;
        this.id = Math.random()
    }
}
function getBlogs() {
    let blogs;
    blogs = BlogsData;
    return blogs;
}
function addBlogToDisplay(blog){
    const newBlog = document.createElement('div')
    newBlog.classList.add('blog')
    newBlog.innerHTML = `
            <div class="image_div">
                <div class="image" style="background-image:url(${blog.image})"></div>
                    </div>
            <div class="blog_content">
                <p class="blog_heading">${blog.heading}</p>
                <p class="blog_short_description">${blog.content}</p>
            </div>
    `
    displayBlogs.appendChild(newBlog)
}
function showingBlogs(){
    const blogs = getBlogs()
    blogs.forEach(blog => {
        addBlogToDisplay(blog)
    })
}
showingBlogs()

console.log("Blogs Javascript Work!")