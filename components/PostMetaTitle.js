import Link from 'next/link';
import { formatDate } from '../utils/utils';

export default function PostMetaTitle({category, title, date, center, slug}){
  return(
    <>
      <div className="flex items-center text-white/60 space-x-4">
        <div className="uppercase">
          {category}
        </div>
        <span>&bull;</span>
        <div>
          {formatDate(date)}
        </div>
      </div>
      <h2 className={`text-2xl mt-4 ${center ? 'text-center' : ''}`}>
      {slug ? 
        <Link href={`/${slug}`}><a>{title}</a></Link>
        :
        <>{title}</>}
      </h2>
    </>
  )
}