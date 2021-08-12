export default function PostsAuthor({
  authorAvatar,
  authorJob,
  authorName
}){
  return(
    <div className="flex items-center mt-5">
      <img src={authorAvatar} className="w-14 h-14 rounded-full object-cover mt-4" />
      <div className="ml-4">
        <h3>{authorName}</h3>
        <div className="text-white/60 text-sm mt-1">{authorJob}</div>
      </div>
    </div>
  )
}