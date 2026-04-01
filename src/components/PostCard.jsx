import { Heart, Bookmark } from 'lucide-react'

const PostCard = ({ post, onLike, onDelete }) => {

    const isLiked = post.likes.includes('currentUser')
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
                <p> <Heart
                    fill={isLiked?'red' : 'none'}
                    stroke='red'
                    size={16} />{post.likes.length}</p>
                <p>{post.createdAt}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5z" />
                </svg>

                <button className='bg-black text-white
rounded-lg px-2 py-1 '
                    onClick={() => onDelete(post.id)}>Delete</button>


            </div>
        </div>
    )
}

export default PostCard
