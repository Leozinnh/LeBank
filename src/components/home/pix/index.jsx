import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min';
import './index.css'

const Pix = (props) => {
    const back = () => {
        $("body").removeClass("overflow-hidden");
        $("article.pix").removeClass("openned");
    };

    function isNumeric(str) {
        var er = /^[0-9]+$/;
        return (er.test(str));
    }

    const pix = (params) => {
        $("#pix").unmask();
        if (isNumeric($("#pix").val())) {
            if ($("#pix").val().length < 11) {
                $("#pix").mask("999.999.999-99");
            } else {
                $("#pix").mask("99.999.999/9999-99");
            }
        }
        $("#pix").focus();
    }

    return (
        <article className='fixed pix ease-linear duration-500 rounded-t-xl m-4 mb-0'>
            <header className='relative flex justify-between items-center px-3'>
                <div className='relative flex flex-row items-center text-center cursor-pointer' onClick={() => { back() }}>
                    <i className="material-icons">arrow_back_ios</i>
                    <span className='text-lg font-bold'>Voltar</span>
                </div>
                <div className='relative flex flex-row items-center text-center pt-2'>
                    <i className="material-icons">qr_code_scanner</i>
                    <i className="material-icons px-2">help</i>
                </div>
            </header>
            <main className='relative p-2'>
                <section className='relative flex justify-center items-center flex-col text-4xl font-black h-full chave'>
                    <h2 className='relative mb-2'>Insira a chave pix</h2>
                    <div className="relative flex justify-center items-center input p-4">
                        <input className='relative px-3 py-2 rounded-t-md outline-none w-full h-full' name="pix" id="pix" type="text" onKeyUp={() => { pix() }} placeholder='E-mail, CPF/CNPJ, Telefone ou aleatória' />
                    </div>
                    <p>Não tem uma chave? <b>Crie uma agora</b></p>
                </section>
            </main>
            <section className='relative p-2 actions'>
                {/* <h2 className='relative mb-2 px-2 text-xl font-bold'>Sugestões</h2> */}
                <ul className="relative flex justify-around flex-wrap items-center flex-row w-full ease-in-out duration-300">
                    <li className='relative lg:scale-110 ease-in-out duration-300 opacity-70 hover:opacity-100'>
                        <i className="material-icons">qr_code_scanner</i>
                        Ler QrCode
                    </li>
                    <li className='relative lg:scale-110 ease-in-out duration-300 opacity-70 hover:opacity-100'>
                        <i className="material-icons">account_balance</i>
                        Sacar
                    </li>
                    <li className='relative lg:scale-110 ease-in-out duration-300 opacity-70 hover:opacity-100'>
                        <i className="material-icons">attach_money</i>
                        Cobrar
                    </li>
                    <li className='relative lg:scale-110 ease-in-out duration-300 opacity-70 hover:opacity-100'>
                        <i className="material-icons">currency_exchange</i>
                        Reembolsar pix
                    </li>
                    <li className='relative lg:scale-110 ease-in-out duration-300 opacity-70 hover:opacity-100'>
                        <i className="material-icons">tune</i>
                        Limites pix
                    </li>
                </ul>
            </section>
            <section className='relative p-2 suggestions'>
                <ul className="relative flex justify-around flex-wrap items-center flex-row w-full ease-in-out duration-300">
                    <li className='relative flex justify-between items-center my-2 ease-in-out duration-300 w-full opacity-70 hover:opacity-100 cursor-pointer'>
                        <div className='relative flex items-center'>
                            <i className="relative material-icons px-2 text-4xl">account_circle</i>
                            <div>
                                <span className='relative block text-2xl font-bold'>Leonardo Alves</span>
                                <p className='relative block text-xs opacity-60'>BCO C6 S.A.</p>
                            </div>
                        </div>
                        <i className="relative material-icons px-2 text-4xl ease-in-out duration-300 hover:text-red-600">favorite</i>
                    </li>
                    <li className='relative flex justify-between items-center my-2 ease-in-out duration-300 w-full opacity-70 hover:opacity-100 cursor-pointer'>
                        <div className='relative flex items-center'>
                            <i className="relative material-icons px-2 text-4xl">account_circle</i>
                            <div>
                                <span className='relative block text-2xl font-bold'>Marília Mendonça</span>
                                <p className='relative block text-xs opacity-60'>NU PAGAMENTO</p>
                            </div>
                        </div>
                        <i className="relative material-icons px-2 text-4xl ease-in-out duration-300 hover:text-red-600">favorite</i>
                    </li>
                    <li className='relative flex justify-between items-center my-2 ease-in-out duration-300 w-full opacity-70 hover:opacity-100 cursor-pointer'>
                        <div className='relative flex items-center'>
                            <i className="relative material-icons px-2 text-4xl">account_circle</i>
                            <div>
                                <span className='relative block text-2xl font-bold'>Neymar Júnior</span>
                                <p className='relative block text-xs opacity-60'>BANCO INTER</p>
                            </div>
                        </div>
                        <i className="relative material-icons px-2 text-4xl ease-in-out duration-300 hover:text-red-600">favorite</i>
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default Pix;