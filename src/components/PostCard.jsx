import { Heart, Bookmark } from 'lucide-react'

const PostCard = ({ post, onLike, onDelete, onBookmark , bookmarks}) => {

    const isLiked = post.likes.includes('currentUser')
    const isBookmarked = bookmarks.includes(post.id)
    return (
        <div className="px-2 py-1 m-2  rounded-sm shadow-sm hover:shadow-xl">

            <div className="flex flex-row gap-2 ">
                <div className="h-5 w-5 rounded-lg bg-pink-500"></div>
                <div className="flex flex-col">
                    <h3 className="font-semibold text-md">{post.author.username}</h3>
                    <p className="text-gray-400">{post.author.handle}</p>
                </div>
            </div>
            <div>
                <p>{post.text}</p>
            </div>

            <div className="flex flex-row gap-4 align-middle">
               <button onClick={() => onLike(post.id)}>
  <Heart fill={isLiked ? 'red' : 'none'} stroke='red' size={16} /> {post.likes.length}
</button>
                <p>{post.createdAt}</p>
                <button onClick={() => onBookmark(post.id)}>
     <Bookmark fill={isBookmarked ? 'black' : 'none'}
     stroke='black'
     size={16}/>
                </button>     
                <button className='bg-black text-white
rounded-lg px-2 py-1 '
                    onClick={() => onDelete(post.id)}>Delete</button>


            </div>
        </div>
    )
}

export default PostCard
