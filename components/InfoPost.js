import PostMetaTitle from "@/components/PostMetaTitle"
import PostsAuthor from "@/components/PostsAuthor"

export default function infoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob
}){
  return(
    <>
    <PostMetaTitle 
      category={category} 
      title={title} 
      date={date}
    />
    <p className="text-white/60 mt-5 w-10/12">
    {shortDescription}
    </p>
    <PostsAuthor
      authorAvatar={authorAvatar}
      authorJob={authorJob}
      authorName={authorName}
    />
    </>
  );
}