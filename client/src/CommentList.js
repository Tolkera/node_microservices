export default ({comments}) => {

    const commentList = comments.map(comment => {
            let commentContent = 'comment is pending';
            const {status, content} = comment
            if (status === 'approved'){
                commentContent = content
            } else if (status === 'rejected'){
                commentContent = "comment was rejected"
            }
            return(
                <li className="" key={comment.id}>
                    {commentContent}
                </li>)
       })
     return <ul>
         {commentList}
     </ul>
}