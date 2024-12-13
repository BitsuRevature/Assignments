
export default function Comment({key, comment}) {


    return(
        <div
            style={{
                paddingLeft: "3rem",
            }}
        >
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
            <hr />
        </div>
    )
}