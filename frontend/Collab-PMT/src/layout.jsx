import Footer from "./helper/footer";
import Header from "./helper/header";
import LandingPage from "./pages/landingpage";

export default function MainLayout(){
    return (
        <>
            <Header/>
            <LandingPage/>
            <Footer/>
        </>
    )
}