import React from 'react';
import { storiesOf } from '@storybook/react';
import Post from './Post';

const photo = {
  handle: '',
  width: '',
  height: '',
};
storiesOf('/molecules/Post', module)
  .add('basic', () => (
    <Post
      postNumber="21"
      title="Zajebisty tytuł"
      description="siafh fdisah isahd fisahf iuhas"
      url="Matura"
      podcast
      data="12/12/1222"
      photo={photo}
    />
  ))
  .add('disable', () => <Post disable />);
