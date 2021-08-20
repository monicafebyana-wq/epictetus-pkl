import PostMetaTitle from "@/components/PostMetaTitle"
import PostsAuthor from "@/components/PostsAuthor"
import { formatDate } from '../utils/utils'

export default function infoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
  slug
}){
  return(
    <>
    <PostMetaTitle 
      category={category} 
      title={title} 
      date={formatDate(date)}
      slug={slug}
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