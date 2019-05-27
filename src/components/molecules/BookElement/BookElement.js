import React, { createElement } from 'react';
import styled, { css } from 'styled-components';
import GraphImg from 'graphcms-image';
import PropTypes from 'prop-types';
import marksy from 'marksy';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const ParagraphLink = styled.a`
  padding: 2px 6px;
  margin: 0px 6px;
  color: white;
`;
const Content = styled(Paragraph)`
  padding: 4px 10px;
  font-size: ${({ theme }) => theme.font.s};
  background-color: ${({ theme }) => theme.graySecondary};
  word-spacing: 4px;
  position: relative;
  z-index: 11;
  ${({ ulMargin }) =>
    ulMargin &&
    css`
      margin-left: 28px;
    `}
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  right: 1%;
  top: 0%;
  transform: translateY(10%);
`;
const StyledGraphImage = styled(GraphImg)`
  position: absolute;
  width: 120px;
  max-height: 200px;
  border: white 4px solid;
`;

const SecondTitle = styled(Paragraph)`
  margin: 60px 0px 20px 0px;
  font-size: ${({ theme }) => theme.font.m};
  position: relative;
  padding-right: 130px;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    padding-right: 130px;
  }
`;
const Title = styled.h2`
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: ${({ theme }) => theme.grayPrimary};
  color: white;
  padding: 3px 40px 8px 15px;
  margin: 0px;
  border-radius: 0% 0% 30px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;
const BookWrapper = styled.section`
  border: 8px white solid;
  border-top: 4px solid ${({ theme }) => theme.grayPrimary};
  border-radius: 2%;
  position: relative;
  background-color: ${({ theme }) => theme.graySecondary};
`;
const BookElement = ({ data }) => {
  let ParsedContent;
  if (data.description) {
    const compile = marksy({
      createElement,
      elements: {
        p({ children }) {
          return <Content blackFont>{children}</Content>;
        },
        ul({ children }) {
          return (
            <Content as="ul" ulMargin>
              {children}
            </Content>
          );
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
    const compiled = compile(data.description);
    ParsedContent = compiled.tree;
  }
  return (
    <BookWrapper>
      <Title>{data.kind}</Title>
      <SecondTitle as="h3" black center>
        {data.title}
      </SecondTitle>
      <StyledImageWrapper>
        <StyledGraphImage image={data.photo} maxWidth={200} alt={data.title} />
      </StyledImageWrapper>
      <>{ParsedContent}</>
    </BookWrapper>
  );
};
BookElement.propTypes = {
  data: PropTypes.objectOf(Object),
  // eslint-disable-next-line react/no-unused-prop-types
  href: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.objectOf(Object),
};
BookElement.defaultProps = {
  data: null,
  children: null,
  href: '#',
};
export default BookElement;
