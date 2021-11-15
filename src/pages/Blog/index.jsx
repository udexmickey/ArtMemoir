import React, { useMemo, useState, useEffect } from 'react';
import UserCard from '../../components/UserCard';
import Background from '../../assets/Images/blogBacground.png';
import Home from '../../assets/Images/home.png';
import useFetch from '../../hooks/useFetch';
import './blogs.scss';
import { url as URL } from '../../config/config.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { chunk } from 'lodash';

export default function Blog() {
  const { loading, error, data, reFresh } = useFetch(`${URL}post`);
  const rest = useMemo(() => (data ? data : ''), [data]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () =>
      setWidth((prev) => window.innerWidth),
    );
  }, []);
  if (loading) return <h1>Loading...</h1>;
  if (rest) console.log(rest.posts);
  if (error) console.error('error...' + error);

  const chunkedBlogs = chunk(rest.posts, width <= 600 ? 1 : 3).map((data) => (
    <div className="blog-card-holder">
      {data.map((blog) => (
        <div className="blog-card">
          <UserCard
          key={blog.id}
          avatar={blog.cover}
          name={blog.title}
          message={blog.post}
          btn={'Read More'}
          link={blog.link}
        />
       </div>
      ))}
    </div>
  ));

  return (
    <div className="blog-page">
      {/* <img src={Background} alt="" srcset="" style={{width: '100%'}}  /> */}
      <Carousel
          autoPlay={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          interval={7000}
        >
      <div
        className="blog-badge"
        style={{
          backgroundSize: '100%',
          width: '100%',
        }}
      >
        <img src={Background} alt="" />
        <div className="blog-heading-container">
          <div className="blog-heading-holder">
            <div className="blog-heading-title">
              Tempus at cursus maecenas erat id aenean pharetra.
            </div>
            <div className="blog-heading-text">
              Amet auctor ac sed vel sed. Augue vel nec, ut gravida quis et.
              Pretium eu amet tempus elit.
            </div>
            <button className='blog-anouncement-btn'>Read more</button>
          </div>
        </div>
      </div>
      
      <div
        className="blog-badge"
        style={{
          backgroundSize: '100%',
          width: '100%',
        }}
      >
        <img src={Home} alt="" />
        <div className="blog-heading-container">
          <div className="blog-heading-holder">
            <div className="blog-heading-title">
              The Announcement is a banger.
            </div>
            <div className="blog-heading-text">
              Amet auctor ac sed vel sed. Augue vel nec, ut gravida quis et.
              Pretium eu amet tempus elit.
            </div>
            <button className='blog-anouncement-btn'>Read more</button>
          </div>
        </div>
      </div>
      </Carousel>
      <div className="blog-container">
        <Carousel
          autoPlay={true}
          showStatus={false}
          showThumbs={true}
          showIndicators={true}
          infiniteLoop={true}
          // interval={5000}
        >
        {chunkedBlogs}
        </Carousel>
      </div>
      <button onClick={reFresh}>Fresh</button>
    </div>
  );
}

<li className="listen">second</li>;
