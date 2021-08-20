import InfoPost from "@/components/InfoPost"
import Link from 'next/link';

export default function featuredPost(props){
  return(
    <article>
      <div className="flex -mx-4 lg:items-center items-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
          <Link href={`/${props.slug}`}>
            <a>
              <img src={props.thumbnail.formats.medium.url} className="rounded-xl w-full mb-4 md:mb-0"/>
            </a>
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 px-4">
          <InfoPost 
            category={props.category.name}
            date={props.published_at}
            title={props.title}
            shortDescription={props.headline}
            authorAvatar={props.author.avatar[0].url}
            authorName={props.author.name}
            authorJob={props.author.job}
            slug={props.slug}
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  )
}