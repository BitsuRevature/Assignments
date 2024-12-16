const postsURL = "https://jsonplaceholder.typicode.com/posts";
const usersURL = "https://jsonplaceholder.typicode.com/users";

// const posts = fetch(RL).then(res => {
//     return res.json();
// }).then( data => {
//     return data;
// }).then( data => {
//     return data
// })
// .catch( error => {
//     console.error(error);
// })

async function fetchData(){
    const postsFetch = await fetch(postsURL);
    const data = await postsFetch.json();

    return data;
}

async function fetchUsreName(userId){
    const usersFetch = await fetch(`${usersURL}/${userId}`);
    const data = await usersFetch.json();

    return data.name;
}

fetchData()


const postsHeading = document.getElementById("postsHeading");
const postDiv = document.getElementById("postsDiv")

postsHeading.addEventListener("click", async (e) => {

    const posts = await fetchData();
    console.log(posts)

    posts.map(async (post) => {
        
        const div = document.createElement('div');
        const name = await fetchUsreName(post.userId);
        div.classList.add("postContainer")
        div.innerHTML =
        `
            <h2>User: ${name}</h2>
            <h3 class="title">Title: ${post.title}</h3>
            <hr />
            <p class="body">${post.body}</p>
        `
        return div

    }).forEach(async (post) => {
        const data = await post;
        postDiv.append(data);
    });

})