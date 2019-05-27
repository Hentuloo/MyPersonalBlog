import React from 'react';
import Post from 'components/molecules/Post/Post';

const request = (posts = false) => {
  if (posts) {
    const RequestPosts = posts.map(post => {
      const { id, postNumber, title, secondTitle, url, podcast, data, photo } = post;
      return (
        <Post
          key={id}
          title={title}
          description={secondTitle}
          postNumber={postNumber}
          url={url}
          photo={photo}
          podcast={podcast}
          data={data}
        />
      );
    });
    return RequestPosts;
  }
  // if (error) return <div>Błąd</div>;
  return (
    <>
      <Post disable />
      <Post disable />
      <Post disable />
      <Post disable />
    </>
  );
};

const MultiPostsCreator = ({ posts }) => <>{request(posts)}</>;

export default MultiPostsCreator;
