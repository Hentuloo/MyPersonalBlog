import React from 'react';
import PropTypes from 'prop-types';
// import styled, { css } from 'styled-components';
// import { Link } from 'react-router-dom';

import Paragraph from 'components/atoms/Paragraph/Paragraph';
// import Headline from 'components/atoms/Headline/Headline';

const Post = ({ description, url, content }) => {
  return (
    <div id="tresc">
      <Paragraph>{description}</Paragraph>
      <div>{content}</div>
      <div>{url}</div>
    </div>
  );
};

Post.propTypes = {
  description: PropTypes.string,
  url: PropTypes.string,
  content: PropTypes.string,
};
Post.defaultProps = {
  description: '',
  url: '',
  content: '',
};

export default Post;
