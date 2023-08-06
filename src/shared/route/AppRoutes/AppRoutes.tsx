import {RouteProps} from "react-router-dom";
import {MainPage, ProfilePage, TonalityPage} from "pages/ui";

enum RouteName {
    RETRO = 'retro',
    TONALITY = 'tonality',
    PROFILE = 'profile'
}

const RoutePath: Record<RouteName, string> = {
    [RouteName.RETRO]: '/',
    [RouteName.TONALITY]: '/tonality',
    [RouteName.PROFILE]: 'profile'
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
    }
}