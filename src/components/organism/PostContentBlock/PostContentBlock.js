import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import marksy from 'marksy';
import JsxParser from 'react-jsx-parser';
import YouTube from 'react-youtube-embed';
import Image from 'components/atoms/GraphImgManually/GraphImgManually';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Headline from 'components/atoms/Headline/Headline';

const StrongParagraph = styled(Paragraph)`
  background-color: ${({ theme }) => theme.blackAlpha};
  padding: 0px 2px;
`;
const OlListWrapper = styled.ol`
  div {
    padding: 0px 6px;
    margin: 0px 4px;
  }
`;
const ParagraphQuote = styled(Paragraph)`
  width: 90%;
  max-width: 500px;
  margin: 6px auto;
  div {
    color: white;
  }
`;
const ContentCenter = styled(Paragraph)`
  width: 90%;
  max-width: 500px;
  margin: 0px auto;
  padding: 0px;
`;
const ContentChildren = styled(Paragraph)`
  margin: 15px 15px;
  color: black;
  font-weight: ${({ theme }) => theme.font.light};
`;
const ParagraphLink = styled(Paragraph)`
  padding: 2px 6px;
  margin: 0px 4px;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.grayPrimary};
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0%;
    left: 0%;
    background-color: white;
  }
`;
const HeadlineWrapper = styled(Headline)`
  margin: 10px 0px;
`;

const JsxParserWrapper = styled.div`
  max-width: 80%;
  margin: 0px auto;
`;
const Wrapper = styled.div`
  white-space: pre-line;
`;
const PostContentBlock = ({ description, content }) => {
  const compile = marksy({
    createElement,
    elements: {
      codespan({ children }) {
        return (
          <JsxParserWrapper>
            <JsxParser
              components={{
                YouTube,
                Image,
              }}
              jsx={children[0]}
            />
          </JsxParserWrapper>
        );
      },
      p({ children }) {
        return <ContentChildren as="div">{children}</ContentChildren>;
      },
      h1({ children }) {
        return (
          <ContentCenter as="div" center blackFont>
            {children}
          </ContentCenter>
        );
      },
      h2({ children }) {
        return (
          <HeadlineWrapper as="h3" center blackFont>
            {children}
          </HeadlineWrapper>
        );
      },
      h3({ children }) {
        return (
          <HeadlineWrapper as="h3" black center>
            {children}
          </HeadlineWrapper>
        );
      },
      h4({ children }) {
        return (
          <HeadlineWrapper as="h3" blue center>
            {children}
          </HeadlineWrapper>
        );
      },
      blockquote({ children }) {
        return (
          <ParagraphQuote as="blockquote" black blockquote>
            <i className="icon-quote-right" />
            {children}
          </ParagraphQuote>
        );
      },
      a({ href, children }) {
        return (
          <ParagraphLink as="a" link href={href}>
            {children}
          </ParagraphLink>
        );
      },
      strong({ children }) {
        return (
          <StrongParagraph as="strong" black light>
            {children}
          </StrongParagraph>
        );
      },
      ol({ children }) {
        return <OlListWrapper>{children}</OlListWrapper>;
      },
    },
  });
  const compiled = compile(content);
  const ParsedContent = compiled.tree;
  return (
    <Wrapper id="tresc">
      <Paragraph as="h2" black center>
        {description}
      </Paragraph>
      <div>{ParsedContent}</div>
    </Wrapper>
  );
};

PostContentBlock.propTypes = {
  description: PropTypes.string,
  content: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  href: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.objectOf(Object),
};
PostContentBlock.defaultProps = {
  description: '',
  content: '',
  children: null,
  href: '#',
};

export default PostContentBlock;
