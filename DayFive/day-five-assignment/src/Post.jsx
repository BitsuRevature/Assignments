
import Comment from "./Comment";

export default function Post({ key, post, setPosts }) {


    return (
        <div
            style={{
                border: "1px solid white",
                padding: "1rem",
                textAlign: "left",
                marginBottom: "0.5rem"

            }}
        >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <h4>Comments</h4>
            {
                post.comments.map((comment, idx) => {
                    // console.log(comment)
                    return (
                        <Comment key={idx} comment={comment} />

                    )
                })
            }
        </div>
    )
}