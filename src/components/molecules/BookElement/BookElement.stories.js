import React from 'react';
import { storiesOf } from '@storybook/react';
import BookElement from './BookElement';

const data = {
  kind: 'Stoicyzm',
  title: 'Jakiś twórca',
  description: 'Description',
  photo: {
    handle: '',
    width: '',
    height: '',
  },
};

storiesOf('molecules', module).add('BookElement', () => <BookElement data={data} />);
