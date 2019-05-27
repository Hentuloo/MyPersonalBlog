import React, { createElement } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import marksy from 'marksy';

import PostTemplates from 'templates/PostTemplates';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Headline from 'components/atoms/Headline/Headline';

const ContentWrapper = styled.div`
  h2:nth-of-type(2n) {
    background-color: ${({ theme }) => theme.bluePrimary};
  }
  p {
    padding: 7px 30px;
  }
`;
const compileRequest = data => {
  const compile = marksy({
    createElement,
    elements: {
      // eslint-disable-next-line react/prop-types
      p({ children }) {
        return (
          <Paragraph center blackFont light>
            {children}
          </Paragraph>
        );
      },
      // eslint-disable-next-line react/prop-types
      a({ href, children }) {
        return (
          <Paragraph as="a" black link href={href}>
            {children}
          </Paragraph>
        );
      },
    },
  });
  const request = data.map(e => {
    const compiled = compile(e.content);
    const ParsedContent = compiled.tree;
    return (
      <div key={e.title}>
        <Headline as="h2" center black>
          {e.title}
        </Headline>
        {ParsedContent}
      </div>
    );
  });
  return request;
};

function RegulationsPage({ data: { regulationses: data } }) {
  if (data) {
    return (
      <div>
        <PostTemplates
          contentPageSEO="Kim jestem podstrona"
          keywordsSEO="Kim jest Kamil Chędkowski"
          pageTitle="Kim jest Kamil Chędkowski"
        >
          <ContentWrapper>{compileRequest(data)}</ContentWrapper>
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
        Regulamin: ładowanie
      </Headline>
    </PostTemplates>
  );
}

const RegulationsQuery = gql`
  query Regulations {
    regulationses(orderBy: index_ASC) {
      title
      content
    }
  }
`;
RegulationsPage.propTypes = {
  data: PropTypes.objectOf(Object),
  // eslint-disable-next-line react/no-unused-prop-types
  href: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.objectOf(Object),
};
RegulationsPage.defaultProps = {
  data: null,
  children: null,
  href: '#',
};

export default graphql(RegulationsQuery)(RegulationsPage);
