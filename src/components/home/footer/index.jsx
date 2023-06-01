import './index.css'

const Footer = (props) => {
    return (
        <div>
            <footer class="fixed bottom-0 left-0 p-4 flex justify-around items-center flex-row w-full">
                <ul class="text-2xl px-2 py-3 flex justify-around items-center flex-row rounded-lg w-full">
                    <li class="active"><i class="fa-solid fa-house"></i></li>
                    <li><i class="fa-brands fa-pix"></i></li>
                    <li><i class="fa-solid fa-headset"></i></li>
                    <li><i class="fa-solid fa-circle-user"></i></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;