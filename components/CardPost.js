import InfoPost from "@/components/InfoPost";
import Link from 'next/link';

export default function CardPost(props){
  return(
    <article>
      <Link href={`/${props.slug}`}>
        <a>
        <img src={process.env.NEXT_PUBLIC_APIURL + props.thumbnail.formats.small.url} className="w-full rounded mb-4" />
        </a>
      </Link>
      <InfoPost 
        category={props.category.name}
        date={props.published_at}
        title={props.title}
        shortDescription={props.headline}
        authorAvatar={process.env.NEXT_PUBLIC_APIURL + props.author.avatar[0].url}
        authorName={props.author.name}
        authorJob={props.author.job}
        slug={props.slug}
      />
    </article>
  );
}