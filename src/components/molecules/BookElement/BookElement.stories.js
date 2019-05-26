import React from 'react';
import { storiesOf } from '@storybook/react';
import BookElement from './BookElement';

storiesOf('molecules/BookElement', module)
  .add('Basic', () => <BookElement />)
  .add('Blue', () => <BookElement>drugi stopień</BookElement>)
  .add('Black', () => <BookElement />);
