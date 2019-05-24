import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import Headline from 'components/atoms/Headline/Headline';
import Icon from 'components/atoms/Icon/Icon';
import NumberPost from 'components/atoms/NumberPost/NumberPost';

const rotate = keyframes`
  0% {
    transform:translate(-50%,-50%) rotate(0deg) ;
  }
 100% {
    transform:translate(-50%,-50%) rotate(360deg) ;
  }
`;

const StyledHeadline = styled(Headline)`
  flex-grow: 1;
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
  margin: 5px auto;
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
    bottom: 3%;
    right: 0%;
    color: white;
  }
`;
const PostWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 4px white solid;
  min-height: 200px;
  a {
    text-decoration: none;
  }
  ${({ disable }) =>
    disable &&
    css`
      background-color: ${({ theme }) => theme.graySecondary};
      position:relative;
      ::after{
        content:'';
        position:absolute;
        width:60px;
        height:60px;
        top:50%;
        left:50%
        border-top:5px solid ${({ theme }) => theme.bluePrimary};
        border-bottom:5px solid ${({ theme }) => theme.bluePrimary};
        border-left:5px solid transparent;
        border-right:5px solid transparent;
        border-radius:50%;
        transform:translate(-50%,-50%);
        animation: ${rotate} 1s ease-in-out infinite forwards;
      }
    `}
`;

const Post = ({ disable, postNumber, title, description, url, podcast, data, urlPhoto }) => {
  if (!disable) {
    return (
      <PostWrapper>
        <Link to={`/${url}`}>
          <Headline as="h2" blue>
            {title}
          </Headline>
          <ImageWrapper>
            <img src={urlPhoto} alt="sdf" />
            <NumberWrapper>
              <NumberPost postNumber={postNumber} white />
            </NumberWrapper>
            {podcast && <Microphone className="icon-mic" />}
            <span>{[...data].slice(0, 10)}</span>
          </ImageWrapper>
        </Link>
        <StyledHeadline as="h3" small blackFont>
          {description}
        </StyledHeadline>
      </PostWrapper>
    );
  }
  return (
    <PostWrapper disable>
      <Headline as="h2">Ładowanie...</Headline>
    </PostWrapper>
  );
};

Post.propTypes = {
  disable: PropTypes.bool,
  postNumber: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  podcast: PropTypes.bool,
  urlPhoto: PropTypes.string,
  data: PropTypes.string,
};
Post.defaultProps = {
  disable: false,
  postNumber: null,
  title: '',
  description: '',
  url: '',
  podcast: false,
  urlPhoto: '',
  data: '',
};

export default Post;
