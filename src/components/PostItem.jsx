import React from "react";
import ButtonMain from "./UI/button/ButtonMain";
import {useNavigate} from 'react-router-dom';

const PostItem = (props) => {
    const router = useNavigate();
    return (
    <div className="post">
        <div className="post__content">
            <h2>{props.post.id} {props.post.title}</h2>
            <div>{props.post.body}</div>
        </div>
        <div className="post__btns">
            <ButtonMain onClick={() => router(`/posts/${props.post.id}`)}>Открыть</ButtonMain>
            <ButtonMain onClick={() => props.remove(props.post)}>Удалить</ButtonMain>
        </div>
    </div>
    )
}


export default PostItem;