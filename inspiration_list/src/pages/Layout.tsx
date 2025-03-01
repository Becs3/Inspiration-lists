import { Outlet } from "react-router"
import { Header } from "./header"

export const Layout = () => {
    return <>
    <header><Header /> </header>
    <main>
        <Outlet />
    </main>
    <footer></footer>
    </>
}