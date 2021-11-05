import React from 'react';
import UserCard from '../../components/UserCard';
import Background from '../../assets/Images/blogBacground.png';
import useFetch from '../../hooks/useFetch';
import './blogs.scss';
// import Blogs from './blogsData';
// import ButtonDirections from '../../components/ButtonDirections/btn-directions';
import { url as URL, testServer} from '../../config/config.json';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { chunk } from 'lodash';

export default function Blog() {
  const { loading, error, data, reFresh } = useFetch(testServer);
  const [...rest] = data ? data : [];

  if (loading) return <h1>Loading...</h1>;
  if (data) console.log(data);
  if (error) console.error('error...' + error);

  const dataArray = chunk(rest, 3).map((data) => (
    <div className="blog-card-holder">
      {data.map((blog, idx) => (
        <div className="blog-card">
        <UserCard
            key={blog.id}
            // name={blog.id}
            message={blog.title}
            avatar={blog.url}
        />
        </div>
      ))}
    </div>
  ));

  // const styling = {
  //   display: 'block',
  //   fontSize: '48',
  //   color: 'white',
  //   border: 'solid blue 5px',
  //   // height: '59px'
  // };

  // const blogposts = rest.map(function BlogCard(blog, idx) {
  //   return (
  //     <div className="blog-card">
  //       <UserCard
  //         key={idx}
  //         avatar={blog.player.avatar}
  //         name={blog.player.name}
  //         role={blog.player.role}
  //         className={``}
  //         message={blog.player.message}
  //         btn={blog.player.btn}
  //         link={blog.player.link}
  //       />
  //     </div>
  //   );
  // });

  return (
    <div className="blog-page">
      {/* <img src={Background} alt="" srcset="" style={{width: '100%'}}  /> */}

      <div
        className="blog-badge"
        style={{
          background: `url(${Background})`,
          backgroundSize: '100%',
          width: '100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="blog-heading-container">
          <div className="blog-heading-holder">
            <div className="blog-heading-title">
              Tempus at cursus maecenas erat id aenean pharetra.
            </div>
            <div className="blog-heading-text">
              Amet auctor ac sed vel sed. Augue vel nec, ut gravida quis et.
              Pretium eu amet tempus elit, interdum consectetur arcu tortor.
              Pharetra pulvinar accumsan non facilisis amet. Lacus in.
            </div>
          </div>
        </div>
      </div>

      <div className="blog-container">
        <Carousel
          autoPlay={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
        >
          {/* {blogposts} */}
          {dataArray}
        </Carousel>
      </div>
      <button onClick={reFresh}>Fresh</button>
    </div>
  );
}

<li className="listen">second</li>;
