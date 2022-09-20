import Head from 'next/head';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const callApi = async () => {
      const result = await axios({
        url: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@inatnun',
      });
      // console.log('result', result);
      setBlogs(result?.data?.items);
    };
    callApi();
  }, []);
  console.log(blogs);
  return (
    <div>
      {blogs &&
        blogs.map((blog) => {
          return (
            <div key={blog.guid}>
              <div>{blog.title}</div>
              <img src={blog.thumbnail} />
              <a href={blog.link}>go to blog</a>
            </div>
          );
        })}
    </div>
  );
};
export default function Home() {
  // const blogs = aw
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GTM_ID}');
      `}
      </Script>
      <main>
        <Blogs />
      </main>
    </div>
  );
}
