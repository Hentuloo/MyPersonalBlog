import React from 'react';
import PropTypes from 'prop-types';
import PostTemplates from 'templates/PostTemplates';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import MultiPostsCreator from 'components/molecules/Post/MultiPostsCreator';
import Headline from 'components/atoms/Headline/Headline';
import Search from 'components/atoms/Input/Search';

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
const ContentWrapper = styled.article`
  padding-bottom: 15px;
`;

function getUniqueObjectsFromArray(arr, comp) {
  const unique = arr
    .map(e => e[comp])
    // store the keys of the unique objects
    .map((e, i, final) => final.indexOf(e) === i && i)
    // eliminate the dead keys & store unique objects
    .filter(e => arr[e])
    .map(e => arr[e]);

  return unique;
}

const responsResult = (arr, load, uniqueRespons) => {
  if (arr.length)
    return (
      <>
        <Headline black as="h1">
          Wyniki wyszukiwania:
        </Headline>
        <MultiPostsCreator posts={uniqueRespons} />
      </>
    );

  if (load) return <MultiPostsCreator posts={false} />;
  return (
    <>
      <Headline black as="h1">
        Nie znalazłem takiej treści! Spróbuj jeszcze raz
      </Headline>
      <Search placeholder="Wyszukaj wpis który zawiera..." />
    </>
  );
};

const SearchPage = ({ data: { content, titles, loading } }) => {
  const array1 = content || false;
  const array2 = titles || false;
  let uniqueRespons = [];
  let array3 = [];
  if (array1 || array2) {
    array3 = array1.concat(array2);
    uniqueRespons = getUniqueObjectsFromArray(array3, 'title');
  }
  return (
    <div>
      <PostTemplates
        contentPageSEO="Wyszukiwarka wpisów"
        keywordsSEO="Wyszukaj wpis na chentek w dzialaniu"
        pageTitle="Szukaj"
      >
        <ContentWrapper>
          <PostWrapper>{responsResult(array3, loading, uniqueRespons)}</PostWrapper>
        </ContentWrapper>
      </PostTemplates>
    </div>
  );
};

export const singlePost = gql`
  query Post($like: String!) {
    content: posts(where: { content_contains: $like, status: PUBLISHED }, orderBy: index_DESC) {
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
    titles: posts(where: { title_contains: $like, status: PUBLISHED }, orderBy: index_DESC) {
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
SearchPage.propTypes = {
  data: PropTypes.objectOf(Object),
};
SearchPage.defaultProps = {
  data: null,
};

export default graphql(singlePost, {
  options: ({ match }) => {
    return {
      variables: {
        like: match.params.like,
      },
    };
  },
})(SearchPage);
