import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ViewTemplates from 'templates/ViewTemplates';
import MultiPostsCreator from 'components/molecules/Post/MultiPostsCreator';
import Baner from 'components/organism/Baner/Baner';

const POSTS_COUNTER = 4;

const PostWrapper = styled.article`
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

const MainPage = ({ data: { posts } }) => {
  return (
    <div>
      <ViewTemplates
        contentPageSEO="Blog o zwiększaniu władzy nad sobą"
        keywordsSEO="chentek w dzialaniu wladza produktywnosc skutecznosc korzyść"
        pageTitle="Strona główna"
        pageTitleAs="h1"
      >
        <div>
          <Baner as="header" />
          <PostWrapper id="tresc">{<MultiPostsCreator posts={posts} />}</PostWrapper>
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
