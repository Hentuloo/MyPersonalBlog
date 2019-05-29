import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LevelsElement from 'components/molecules/LevelsElement/LevelsElement';
import PostTemplates from 'templates/PostTemplates';
import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const LevelsBlock = styled.div`
  section {
    margin-top: 30px;
  }
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    margin: 20px 20px;
  }
`;
const EntryBlock = styled.div`
  margin-bottom: 80px;
`;
const ContentWrapper = styled.article`
  width: 100%;
  margin: 0px auto;
  min-height: 500px;
  background-color: ${({ theme }) => theme.graySecondary};
`;

function LevelsPage({ data: { levelses } }) {
  let LevelsBlocks;
  if (levelses) {
    LevelsBlocks = levelses.map(e => <LevelsElement key={e.id} data={e} />);
  }

  return (
    <PostTemplates
      contentPageSEO="Moja gra o korony czyli trzy poziomy"
      keywordsSEO="Trzy-poziomy korony zadania cele chentek w dzialaniu"
      pageTitle="Trzy poziomy"
    >
      <ContentWrapper>
        <EntryBlock>
          <Headline black>Trzy poziomy</Headline>
          <Paragraph center black light>
            Czyli moja nikomu niepotrzebna gra w której chodzi o zbieranie KORON! Jakiś czas temu
            ustaliłem sobie co chciałbym robić, i oczywiście te plany się zmieniają jednak jest to
            dla mnie jak ta wszystkim znana LATARNIA tzn. w życiu jak na morzu nie można być niczego
            pewnym można natomiast i nawet, że rozsądne wydawałoby się podążać w kierunku latarni co
            też nie oznacza ślepe płynięcie na skały, ale robienie tego, co trzeba mimo różnych
            prądów, aby być tam, gdzie się chce!
          </Paragraph>
        </EntryBlock>
        <LevelsBlock>{LevelsBlocks || <Headline black>ładowanie</Headline>}</LevelsBlock>
      </ContentWrapper>
    </PostTemplates>
  );
}

export const LevelsQuery = gql`
  query Levels {
    levelses(where: { status: PUBLISHED }, orderBy: index_ASC) {
      id
      title
      inspiration
      levelTitle
      done
      data
    }
  }
`;
LevelsPage.propTypes = {
  data: PropTypes.objectOf(Object),
};
LevelsPage.defaultProps = {
  data: null,
};

export default graphql(LevelsQuery)(LevelsPage);
