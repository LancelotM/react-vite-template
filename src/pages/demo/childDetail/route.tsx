import { lazy } from 'react';

const ChildDetail = lazy(() => import('./index'));

export const childDetailRoute = {
    path: "/childDetail",
    tabName:'childDetail',
    Component: ChildDetail,
}