import React from 'react';
import { storiesOf } from '@storybook/react';
import MenuHeader from './MenuHeader';

storiesOf('molecules/Menu-Title-chentek', module)
  .add('small', () => <MenuHeader number="24" />)
  .add('large', () => <MenuHeader number="24" large />);
