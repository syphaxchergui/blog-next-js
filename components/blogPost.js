import React from "react";
import Link from "next/link";

function BlogPost({ slug, title, date, content }) {
  return (
    <div className='my-6 px-4 py-6 border rounded'>
      <h2 className='text-3xl mb-2'>
        <Link href={`blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </h2>
      <p className='text-grey-500 mb-2 font-space  text-xs'>• {date} •</p>
      <p className='truncate text-white'>{content}</p>
    </div>
  );
}

export default BlogPost;
