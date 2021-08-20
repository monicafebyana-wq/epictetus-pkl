import { useState } from 'react'
import CardPost from '@/components/CardPost'
import Container from '@/components/Container'
import Layout from '@/components/Layout'
import SectionHeader from '@/components/SectionHeader'
import Head from 'next/head'
import PostList from '@/components/PostList'

export async function getServerSideProps({ params: { category:categorySlug } }){
  const reqCategory = await fetch(process.env.NEXT_PUBLIC_APIURL + '/categories?slug=' + categorySlug);
  const category =await reqCategory.json();
  const reqPosts = await fetch(process.env.NEXT_PUBLIC_APIURL + '/posts?_where[category.slug]=' + categorySlug);
  const posts =  await reqPosts.json();

  return {
    props: {
      posts, 
      category: category.length > 0 ? category[0] : {}
    }
  }
}

export default function Posts({ posts, category }){
  return(
    <>
      <Head>
        <title>{category.name} &ndash; Epictetus</title>
      </Head>
      <Container>
        <SectionHeader>{category.name}</SectionHeader>
        <PostList 
        posts={posts} 
        noResultTitle="No Posts"
        noResultDescription="No posts in this category"
        />
      </Container>
    </>
  )
}