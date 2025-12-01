import { lazy } from 'react';

const Demo = lazy(() => import('./index'));

export const demoRoute = {
    path: "/demo",
    tabName:'demo',
    Component: Demo,
}