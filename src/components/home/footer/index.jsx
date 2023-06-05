import $ from 'jquery';
import './index.css'

const Footer = (props) => {
    const open = (param) => {
        if (param == "pix") {
            $("body").addClass("overflow-hidden");
            $("article.pix").addClass("openned");
        }
    };
    return (
        <div className='mb-16'>
            <footer className="fixed bottom-0 left-0 p-4 flex justify-around items-center flex-row w-full">
                <ul className="text-2xl px-2 py-3 flex justify-around items-center flex-row rounded-lg w-full">
                    <li className="active"><i className="fa-solid fa-house"></i></li>
                    <li onClick={() => { open('pix') }}><i className="fa-brands fa-pix"></i></li>
                    <li><i className="fa-solid fa-headset"></i></li>
                    <li><i className="fa-solid fa-circle-user"></i></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;