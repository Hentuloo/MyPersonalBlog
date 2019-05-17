import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './Menu';

storiesOf('/organism/Menu', module)
  .add('one', () => <Menu numberOfPost="1" />)
  .add('without number', () => <Menu />);
