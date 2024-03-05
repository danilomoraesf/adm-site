"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { createContainer } from 'unstated-next';

export interface MemosPostsPage {
    photoUrl: any,
    user: any
}

const usePosts = () => {

    const [postsmemo, setPostsmemo] = useState<MemosPostsPage[]>([])
    const getPostsmemo = async () => {
        const response = await axios.get('http://192.168.15.49:3003/post');
        setPostsmemo(response.data)
    }


    useEffect(() => {
        getPostsmemo()
    }, [])


    const deletePostsmemo = async (id: string) => {
        const response = await axios.delete('http://192.168.15.49:3003/post/' + id);
        setPostsmemo(response.data)
    }


    return { postsmemo, deletePostsmemo }
}

export const PostsContainer = createContainer(usePosts)
export default PostsContainer