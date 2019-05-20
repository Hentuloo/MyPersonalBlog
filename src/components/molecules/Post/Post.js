import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Headline from 'components/atoms/Headline/Headline';
import Icon from 'components/atoms/Icon/Icon';
import NumberPost from 'components/atoms/NumberPost/NumberPost';

const StyledHeadline = styled(Headline)`
  width: calc(100% - 8px);
  margin: 4px;
  padding: 4px;
  border: 2px ${({ theme }) => theme.grayPrimary} solid;
`;
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
        Jak zostać maturzyscxcxcc xcxctą na miarę
      </Headline>
      <ImageWrapper>
        <img src="https://unsplash.it/1400/800" alt="sdf" />
        <NumberWrapper>
          <NumberPost number="23" white />
        </NumberWrapper>
        <Microphone className="icon-mic" />
        <span>12/12/51</span>
      </ImageWrapper>
      <StyledHeadline as="h3" small blackFont>
        Czyli opowieści z rodu piekła (kompletny poradnik poradnik) / oraz jak być bardziej
        skutecznym
      </StyledHeadline>
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
