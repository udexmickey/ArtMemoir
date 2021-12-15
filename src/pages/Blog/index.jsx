import React, { useMemo, useState, useEffect } from 'react';
import UserCard from '../../components/UserCard';
// import Background from '../../assets/Images/blogBacground.png';
// import Home from '../../assets/Images/home.png';
import useFetch from '../../hooks/useFetch';
import './blog.scss';
import { url as URL } from '../../config/config.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { chunk } from 'lodash';
import HeaderBadge from '../../components/HeaderBadge'
import { Link } from 'react-router-dom';
import PageLoading from '../../components/Loader';
import hQ from '../../assets/Images/hQ.jpg'
import nt from '../../assets/Images/nt.jpg'
import sg from '../../assets/Images/sg-cov.jpg' 
import upd from '../../assets/Images/upd.jpg' 

export default function Blog() {

  const { loading, error, data} = useFetch(`${URL}post`);
  const rest = useMemo(() => (data ? data : ''), [data]);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () =>
      setWidth((prev) => window.innerWidth),
    );
  }, []);
  // if (loading) return <PageLoading />
  // if (error) return <h1 className='error-loader' style={{textAlign: 'center'}}> oops!!! Check your internet connection.</h1>;

  const chunkedBlogs = chunk(rest.posts, width <= 600 ? 1 : 4).map((data) => (
    <div className="blog-card-holder">
      {data.map((blog) => (
        <div className="blog-card">
          <UserCard
          key={blog.id}
          avatar={blog.image}
          name={blog.title}
          message={blog.post.substring(0, 70)+'...'}
          btn={'Read More'}
          link={'blogs'}
        />
       </div>
      ))}
    </div>
  ));

  return (
    <div className="blog-page">
      {/* <img loading="lazy"src={Background} alt="" srcset="" style={{width: '100%'}}  /> */}
      <HeaderBadge name={'Announcement'} />

      <div className="">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={true}
          interval={10000}
        >

          <div
            className="blog-badge"
            style={{
              backgroundSize: '100%',
              width: '100%',
            }}
          >
            <img loading="lazy"src={hQ} alt="" />
            {/* <div className="blog-heading-container">
              <div className="blog-heading-holder">
                <div className="blog-heading-title">
                  Tempus at cursus maecenas erat id aenean pharetra.
                </div>
                <div className="blog-heading-text">
                  Amet auctor ac sed vel sed. Augue vel nec, ut gravida quis et.
                  Pretium eu amet tempus elit.
                </div>
                <button className='blog-anouncement-btn'>
                  <Link style={{color: '#fff'}} to='/blog/announcement'>Read more</Link>
                </button>
              </div>
            </div> */}
          </div>
          
          <div
            className="blog-badge"
            style={{
              backgroundSize: '100%',
              width: '100%',
            }}
          >
            <img loading="lazy" src={nt} alt="" />
            {/* <div className="blog-heading-container">
              <div className="blog-heading-holder">
                <div className="blog-heading-title">
                  The Announcement is a banger.
                </div>
                <div className="blog-heading-text">
                  Amet auctor ac sed vel sed. Augue vel nec, ut gravida quis et.
                  Pretium eu amet tempus elit.
                </div>
                <button className='blog-anouncement-btn'>
                  <Link style={{color: '#fff'}} to='/blog/announcement'>Read more</Link>
                </button>
              </div>
            </div> */}
          </div>

          <div
            className="blog-badge"
            style={{
              backgroundSize: '100%',
              width: '100%',
            }}
          >
            <img loading="lazy" src={sg} alt="" />
          </div>

          <div
            className="blog-badge"
            style={{
              backgroundSize: '100%',
              width: '100%',
            }}
          >
            <img loading="lazy" src={upd} alt="" />
          </div>
          </Carousel>

      </div>
     <div className="blogs3" style={{position: 'relative', display: 'block'}}>
     <HeaderBadge name={'Blogs'} />
     </div>
     <h4 className='blogs-description'>Stay updated with our Blogs</h4>
      
      <div className="blog-container">
      {loading && <PageLoading/>}

        { error ?
            <h1 className='error-loader'> OOps!!! Check your internet connection.</h1>
               : 
               <Carousel
               autoPlay={true}
               showStatus={false}
               showThumbs={true}
               showIndicators={true}
               infiniteLoop={true}
               interval={7000}
             > 
             {chunkedBlogs}
        </Carousel>}
      </div>
      {/* <button onClick={reFresh}>Fresh</button> */}
     <div className="btn-blogs">
        <Link to='/blogs'>View More Blogs</Link >
     </div>
    </div>
  );
}

<li className="listen">second</li>;
