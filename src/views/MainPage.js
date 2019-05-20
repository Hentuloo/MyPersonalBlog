import React from 'react';
// import PostTemplates from 'templates/PostTemplates';
import styled from 'styled-components';
import ViewTemplates from 'templates/ViewTemplates';
import Post from 'components/molecules/Post/Post';
import Baner from 'components/organism/Baner/Baner';

const PostWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 50px auto 70px auto;
  section {
    flex-basis: calc(100% - 6px);
    margin-bottom: 20px;
    @media (min-width: 500px) {
      flex-basis: calc(48% - 6px);
    }
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
      flex-basis: calc(24% - 6px);
    }
  }
`;

function App() {
  return (
    <div>
      <ViewTemplates>
        <div>
          <Baner as="header" />
          <PostWrapper>
            <Post />
            <Post />
            <Post />
            <Post />
          </PostWrapper>
        </div>
      </ViewTemplates>
    </div>
  );
}

export default App;
