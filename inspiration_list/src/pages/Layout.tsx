import { Outlet } from "react-router"
import { Header } from "./header"
import "../css/layout.css"

export const Layout = () => {
    return <>
    <header><Header /> </header>
    <main>
        <Outlet />
    </main>
    <footer></footer>
    </>
}