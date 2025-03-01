import { NavLink } from "react-router"

export const Header = () => {

    return(
        <>
        <h2>Inspiration for the everyday</h2>
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