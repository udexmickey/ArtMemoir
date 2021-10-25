import React from 'react';
import UserCard from '../../components/UserCard';
import Background from '../../assets/Images/blogBacground.png'

import "./blogs.scss"
import Blogs from './blogsData';
import ButtonDirections from '../../components/ButtonDirections/btn-directions';
import Carousel from '../../components/Carousel';

export default function Blog() {
    const blogposts = Blogs.map( 
        (blog) => {
           return ( 
                <div className="blog-card">
                    {/* <UserCard 
                        key={blog.id}
                        avatar={blog.avatar} 
                        name={blog.name}
                        role={blog.role}
                        className={``}
                        message={blog.message}
                        btn={blog.btn}
                        link={blog.link}
                    /> */}
                    helllo
                </div>

            )
            
        }
    )

    return (
        <div className='blog-page'>
            {/* <img src={Background} alt="" srcset="" style={{width: '100%'}}  /> */}
            
            <div className="blog-badge" style={{background: `url(${Background})`, backgroundSize: '100%', width: '100%', backgroundRepeat: 'no-repeat'}}>
                <div className="blog-heading-container">
                    <div className="blog-heading-holder">
                        <div className="blog-heading-title">
                            Tempus at cursus maecenas erat id aenean pharetra.
                        </div>
                        <div className="blog-heading-text">
                        Amet auctor ac sed vel sed. Augue vel nec, ut gravida quis et. Pretium eu amet tempus elit, interdum consectetur arcu tortor. Pharetra pulvinar accumsan non facilisis amet. Lacus in.
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-container">
                <div className="blog-card-holder">
                    {blogposts }
                </div>
            </div>
            <ButtonDirections />
            <Carousel />
        </div>
    )
}



<li className='listen'>second</li>
                
                
                
                
                