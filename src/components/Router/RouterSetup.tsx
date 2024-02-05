import { Routes, Route } from 'react-router-dom'

import Dashboard from '@/pages/Dashboard'
import NotFound from '@/pages/404'

import type { _PathRouteProps } from './routes'
import { routes as routeList } from './routes'

const RouterSetup = () => {
    const routeFactory = (routes: _PathRouteProps[]) =>
        routes.map((routeProps) => {
            // // console.log(routeProps)
            if (!routeProps.views)
                return <Route {...routeProps} key={routeProps.path as string} />
            return (
                <Route {...routeProps} key={routeProps.path as string}>
                    {routeFactory(routeProps.views)}
                </Route>
            )
        })
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            {routeFactory(routeList)}
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouterSetup
