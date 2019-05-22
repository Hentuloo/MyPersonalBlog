import React from 'react';
import PostTemplates from 'templates/PostTemplates';
// import styled from 'styled-components';
import BanerTitle from 'components/atoms/BanerTitle/BanerTitle';

function PostPage() {
  return (
    <div>
      <PostTemplates>
        <BanerTitle as="header" title="Kim jestem" />
        <div>dfgdfgdfg</div>
      </PostTemplates>
    </div>
  );
}

export default PostPage;
