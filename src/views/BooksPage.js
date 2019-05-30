import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PostTemplates from 'templates/PostTemplates';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Headline from 'components/atoms/Headline/Headline';
import BookElement from 'components/molecules/BookElement/BookElement';

const BooksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  section {
    flex-grow: 1;
    flex-basis: 33.333%;
    margin: 20px 10px;
    min-width: 220px;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
      margin: 20px 40px;
      min-width: 350px;
    }
  }
`;

function BooksPage({ data: { bookses } }) {
  let booksElements;
  if (bookses) {
    booksElements = bookses.map(e => <BookElement key={e.title} data={e} />);
  }
  return (
    <div>
      <PostTemplates
        contentPageSEO="Książki które przeczytał Kamil Chędkowski"
        keywordsSEO="Książki Kamil Chędkowski"
        pageTitle="Książki"
      >
        <article>
          <Headline black as="h1">
            KSIĄŻKI
          </Headline>
          <Paragraph blue center>
            Przedstawiam tu książki, które z mojej własnej woli zostały wybrane jako lektury do
            stania się pod jakimś względem lepszy. Z niektórych zostały już tylko dobre wrażenie, są
            za to też i takie, które przewlekają się w moim codziennym życiu pod postacią krótkich
            myśli bądź wyborów. Z niektórymi postanowiłem się dodatkowo podzielić tutaj przekazując
            pojedynczą opinię do tego poświęconym poście.
          </Paragraph>
          {<BooksWrapper>{booksElements}</BooksWrapper> || (
            <Headline center black>
              KSIĄŻKI: ładowanie
            </Headline>
          )}
        </article>
      </PostTemplates>
    </div>
  );
}

const BooksQuery = gql`
  query Books {
    bookses(where: { status: PUBLISHED }, orderBy: index_DESC) {
      kind
      title
      description
      photo {
        handle
        width
        height
      }
    }
  }
`;
BooksPage.propTypes = {
  data: PropTypes.objectOf(Object),
  // eslint-disable-next-line react/no-unused-prop-types
  href: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.objectOf(Object),
};
BooksPage.defaultProps = {
  data: null,
  children: null,
  href: '#',
};

export default graphql(BooksQuery)(BooksPage);
