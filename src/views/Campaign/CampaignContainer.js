import React, {useEffect, useState} from 'react';
import CampaignPresenter from './CampaignPresenter';
import post1 from '../../assets/post.1.md';
import post2 from '../../assets/post.2.md';
import post3 from '../../assets/post.3.md';

const postUrls = [post1, post2, post3];

const CampaignContainer = () => {
  const [data, setData] = useState({posts: []});
  const getPosts = async () => {
    const blogPosts = await Promise.all(
      postUrls.map((post) => {
        const newPost = fetch(post).then((response) => {
          return response.text();
        });
        return newPost;
      })
    );
    console.log(blogPosts);
    setData({posts: blogPosts});
  };
  useEffect(() => {
    getPosts();
  }, []);
  console.log(data.posts);
  return <CampaignPresenter posts={data.posts} />;
};
export default CampaignContainer;
