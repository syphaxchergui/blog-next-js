import Head from "next/head";

import BlogPost from "../components/blogPost";
import { blogPosts } from "../lib/data";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        {blogPosts.map((item) => (
          <BlogPost
            key={item.slug}
            slug={item.slug}
            title={item.title}
            content={item.content}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
}
