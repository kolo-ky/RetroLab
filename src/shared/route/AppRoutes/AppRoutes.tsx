import { RouteProps } from 'react-router-dom';
import { MainPage, ProfilePage, TonalityPage } from 'pages/ui';
import { NotFoundPage } from 'pages/ui/NotFoundPage';

enum RouteName {
    RETRO = 'retro',
    TONALITY = 'tonality',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

const RoutePath: Record<RouteName, string> = {
    [RouteName.RETRO]: '/',
    [RouteName.TONALITY]: '/tonality',
    [RouteName.PROFILE]: '/profile',
    [RouteName.NOT_FOUND]: '*'
}

export const AppRoutes: Record<RouteName, RouteProps> = {
    [RouteName.RETRO]: {
        path: RoutePath.retro,
        element: <MainPage/>
    },
    [RouteName.TONALITY]: {
        path: RoutePath.tonality,
        element: <TonalityPage/>
    },
    [RouteName.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>
    },
    [RouteName.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
}