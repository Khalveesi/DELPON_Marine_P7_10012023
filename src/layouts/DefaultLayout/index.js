import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.scss";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default DefaultLayout;
