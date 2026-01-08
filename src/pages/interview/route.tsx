import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export const interviewRoute = {
    path: "/interview",
    tabName:'interview',
    Component: Home,
}