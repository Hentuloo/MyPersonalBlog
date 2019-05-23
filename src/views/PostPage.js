import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GraphImg from 'graphcms-image';

import PostTemplates from 'templates/PostTemplates';
import Headline from 'components/atoms/Headline/Headline';

import PostContentBlock from 'components/organism/PostContentBlock/PostContentBlock';

const ImageWrapper = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 0px auto;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
    box-shadow: 0px 0px 250px 34px rgba(0, 0, 0, 0.81);
  }
  h1 {
    position: absolute;
    top: 0%;
    opacity: 0.8;
    z-index: 4;
    transition: opacity 0.6s ease-in-out;
  }
  &:hover {
    h1 {
      opacity: 0;
    }
    &::after {
      opacity: 1;
    }
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0px auto;
  min-height: 500px;
  background-color: ${({ theme }) => theme.graySecondary};
  p {
    padding: 20px;
  }
`;

function PostPage({ data: { posts } }) {
  if (posts) {
    const { postNumber, title, secondTitle: description, url, content, photo } = posts[0];

    return (
      <PostTemplates transparentContent postNumber={postNumber} pageTitle={title}>
        <>
          {posts && (
            <ImageWrapper>
              <Headline as="h1" black>
                {title}
              </Headline>
              <GraphImg image={photo} maxWidth={1200} />
            </ImageWrapper>
          )}
          <ContentWrapper>
            {
              <PostContentBlock
                title={title}
                description={description}
                url={url}
                content={content}
              />
            }
          </ContentWrapper>
        </>
      </PostTemplates>
    );
  }
  return (
    <PostTemplates transparentContent>
      <ContentWrapper>Ładowanie</ContentWrapper>
    </PostTemplates>
  );
}

export const singlePost = gql`
  query Post($url: String!) {
    posts(where: { url: $url }) {
      postNumber
      content
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
