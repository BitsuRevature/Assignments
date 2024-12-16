export default function Post({post, handleDelete, handleUpdate}) {
    return (
        <div className="post" key={post.id}>
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <div className="post-actions">
              <button className="update-btn" onClick={() => handleUpdate(post.id)}>Update</button>
              <button className="delete-btn" onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
        </div>
    )
}