import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react';
import { url } from '../../config/config.json'
import IconList from '../../components/IconList/IconList';
import './blog-announcement.scss';
import { useParams } from 'react-router-dom';

const BlogAnnouncement = () => {

  const [result, setResult] = useState()

  const params = useParams()

  const fetchBlog = useCallback(

    async () => {
      const {data} = await axios.get(`${url}post?id=${params.id}`)
      setResult(data.posts[0])
    },
    [result],
  )

  useEffect(() => {
    fetchBlog()
  }, [])

  return (
    <div className="announcement-blog-container">
      <div className="blog-container-showcase">
        <div className="">
          <div className="blog-image-container">
            <img src={result?.image} alt="" />
          </div>
          <p className="showcase-heading">
            {result?.title}
          </p>
        </div>
      </div>
      <div className="content-container">
        <p>
          {result && result.post}
          </p>
        
        <div className="icons">
          <IconList />
        </div>
      </div>
    </div>
  );
};

export default BlogAnnouncement;
