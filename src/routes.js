import {
    ADD_HISTORY_ROUTE,
    DOCUMENTS_ROUTE,
    GALLERY_ROUTE,
    HISTORY_ROUTE,
    HOME_ROUTE,
    ONE_HISTORY_ROUTE
} from "./utils/consts";
import Home from "./pages/Home";
import Documents from "./pages/Documents";
import History from "./pages/History";
import Gallery from "./pages/Gallery";
import AddHistory from "./pages/AddHistory";
import HeroPage from "./pages/HeroPage";

export const publicRoutes = [
    {
        path:HOME_ROUTE,
        Component:Home
    },
    {
        path:DOCUMENTS_ROUTE,
        Component:Documents
    },
    {
        path:HISTORY_ROUTE,
        Component:History
    },
    {
        path:GALLERY_ROUTE,
        Component:Gallery
    },
    {
        path:ADD_HISTORY_ROUTE,
        Component:AddHistory
    },
    {
        path:ONE_HISTORY_ROUTE,
        Component:HeroPage
    }
]