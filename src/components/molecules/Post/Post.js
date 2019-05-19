import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Icon from 'components/atoms/Icon/Icon';
import NumberPost from 'components/atoms/NumberPost/NumberPost';

const NumberWrapper = styled.div`
  position: absolute;
  top: -2%;
  left: 0%;
`;
const Microphone = styled(Icon)`
  position: absolute;
  font-size: ${({ theme }) => theme.font.xl};
  background-color: ${({ theme }) => theme.blackAlpha};
  top: 0%;
  right: 0%;
  color: ${({ theme }) => theme.graySecondary};
`;

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  max-height: 300px;
  margin: 2px auto;
  position: relative;
  overflow: hidden;
  img {
    position: relative;
    width: 100%;
  }
  span {
    width: 100%;
    background-color: ${({ theme }) => theme.blackAlpha};
    position: absolute;
    text-align: right;
    bottom: 0%;
    right: 0%;
    color: white;
  }
`;
const PostWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 4px white solid;
`;
const Post = () => {
  return (
    <PostWrapper>
      <Headline as="h2" blue>
        Jak zostać maturzystą na miarę
      </Headline>
      <ImageWrapper>
        <img src="https://unsplash.it/1400/800" alt="sdf" />
        <NumberWrapper>
          <NumberPost number="23" white />
        </NumberWrapper>
        <Microphone className="icon-mic" />
        <span>12/12/51</span>
      </ImageWrapper>
      <div>
        <Headline as="h3">Czyli opowieści z rodu piekła</Headline>
        <Paragraph black>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime ut recusandae
          dolorum repellat reprehenderit, doloremque quasi delectus pariatur adipisci laudantium!
          Delectus atque suscipit, quidem sunt voluptas officiis quia quasi. Exercitationem suscipit
          error et reprehenderit eaque qui
        </Paragraph>
      </div>
    </PostWrapper>
  );
};

// Post.propTypes = {
//   numberOfPost: PropTypes.number,
// };
// Post.defaultProps = {
//   numberOfPost: null,
// };

export default Post;
