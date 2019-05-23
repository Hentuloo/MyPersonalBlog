import React from 'react';
// import PostTemplates from 'templates/PostTemplates';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ViewTemplates from 'templates/ViewTemplates';
import Post from 'components/molecules/Post/Post';
import Baner from 'components/organism/Baner/Baner';

const POSTS_COUNTER = 4;

const PostWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px auto 70px auto;
  section {
    flex-grow: 1;
    flex-basis: calc(40% - 6px);
    margin: 20px 20px;
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
const request = (posts = false) => {
  if (posts) {
    const RequestPosts = posts.map(post => {
      const {
        id,
        postNumber,
        title,
        secondTitle,
        url,
        podcast,
        data,
        photo: { url: urlPhoto },
      } = post;
      return (
        <Post
          key={id}
          title={title}
          description={secondTitle}
          postNumber={postNumber}
          url={url}
          urlPhoto={urlPhoto}
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

const MainPage = ({ data: { posts } }) => {
  return (
    <div>
      <ViewTemplates pageTitle="Strona główna Kamil Chędkowski" pageTitleAs="h1">
        <div>
          <Baner as="header" />
          <PostWrapper id="tresc">{request(posts)}</PostWrapper>
        </div>
      </ViewTemplates>
    </div>
  );
};

const LastPosts = gql`
  query Post($first: Int!) {
    posts(where: { status: PUBLISHED }, orderBy: index_DESC, first: $first, skip: 0) {
      id
      postNumber
      title
      secondTitle
      url
      podcast
      data
      photo {
        url
        handle
        width
        height
      }
    }
  }
`;
MainPage.propTypes = {
  data: PropTypes.objectOf(Object),
};
MainPage.defaultProps = {
  data: null,
};

export default graphql(LastPosts, {
  options: {
    variables: {
      first: POSTS_COUNTER,
    },
  },
})(MainPage);
