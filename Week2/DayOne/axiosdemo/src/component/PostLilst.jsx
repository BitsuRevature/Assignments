import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import Post from "./Post"
import CreatePost from "./CreatePost"
import UpdatePost from "./UpdatePost"
export default function PostList() {

    const [posts, setPosts] = useState([])
    const [open, setOpen] = useState(false)
    const [initTitle, setIntiTile] = useState('');
    const [initBody, setIntiBody] = useState('');

    const [updateId, setUpdateId] = useState(-1);

    useEffect(() => {
        axios.get("http://localhost:8000/posts")
            .then((res) => {
                console.log(res.data)

                setPosts(res.data)
            })
    }, [])


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !body) {
            alert("Please fill out both the title and body.");
            return;
        }

        axios.post(`http://localhost:8000/posts/`, {
            title: title, 
            body: body
        }).then((res) => {
            setPosts([...posts, res.data])
            setTitle('')
            setBody('')
        })
    };

    const handleDelete = (id) => {

        axios.delete(`http://localhost:8000/posts/${id}`)
            .then(res => {
                const deleted = res.data;
                setPosts(posts.filter(post => post.id != id));
            })

    }

    const handleUpdate = (id) => {
        setUpdateId(id);
        setOpen(true);
        const post = posts.filter(post => post.id == id)[0];
        setIntiBody(post.body);
        setIntiTile(post.title);
    }
    
    return (
        <div className="post-list-container">
            <h1>Posts</h1>

            <CreatePost title={title} body={body} setTitle={setTitle} setBody={setBody} handleSubmit={handleSubmit} />

            <div className="post-list">
                {
                    posts.map((post) => (
                        <Post key={post.id} post={post} handleDelete={handleDelete} handleUpdate={handleUpdate} />
                    ))
                }
            </div>

            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: 'translate(-50%, -50%)',
                    // height: 400,
                    backgroundColor: "gray",
                    border: "1px solid black",
                    // width: 400,
                    // display: open ? "block" : "none"
                }}
            >
                {open && <UpdatePost id={updateId} initBody={initBody} initTitle={initTitle} setOpen={setOpen} posts={posts} setPosts={setPosts}/>}
            </div>
        </div>
    )
}