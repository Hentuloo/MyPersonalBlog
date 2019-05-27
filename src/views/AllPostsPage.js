import React from 'react';
import PropTypes from 'prop-types';
import PostTemplates from 'templates/PostTemplates';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import MultiPostsCreator from 'components/molecules/Post/MultiPostsCreator';

const MoreButton = styled.button`
  display: block;
  margin: 10px auto;
  padding: 10px 20px;
  border: 2px white solid;
  color: white;
  background-color: ${({ theme }) => theme.grayPrimary};
  font-weight: ${({ theme }) => theme.font.bold};
  text-transform: uppercase;
  cursor: pointer;
  &:focus,
  &:active {
    border: 2px solid ${({ theme }) => theme.grayThird};
  }
  &:hover {
    background-color: ${({ theme }) => theme.grayThird};
  }
`;
const PostWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  section {
    flex-grow: 1;
    flex-basis: calc(40% - 6px);
    margin: 10px 10px;
    min-width: 300px;
    max-width: 500px;
  }

  @media (min-width: 1300px) {
    section {
      flex-basis: calc(20% - 6px);
    }
  }
`;
const ContentWrapper = styled.section`
  padding-bottom: 15px;
`;

const AllPostsPage = ({ data: { loading, posts, postsConnection }, loadMorePosts }) => {
  const areMorePosts = posts ? posts.length < postsConnection.aggregate.count : false;
  return (
    <div>
      <PostTemplates
        titlePageSEO="Strona główna Kamil Chędkowski"
        contentPageSEO="Blog o zwiększaniu władzy nad sobą"
        keywordsSEO="chentek w dzialaniu wladza produktywnosc skutecznosc korzyść"
        pageTitle="Strona główna Kamil Chędkowski"
        pageTitleAs="h1"
      >
        <ContentWrapper>
          <PostWrapper id="tresc">
            <MultiPostsCreator posts={posts} />
          </PostWrapper>
          {areMorePosts && (
            <MoreButton disabled={loading} onClick={() => loadMorePosts()}>
              Następne wpisy
            </MoreButton>
          )}
        </ContentWrapper>
      </PostTemplates>
    </div>
  );
};
const posts = gql`
  query Post($first: Int!, $skip: Int!) {
    posts(where: { status: PUBLISHED }, orderBy: index_DESC, first: $first, skip: $skip) {
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
    postsConnection {
      aggregate {
        count
      }
    }
  }
`;
AllPostsPage.propTypes = {
  data: PropTypes.objectOf(Object),
  loadMorePosts: PropTypes.func.isRequired,
};
AllPostsPage.defaultProps = {
  data: null,
};

export const postsQueryVars = {
  skip: 0,
  first: 8,
};

export default graphql(posts, {
  options: {
    variables: postsQueryVars,
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.posts.length,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult;
          }
          return Object.assign({}, previousResult, {
            posts: [...previousResult.posts, ...fetchMoreResult.posts],
          });
        },
      });
    },
  }),
})(AllPostsPage);
