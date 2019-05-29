import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GraphImg from 'graphcms-image';
import { Redirect } from 'react-router-dom';
import PostTemplates from 'templates/PostTemplates';
import Headline from 'components/atoms/Headline/Headline';

import PostContentBlock from 'components/organism/PostContentBlock/PostContentBlock';
import TheBestPosts from 'components/organism/TheBestPosts/TheBestPosts';

const StyledBestPostsWrapper = styled.section`
  margin-top: 100px;
  background-color: ${({ theme }) => theme.graySecondary};
`;
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
const ContentWrapper = styled.article`
  width: 100%;
  max-width: 1100px;
  margin: 0px auto;
  min-height: 500px;
  background-color: ${({ theme }) => theme.graySecondary};
  p {
    padding: 20px;
  }
`;

function PostPage({ data: { posts, loading, BestPosts, error } }) {
  console.log(loading);
  if (error) {
    return (
      <PostTemplates transparentContent>
        <Headline black>Błąd! w połączeniu z serwerem</Headline>
      </PostTemplates>
    );
  }
  if (posts && !loading) {
    const { postNumber, title, secondTitle: description, url, content, photo, keywords } = posts[0];
    return (
      <PostTemplates
        transparentContent
        contentPageSEO={description}
        keywordsSEO={keywords}
        postNumber={postNumber}
        pageTitle={title}
      >
        <>
          {posts && (
            <ImageWrapper>
              <Headline as="h1" black>
                {title}
              </Headline>
              <GraphImg image={photo} maxWidth={1200} alt={title} />
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
          <StyledBestPostsWrapper>
            <Headline black>Najpopularniejsze wpisy</Headline>
            <TheBestPosts as="section" BestPosts={BestPosts} />
          </StyledBestPostsWrapper>
        </>
      </PostTemplates>
    );
  }
  if (posts === [] && !loading) {
    return <Redirect to="/error" />;
  }
  return (
    <PostTemplates transparentContent>
      <Headline black>Ładowanie</Headline>
    </PostTemplates>
  );
}

export const singlePost = gql`
  query($url: String!, $first: Int!) {
    posts(where: { url: $url }) {
      postNumber
      keywords
      content
      title
      secondTitle
      url
      podcast
      data
      photo {
        handle
        width
        height
      }
    }
    BestPosts: posts(where: { status: PUBLISHED }, orderBy: index_DESC, first: $first, skip: 0) {
      id
      postNumber
      title
      secondTitle
      url
      podcast
      data
      photo {
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
        first: 20,
      },
    };
  },
})(PostPage);
