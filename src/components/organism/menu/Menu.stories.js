import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './Menu';

storiesOf('/organism/Menu', module)
  .add('postNumber', () => <Menu postNumber="1" />)
  .add('without number', () => <Menu />);
