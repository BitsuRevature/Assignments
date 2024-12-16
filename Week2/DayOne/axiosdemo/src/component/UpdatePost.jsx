import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function UpdatePost({ id, setOpen, initTitle, initBody, setPosts, posts }) {

    const [title, setTitle] = useState(initTitle);
    const [body, setBody] = useState(initBody);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !body) {
            alert("Please fill out both the title and body.");
            return;
        }

        console.log(id);
        axios.put(`http://localhost:8000/posts/${id}`, {
            title: title,
            body: body
        }).then((res) => {
            setPosts(
                [...posts.filter(post => post.id != id)
                    , res.data]
            )
        })

        setOpen(false)

    };

    return (
        <div className="create-post-form">
            <h2>Update Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter post title"
                    defaultValue={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    className="input-field"
                />
                <textarea
                    name="body"
                    placeholder="Enter post body"
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value)
                    }}
                    className="input-field"
                ></textarea>
                <button type="submit" className="submit-btn">Update Post</button>
            </form>
        </div>
    )
}