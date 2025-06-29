    import CommentListItem from "./commentListItem";

    export default function CommentList({ post }) {
    
    if (!post?.comments || post.comments.length === 0) {
        return <p>댓글이 없습니다.</p>;
    }

    return (
        <div>
        {post.comments.map((comment) => (
            <CommentListItem comment={comment} post={post} key={comment.id} />
        ))}
        </div>
    );
    }
