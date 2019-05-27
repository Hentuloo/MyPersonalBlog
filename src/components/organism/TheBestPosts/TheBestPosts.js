import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Post from 'components/molecules/Post/Post';

const PostWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 10px auto 10px auto;
  section {
    flex-grow: 1;
    flex-basis: calc(40% - 6px);
    margin: 10px 5px;
    min-width: 300px;
    max-width: 500px;
  }

  @media (min-width: 1300px) {
    section {
      flex-basis: calc(20% - 6px);
      min-width: 200px;
    }
  }
`;

const requestRandom = (posts = false) => {
  if (posts) {
    const propPosts = [...posts];

    const postsElements = [];
    for (let n = 0; n <= 3; n++) {
      const randomNumber = Math.floor(Math.random() * propPosts.length);
      postsElements.push(propPosts[randomNumber]);
      propPosts.splice(randomNumber, 1);
    }
    return postsElements.map(post => {
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
  }
  return 0;
};

const TheBestPosts = ({ BestPosts }) => {
  const bestPosts = requestRandom(BestPosts);
  return <PostWrapper>{bestPosts}</PostWrapper>;
};

TheBestPosts.propTypes = {
  BestPosts: PropTypes.arrayOf(Object),
};
TheBestPosts.defaultProps = {
  BestPosts: null,
};

export default TheBestPosts;
