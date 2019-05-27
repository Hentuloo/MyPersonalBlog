import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuHorizontal from './MenuHorizontal';
import Menu from './Menu';

storiesOf('/organism', module)
  .add('Menu', () => <Menu />)
  .add('MenuHorizontal', () => <MenuHorizontal />);
