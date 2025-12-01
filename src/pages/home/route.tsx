import { lazy } from 'react';

const Home = lazy(() => import('./index'));

export const homeRoute = {
    path: "/",
    tabName:'home',
    Component: Home,
}