import React from 'react';
import PostTemplates from 'templates/PostTemplates';
import styled from 'styled-components';
import Post from 'components/molecules/Post/Post';
import BanerTitle from 'components/atoms/BanerTitle/BanerTitle';

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
      <PostTemplates>
        <BanerTitle as="header" title="Kim jestem" />
        <div>
          <PostWrapper id="tresc">
            <Post />
          </PostWrapper>
        </div>
      </PostTemplates>
    </div>
  );
}

export default App;
