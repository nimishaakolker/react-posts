export const posts = [
{
  id:  crypto.randomUUID(),
  text: "The more you learn the more you earn ",
  createdAt: new Date().toISOString().split('T')[0],
  author: {
    id:crypto.randomUUID() ,
    username: "rahul",
    handle: "rahul@string",
    avatar: "url"
  },
  likes: ["userId1", "userId2"], 
},
{
  id: crypto.randomUUID() ,
  text: "Let it goo, this too shall pass",
  createdAt: new Date().toISOString().split('T')[0],
  author: {
    id: crypto.randomUUID() ,
    username: "rahul",
    handle: "rahul@string",
    avatar: "url"
  },
  likes: ["userId1", "userId2"], // array of user ids
}



]