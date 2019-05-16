import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';
import 'asset/fontello/css/fontello.css';

storiesOf('atoms/Icon', module)
  .add('only title', () => <Icon>Ikona</Icon>)
  .add('only icon', () => (
    <Icon>
      <i className="icon-medium" />
    </Icon>
  ))
  .add('title and icon', () => (
    <Icon>
      <i className="icon-facebook" />
      <div>facebook</div>
    </Icon>
  ));
