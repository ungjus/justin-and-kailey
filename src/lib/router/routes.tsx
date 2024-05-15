import React from 'react';
import type { PathRouteProps } from 'react-router-dom';

const Home = React.lazy(() => import('@/lib/pages/home'));
const Dictionary = React.lazy(() => import('@/lib/pages/dictionary'));
const Timeline = React.lazy(() => import('@/lib/pages/timeline'));
const About = React.lazy(() => import('@/lib/pages/about'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dictionary',
    element: <Dictionary />,
  },
  {
    path: '/timeline',
    element: <Timeline />,
  },
  {
    path: '/about',
    element: <About />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
