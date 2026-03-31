import { useState } from "react"
import { posts as initialPosts } from '../data/data'

const usePosts = () => {
const [posts, setPosts] = useState(initialPosts)

const handleLike = (postId) => {
    const updated = posts.map(post => {
        if (post.id === postId) {
            const alreadyLiked = post.likes.includes('currentUser');
            
            if (alreadyLiked) {
                return { ...post, likes: post.likes.filter(id => id !== 'currentUser') };
            } else {
                return { ...post, likes: [...post.likes, 'currentUser'] };
            }
        }
        return post;
    });
    setPosts(updated);
};

const handleDelete = (postId) => {
    const updated = posts.filter(post => post.id !== postId)
    setPosts(updated)
}

const handleAddPost = () => {
    const newPost = {
        text : {value},
        createdAt : new Date().toISOString().split('T')[0],
        id:crypto.randomUUID() ,
    username: {value},
    handle: {value},
    avatar: {value},
    }

    setPosts([...posts, newPost])
}
return {posts, handleAddPost, handleDelete, handleLike}
}


export default usePosts
