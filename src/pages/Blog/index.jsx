import React from 'react';
import UserCard from '../../components/UserCard';
import Background from '../../assets/Images/blogBacground.png'

import "./blogs.scss"
import Blogs from './blogsData';
import ButtonDirections from '../../components/ButtonDirections/btn-directions';

export default function Blog() {
    const blogposts = Blogs.map( 
        function BlogCard(blog) {
           return ( 
                <div className="blog-card">
                    <UserCard 
                        key={blog.player.id}
                        avatar={blog.player.avatar} 
                        name={blog.player.name}
                        role={blog.player.role}
                        className={``}
                        message={blog.player.message}
                        btn={blog.player.btn}
                        link={blog.player.link}
                    />
                </div>

            )
            
        }
    )

    return (
        <div className='blog-page'>
            {/* <img src={Background} alt="" srcSet="" style={{width: '100%'}}  /> */}
            
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
        </div>
    )
}



<li className='listen'>second</li>
                
                
                
                
                