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

const OlListWrapper = styled.ol`
  div {
    padding: 0px 6px;
    margin: 0px 4px;
  }
`;
const ParagraphQuote = styled(Paragraph)`
  div {
    color: white;
  }
`;
const ContentChildren = styled(Paragraph)`
  margin: 15px 15px;
  color: ${({ theme }) => theme.black};
`;
const ParagraphLink = styled(Paragraph)`
  padding: 2px 6px;
  margin: 0px 4px;
`;
const HeadlineWrapper = styled(Headline)`
  margin: 10px 0px;
`;
const JsxParserWrapper = styled.div`
  max-width: 80%;
  margin: 0px auto;
`;

const PostContentBlock = ({ description, url, content }) => {
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
          <HeadlineWrapper as="h3" blue center>
            {children}
          </HeadlineWrapper>
        );
      },
      h2({ children }) {
        return (
          <HeadlineWrapper as="h3" black center>
            {children}
          </HeadlineWrapper>
        );
      },
      h3({ children }) {
        return (
          <HeadlineWrapper as="h3" center blackFont>
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
          <ParagraphLink as="a" black link href={href}>
            {children}
          </ParagraphLink>
        );
      },
      strong({ children }) {
        return (
          <ParagraphLink as="strong" black light>
            {children}
          </ParagraphLink>
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
    <div id="tresc">
      <Paragraph as="h3" black center>
        {description}
      </Paragraph>
      <div>{ParsedContent}</div>
      <div>{url}</div>
    </div>
  );
};

PostContentBlock.propTypes = {
  description: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  href: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.objectOf(Object),
};
PostContentBlock.defaultProps = {
  description: '',
  url: '',
  content: '',
  children: null,
  href: '#',
};

export default PostContentBlock;
