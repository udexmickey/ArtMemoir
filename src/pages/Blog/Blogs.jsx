import React, { useMemo, useState, useEffect } from 'react';
import UserCard from '../../components/UserCard';
import useFetch from '../../hooks/useFetch';
import { url as URL } from '../../config/config.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { chunk } from 'lodash';
import PageLoading from '../../components/Loader';
import HeaderBadge from '../../components/HeaderBadge'
import './blogslist.scss';

const Blogs = () => {
  const { loading, error, data} = useFetch(`${URL}post`);
  const rest = useMemo(() => (data ? data : ''), [data]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () =>
      setWidth((prev) => window.innerWidth),
    );
  }, []);
  if (loading) return <PageLoading />
  // if (rest) console.log(rest.posts);
  if (error) return <h1 className='error-loader'> oops!!! Check your internet connection.</h1>;

  const chunkedBlogs = chunk(rest.posts, width <= 600 ? 1 : 100).map((data) => (
    <div className="blogs-card-holder">
      {data.map((blog) => (
        <div className="blogs-card">
          <UserCard
          key={blog.id}
          avatar={blog.image}
          name={blog.title}
          message={blog.post}
          messageLength={100}
          readMore={"Read More ▼"}
          readLess={"Read Less ▲"}
          btn={'Read More'}
          link={'/blog/blogs'}
        />
       </div>
      ))}
    </div>
  ));

  return (
    <div className="blogslist-container">
            <HeaderBadge name={'Blogs'} />
      {/* <div className="blogs-container-showcase">
        <p className="showcase-heading">
          Here Are the List of Blogs
        </p>
      </div> */}
      { error ?
        <h1 className='error-loader'> OOps!!! Check your internet connection.</h1>
        : 
        <div className="blogs-content-container">
          <div>
            {chunkedBlogs}
          </div>
        </div>
      }
    </div>
  );
};

export default Blogs;
