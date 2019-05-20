import React from 'react';
import { storiesOf } from '@storybook/react';
import Search from './Search';

storiesOf('atoms/Search', module).add('first', () => <Search placeholder="Wyszukaj frazy" />);
