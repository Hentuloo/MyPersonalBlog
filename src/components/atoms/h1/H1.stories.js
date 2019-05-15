import React from 'react';
import { storiesOf } from '@storybook/react';
import H1 from './H1';

storiesOf('h1', module).add('basic', () => <H1>Nagłówek</H1>);
