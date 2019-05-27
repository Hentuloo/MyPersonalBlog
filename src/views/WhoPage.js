import React, { createElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import marksy from 'marksy';

import PostTemplates from 'templates/PostTemplates';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Headline from 'components/atoms/Headline/Headline';

const ThirdHeadline = styled(Headline)`
  font-size: ${({ theme }) => theme.font.s};
`;
const ListWrapper = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0px;
  color: white;
  li {
    margin: 15px 0px;
    padding: 2px 0px;
    background-color: ${({ theme }) => theme.black};
  }
  li:nth-of-type(2n) {
    background-color: ${({ theme }) => theme.bluePrimary};
  }
`;
const ParagraphLink = styled.a`
  padding: 2px 6px;
  margin: 0px 6px;
  color: white;
`;
function WhoPage({ data: { whoPages: data } }) {
  if (data) {
    const compile = marksy({
      createElement,
      elements: {
        p({ children }) {
          return (
            <Paragraph black light center>
              {children}
            </Paragraph>
          );
        },
        h1({ children }) {
          return (
            <Headline as="h1" center>
              {children}
            </Headline>
          );
        },
        h2({ children }) {
          return (
            <Headline as="h2" black center>
              {children}
            </Headline>
          );
        },
        h3({ children }) {
          return (
            <ThirdHeadline as="h3" blue>
              {children}
            </ThirdHeadline>
          );
        },
        h4({ children }) {
          return (
            <Headline as="h4" center blackFont>
              {children}
            </Headline>
          );
        },
        ul({ children }) {
          return <ListWrapper>{children}</ListWrapper>;
        },
        a({ href, children }) {
          return (
            <ParagraphLink as="a" black link href={href}>
              {children}
            </ParagraphLink>
          );
        },
      },
    });
    const compiled = compile(data[0].content[0]);
    const ParsedContent = compiled.tree;

    return (
      <div>
        <PostTemplates
          contentPageSEO="Kim jestem podstrona"
          keywordsSEO="Kim jest Kamil Chędkowski"
          pageTitle="Kim jest Kamil Chędkowski"
        >
          <>{ParsedContent}</>
        </PostTemplates>
      </div>
    );
  }
  return (
    <PostTemplates
      contentPageSEO="Kim jestem podstrona"
      keywordsSEO="Kim jest Kamil Chędkowski"
      pageTitle="Kim jest Kamil Chędkowski"
    >
      <Headline center black>
        Kim jestem?: ładowanie
      </Headline>
    </PostTemplates>
  );
}

const WhoQuery = gql`
  query WhoPage {
    whoPages(where: { status: PUBLISHED }) {
      content
    }
  }
`;
WhoPage.propTypes = {
  data: PropTypes.objectOf(Object),
  // eslint-disable-next-line react/no-unused-prop-types
  href: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.objectOf(Object),
};
WhoPage.defaultProps = {
  data: null,
  children: null,
  href: '#',
};

export default graphql(WhoQuery)(WhoPage);
