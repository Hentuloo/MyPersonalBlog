import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PostTemplates from 'templates/PostTemplates';

import BanerTitle from 'components/atoms/BanerTitle/BanerTitle';
import PostContentBlock from 'components/organism/PostContentBlock/PostContentBlock';

const ImageBlock = styled.div``;
const ContentWrapper = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: ${({ theme }) => theme.graySecondary};
  p {
    padding: 20px;
  }
`;

function PostPage({ data: { posts } }) {
  const content = posts ? (
    <PostContentBlock
      title={posts[0].title}
      description={posts[0].description}
      url={posts[0].url}
      content={posts[0].content}
    />
  ) : (
    <div>DSSS</div>
  );
  return (
    <div>
      <PostTemplates transparentContent>
        <>
          <BanerTitle as="header" title="Kim jestem" />
          {posts && <ImageBlock />}
          <ContentWrapper>{content}</ContentWrapper>
        </>
      </PostTemplates>
    </div>
  );
}

export const singlePost = gql`
  query Post($url: String!) {
    posts(where: { url: $url }) {
      postNumber
      title
      secondTitle
      url
      podcast
      data
      content
      photo {
        url
        handle
        width
        height
      }
    }
  }
`;
PostPage.propTypes = {
  data: PropTypes.objectOf(Object),
};
PostPage.defaultProps = {
  data: null,
};

export default graphql(singlePost, {
  options: ({ match }) => {
    return {
      variables: {
        url: match.params.postTitle,
      },
    };
  },
})(PostPage);
