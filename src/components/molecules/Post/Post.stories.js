import React from 'react';
import { storiesOf } from '@storybook/react';
import Post from './Post';

storiesOf('/molecules/Post', module)
  .add('one', () => <Post />)
  .add('two', () => <Post />);
