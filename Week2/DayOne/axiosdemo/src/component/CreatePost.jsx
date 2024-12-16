export default function CreatePost({title, setTitle, body, setBody, handleSubmit}) {
    return (
        <div className="create-post-form">
            <h2>Create a New Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter post title"
                    value={title}
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
                <button type="submit" className="submit-btn">Create Post</button>
            </form>
        </div>
    )
}