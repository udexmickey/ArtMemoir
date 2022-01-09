import React from 'react';
import { FaInstagram, FaMedium } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import IconList from '../../components/IconList/IconList';
import './blog-announcement.scss';

const BlogAnnouncement = () => {
  // const chunkedBlogs = chunk(rest.posts, width <= 600 ? 1 : 4).map((data) => (
  // data.map((blog) => (
  //     <UserCard
  //     key={blog.id}
  //     avatar={blog.image}
  //     name={blog.title}
  //     message={blog.post}
  //     messageLength={100}
  //     readMore={' '}
  //     btn={'Read More'}
  //     link={'blogs'}
  //   />
  // ))))



  return (
    <div className="announcement-blog-container">
      <div className="blog-container-showcase">
        <p className="showcase-heading">
          What is ArtMemoir?
        </p>
      </div>
      <div className="content-container">
        <p>
          We are a group of professional artists and digital creators representing all spaces of Art 
          creating arts of various cultures, Tribes, and indifferent art spaces minted in NFTs. Our Focus 
          is on the Exploration of Art beyond just beautification as well as supporting the Art community 
          totally and elevating young and rising artists in the space through the blockchain with NFTs.
          As great lovers of art and supporters of artists. We are promoting various cultures/tribes of 
          the world through our arts, but not limited to popular tribes or cultures.
          However, our NFTs have been sectioned into single NFTs and Collection NFTs, all of which have 
          value to our Investors, Partners, Community, and the World of Art globally.
          Having various. artists at heart, our single NFT is mainly to support the artists while our collection 
          NFTs are designed to give our investors and partners value that can be used in real-time. These NFTs will 
          be used as a medium of transactions, stakes, shares, and lots more. Here art won’t just be used only for 
          beatifications and preserving the cultural heritage of the people or the art they represent but will also be 
          used in real-time situations without being controlled by a centralized organization or a third party, 
          this will be achieved through the use of Blockchain.
          ArtMemoir is a mix between a blockchain startup and an art gallery. We provide physical, tangible, immutable 
          artwork on our platform to those looking for cultural representation from around the world as well as help with 
          auctioning off some of the most popular pieces. We are your best choice.
          Why ArtMemoir ?
          Unlike just minting and selling Art as Non-Fungible tokens in Blockchain based marketplaces, Artmemoir has 
          added lots of utilities and packages that comes together with just buying their Art where they are listed and 
          also will be giving their investors the ability to use these Art works in real time situations breaking the bond 
          that Art is mainly for preservation and Beauty. Also Art Memoir will be introducing a detailed NFT-Economics so 
          our community, partners and investors will know how funds will be distributed according to the sections pointed out. 
          This will aid transparency in carrying out the objectives of Art memoir and also building trust between our 
          team and our community at large.
          Watch out for the lunch of Art memoir’s official website to learn more 😉 🥰😘
        </p>
        {/* <IconList /> */}
        <div className="icons">
          <ul>
            <li>
              <Link to='/blogs' >
                <FaMedium />
              </Link>
            </li>
            <li>
              <Link to='/blogs' >
                <FaInstagram />
              </Link>
            
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogAnnouncement;
