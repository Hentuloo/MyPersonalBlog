import React from 'react';
import { storiesOf } from '@storybook/react';
import H1 from './Headline';

storiesOf('h1', module)
  .add('Basic', () => <H1>Nagłówek</H1>)
  .add('Blue', () => <H1 blue>drugi stopień</H1>)
  .add('Black', () => <H1 black>drugi stopień</H1>);
