import { lazy } from 'react';

const Handle = lazy(() => import('./index'));

export const handleRoute = {
    path: "/handle",
    tabName:'handle',
    Component: Handle,
}