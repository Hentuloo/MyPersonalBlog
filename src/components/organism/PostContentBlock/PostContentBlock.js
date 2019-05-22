import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import marksy from 'marksy';
import JsxParser from 'react-jsx-parser';
import YouTube from 'react-youtube-embed';
import Image from 'components/atoms/GraphImgManually/GraphImgManually';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
// import Headline from 'components/atoms/Headline/Headline';

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
        return <>{children}</>;
      },
    },
  });
  const compiled = compile(content);
  const ParsedContent = compiled.tree;
  return (
    <div id="tresc">
      <Paragraph black center>
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
  children: PropTypes.objectOf(Object),
};
PostContentBlock.defaultProps = {
  description: '',
  url: '',
  content: '',
  children: null,
};

export default PostContentBlock;
