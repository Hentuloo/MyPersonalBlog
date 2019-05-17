import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuElements from './MenuElements';

storiesOf('molecules/menu/MenuElements', module)
  .add('elements', () => <MenuElements />)
  .add('horizontal', () => <MenuElements horizontal />);
