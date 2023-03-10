import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isComLoading, comError] = useFetching(async () => {
        const response = await PostService.getCommentsById(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, []);

    return (
        <div style={{color: '#fff'}}>
            <h1>Страница поста c id = {params.id}</h1>

            {isLoading
                ? <Loader/>
                : <div>{post.id}.{post.title}</div>
            }

            <h1>Комментарии</h1>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm =>
                    <div style={{marginTop: 20}}>
                        <h3>{comm.email}</h3>
                        <p>{comm.body}</p>
                    </div>
                    )}
                </div>
            }

        </div>
    );
};

export default PostIdPage;