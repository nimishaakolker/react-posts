import React from 'react'
import PostCard from './PostCard'
import usePosts from '../hooks/usePosts'
const Feed = () => {
  const {posts, handleLike, handleDelete} = usePosts()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        { posts.map(post => (
            <PostCard key={post.id} post={post}
            onLike={handleLike}
            onDelete={handleDelete}
            
            />
        ))}
      
    </div>
  )
}

export default Feed
