import { NavLink } from "react-router"

export const Header = () => {

    return(
        <>
        <h1>Inspiration for the everyday</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Ideas Display</NavLink>
                </li>
                <li>
                    <NavLink to={"/add"}>Adding ideas</NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}