import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

export default function MainLayout() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    );
}