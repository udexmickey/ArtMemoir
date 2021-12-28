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
import Announce from '../../components/Announcer';
import announcements from './announcementData'
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

  const AnnouncementDiv = announcements.map((item, idx) => (
    <Announce 
      key={item.idx}
      img={item.img}
      title={item.title}
      message={item.message}
      btn={item.btn}
      btnlink={item.btnlink}
    />
  ))
  

  return (
    <div className="blog-page">
      {/* <img className="announce-img"src={Background} alt="" srcset="" style={{width: '100%'}}  /> */}
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
          {AnnouncementDiv}
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
