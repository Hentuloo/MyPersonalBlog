import React, { createElement } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import marksy from 'marksy';
import Headline from 'components/atoms/Headline/Headline';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Inspiration = styled(Paragraph)`
  border-bottom: 2px solid white;
`;
const LevelTime = styled(Paragraph)`
  display: flex;
  flex-basis: 25%;
  justify-content: space-around;
  align-items: center;
  i {
    font-size: ${({ theme }) => theme.font.xxl};
    height: 40px;
    color: ${({ theme }) => theme.blueSecondary};
  }
`;
const LevelTitle = styled(Headline)`
  flex-basis: 75%;
  padding: 10px 10px;
  font-size: ${({ theme }) => theme.font.m};
`;
const Level = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom: 2px white solid;
  font-weight: ${({ theme }) => theme.font.light};
  background-color: ${({ theme }) => theme.grayThird};

  em,
  p {
    min-width: 150px;
    flex-grow: 1;
  }
  ${({ done }) =>
    done &&
    css`
      p {
        background-color: ${({ theme }) => theme.bluePrimary};
        color: white;
      }
    `}
`;
const LevelWrapper = styled.section``;
const parseMarkdow = (data, type) => {
  if (data) {
    const compile = marksy({
      createElement,
      elements: {
        // eslint-disable-next-line react/prop-types
        p({ children }) {
          if (type === 'inspiration') {
            return (
              <Inspiration black center small as="p">
                {children}
              </Inspiration>
            );
          }
          return (
            <LevelTitle gray blackFont as="p">
              {children}
            </LevelTitle>
          );
        },
        // eslint-disable-next-line react/prop-types
        a({ href, children }) {
          return (
            <Paragraph as="a" link href={href}>
              {children}
            </Paragraph>
          );
        },
      },
    });
    const compiled = compile(data);
    return compiled.tree;
  }
  return null;
};
const levels = element => {
  const elements = [];
  for (let n = 0; n < element.levelTitle.length; n++) {
    elements.push(
      <Level done={element.done[n]}>
        <LevelTitle gray blackFont as="p">
          {parseMarkdow(element.levelTitle[n])}
        </LevelTitle>
        <LevelTime center black as="em">
          {element.data[n].slice(0, 10)}
          {element.done[n] && <i className="icon-crown" />}
        </LevelTime>
      </Level>,
    );
  }
  return elements;
};
const Levels = ({ data }) => {
  return (
    <LevelWrapper>
      <Headline black as="h3">
        {data.title}
      </Headline>
      <>{parseMarkdow(data.inspiration, 'inspiration')}</>
      <>{levels(data)}</>
    </LevelWrapper>
  );
};

Levels.propTypes = {
  data: PropTypes.objectOf(Object),
  // eslint-disable-next-line react/no-unused-prop-types
  href: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.objectOf(Object),
};
Levels.defaultProps = {
  data: null,
  children: null,
  href: '#',
};

export default Levels;
