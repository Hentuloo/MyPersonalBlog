import React from 'react';
import { storiesOf } from '@storybook/react';
import Hamburger from './Hamburger';

storiesOf('atoms/Hamburger', module)
  .add('acitive', () => <Hamburger active />)
  .add('Basic', () => <Hamburger />);
