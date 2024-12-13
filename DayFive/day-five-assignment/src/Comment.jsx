
export default function Comment({comment, deleteComment, commentIdx, pIdx}) {


    return(
        <div
            style={{
                paddingLeft: "3rem",
            }}
        >
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
            <button onClick={
                () => deleteComment(pIdx, commentIdx)
            }>Delete Comment</button>
            <hr />
        </div>
    )
}