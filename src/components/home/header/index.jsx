import './index.css'

const Header = (props) => {
    return (
        <div>
            <header className="relative px-2 py-1 flex justify-between items-center flex-wrap w-full">

                <div className='relative flex items-center flex-row'>
                    <div className="logo">
                        <img className='relative w-auto h-16 sm:h-20 md:h-24 lg:h-28' src="/imgs/bank.png" alt="" />
                    </div>
                    <div className="flex justify-left    flex-col">
                        <span className="font-medium">Olá! Seja bem-vindo,</span>
                        <p className="font-semibold">Leonardo Alves</p>
                    </div>
                </div>
                <div>
                    <ul className="relative flex items-center flex-row flex-wrap">
                        <li className="px-1">
                            <i className="material-icons">
                                help
                            </i>
                        </li>
                        <li className="relative px-1">
                            <span className="absolute newMessage" title='Nova Mensagem'></span>
                            <i className="material-icons">
                                chat
                            </i>
                        </li>
                        <li className="px-1">
                            <i className="material-icons">
                                search
                            </i>
                        </li>
                        <li className="px-1">
                            <i className="material-icons">
                                menu
                            </i>
                        </li>
                    </ul>
                </div>
            </header>
            <nav className="relative px-2 py-1 flex lg:justify-between items-center lg:flex-wrap w-full ease-in-out duration-300">
                <ul className="relative flex lg:justify-around items-center flex-row w-full ease-in-out duration-300">
                    <li>
                        <i className="fa fa-print" aria-hidden="true"></i>
                        Extrato
                    </li>
                    <li>
                        <i className="fa fa-barcode" aria-hidden="true"></i>
                        Pagar Boleto
                    </li>
                    <li>
                        <i className="fa-brands fa-pix" aria-hidden="true"></i>
                        Pix
                    </li>
                    <li>
                        <i className="fa-solid fa-money-bill-transfer"></i>
                        Transferir
                    </li>
                    <li>
                        <i className="fa-solid fa-mobile-screen-button"></i>
                        Recarregar
                    </li>
                    <li>
                        <i className="fa-solid fa-chart-line"></i>
                        Investir
                    </li>
                    <li>
                        <i className="fa-solid fa-piggy-bank"></i>
                        Cofrinho
                    </li>
                    <li>
                        <i className="fa-solid fa-credit-card"></i>
                        Cartões
                    </li>
                    <li>
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                        Empréstimo
                    </li>
                    <li>
                        <i className="fa-solid fa-ellipsis"></i>
                        Mais
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;