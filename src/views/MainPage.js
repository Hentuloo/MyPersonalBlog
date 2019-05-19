import React from 'react';
// import PostTemplates from 'templates/PostTemplates';
import styled from 'styled-components';
import ViewTemplates from 'templates/ViewTemplates';
import MainImage from 'components/atoms/MainImage/MainImage';
import Post from 'components/molecules/Post/Post';

const PostWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0px auto;
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
          <MainImage />
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
