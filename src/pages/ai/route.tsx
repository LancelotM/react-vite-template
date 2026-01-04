import { lazy } from 'react';

const Ai = lazy(() => import('./index'));

export const aiRoute = {
    path: "/ai",
    tabName:'ai',
    Component: Ai,
}