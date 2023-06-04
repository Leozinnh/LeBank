import './index.css'
import Header from './header';
import Main from './main';
import Pix from './pix';
import Footer from './footer';

const Home = (props) => {
    return (
        <div className="relative p-2">
            <Header />
            <Main />
            <Pix />
            <Footer />
        </div>
    )
}

export default Home;