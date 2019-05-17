import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuHeader from './MenuHeader';

storiesOf('molecules/menu/MenuHeader', module)
  .add('MenuHeader', () => <MenuHeader number="24" />)
  .add('MenuHeder without number', () => <MenuHeader />);
