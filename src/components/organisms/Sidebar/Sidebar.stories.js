import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Sidebar from './Sidebar';

storiesOf('Organisms/Sidebar', module)
  .addDecorator(StoryRouter())
  .add('Note', () => <Sidebar />)
  .add('Twitter', () => <Sidebar sidebarType="twitter" />)
  .add('Article', () => <Sidebar sidebarType="article" />);
