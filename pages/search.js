import Container from '@/components/Container'
import SectionHeader from '@/components/SectionHeader'
import Head from 'next/head'
import PostList from '@/components/PostList'

export async function getServerSideProps({ query: { q } }){
  const reqPosts = await fetch(process.env.NEXT_PUBLIC_APIURL + '/posts?title_contains=' + q);
  const posts =  await reqPosts.json();

  return {
    props: {
      posts,
      q
    }
  }
}

export default function Search({ posts, q }){
  return(
    <>
      <Head>
        <title>Search &ndash; Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>Search: {q}</SectionHeader>
        <PostList posts={posts} />
      </Container>
    </>
  )
}