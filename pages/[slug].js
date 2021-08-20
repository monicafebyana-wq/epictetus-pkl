import Container from '@/components/Container'
import PostMetaTitle from "@/components/PostMetaTitle"
import PostsAuthor from "@/components/PostsAuthor"
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

export async function getServerSideProps({ params : {slug} }){
  //fetching data dgn slug
  const reqDetail = await fetch ( process.env.NEXT_PUBLIC_APIURL + '/posts?slug=' + slug )
  const detail = await reqDetail.json();

  if (!detail.length){
    return{
      notFound : true,
    }
  }

  return{
    props:{
      detail : detail.length > 0 ? detail[0] : false
    }
  }
}

export default function Detail({ detail }){
  return(
    <>
      <Head>
        <title>{detail.title} &ndash; Epictetus</title>
      </Head>
      <Container>
        <div className="md:w-6/12 w-full mx-auto flex flex-col items-center">
          <PostMetaTitle
            category={detail.category.name}
            date={detail.published_at}
            title={detail.title}
            center
          />
          <PostsAuthor
            authorName={detail.author.name}
            authorJob={detail.author.job}
            authorAvatar={process.env.NEXT_PUBLIC_APIURL + detail.author.avatar[0].url}
          />
        </div>
        <div className="md:w-10/12 w-full mx-auto my-10">
          <img src={process.env.NEXT_PUBLIC_APIURL + detail.thumbnail.url} className="w-full rounded-lg" />
        </div>
        <div className="md:w-8/12 w-full mx-auto leading-relaxed">
          <div className="text-xl mb-4">
            {detail.headline}
          </div>
          <div className="mb-4">
            <ReactMarkdown className="prose">
              {detail.content}
            </ReactMarkdown>
          </div>
        </div>
      </Container>
    </>
  )
}