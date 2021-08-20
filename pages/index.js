 import Head from 'next/head'
import FeaturedPost from '@/components/FeaturedPost'
import Container from '@/components/Container'
import PostList from '@/components/PostList'

export async function getServerSideProps(){
  //fetching API featured post
  const reqFeatured = await fetch(process.env.NEXT_PUBLIC_APIURL + '/posts?featured=true&&_sort=id:DESC&&_limit=1 ');
  const featured = await reqFeatured.json();

  //fetching API post biasa
  const reqPosts = await fetch(process.env.NEXT_PUBLIC_APIURL + '/posts?featured=false&&_sort=id:DESC');
  const posts =  await reqPosts.json();

  return {
    props: {
      featured : featured.length > 0 ? featured[0] : false,
      posts
    }
  }
}

export default function Home({ featured, posts }) {
  return (
    <>
      <Head>
        <title>Home &ndash; Epictetus</title>
      </Head>
      <Container>
        {featured &&
          <FeaturedPost 
          {...featured}/>
        }
        <PostList posts={posts}/>
      </Container>
    </>
  )
}
