import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { theme } from '../src/themes/mainTheme';
import { ThemeProvider } from 'styled-components';
import StoryRouter from 'storybook-react-router';

const req = require.context('../src/components', true, /.stories.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
addDecorator(StoryRouter());
configure(loadStories, module);
