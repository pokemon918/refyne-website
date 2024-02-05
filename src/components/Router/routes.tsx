import Service from '@pages/Service'
import Home from '@pages/Dashboard'
import Teams from '@pages/Teams'
import Blog from '@pages/Blog'

export interface _PathRouteProps {
    path: string
    name?: string
    icon?: JSX.Element | string
    element?: JSX.Element
    views?: Array<_PathRouteProps>
}

export const routes: _PathRouteProps[] = [
    {
        path: '/home',
        name: 'home',
        element: <Home />,
    },
    {
        path: '/services/:service',
        name: 'services',
        element: <Service />,
    },
    {
        path: '/teams',
        name: 'teams',
        element: <Teams />,
    },
    {
        path: '/blog',
        name: 'blog',
        element: <Blog />,
    },
]
