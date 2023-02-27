import React, {useState} from 'react';
import InputMain from "./UI/input/InputMain";
import ButtonMain from "./UI/button/ButtonMain";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);

        setPost({title: '', body: ''});
    }

    return (
        <form>
            <InputMain value={post.title}
                       onChange={e => setPost({...post, title: e.target.value})}
                       type="text"
                       placeholder="Название поста"/>
            <InputMain
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"/>
            <ButtonMain onClick={addNewPost}>Создать пост</ButtonMain>
        </form>
    );
};

export default PostForm;