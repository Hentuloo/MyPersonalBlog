import React from 'react';
import { storiesOf } from '@storybook/react';
import NumberPost from './NumberPost';

storiesOf('atoms/NumberPost', module)
  .add('Number', () => <NumberPost postNumber="23" />)
  .add('Number-white', () => <NumberPost postNumber="23" white />);
