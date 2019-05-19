import React from 'react';
import { storiesOf } from '@storybook/react';
import NumberPost from './NumberPost';

storiesOf('atoms/NumberPost', module).add('MenuHeader', () => <NumberPost number="24" />);
