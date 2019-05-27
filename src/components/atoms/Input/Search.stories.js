import React from 'react';
import { storiesOf } from '@storybook/react';
import Search from './Search';

storiesOf('atoms', module).add('Search-Footer', () => <Search placeholder="Wyszukaj frazy" />);
