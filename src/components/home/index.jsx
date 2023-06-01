import './index.css'
import Header from './header';
import Main from './main';
import Footer from './footer';

const Home = (props) => {
    return (
        <div className="relative p-2">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home;