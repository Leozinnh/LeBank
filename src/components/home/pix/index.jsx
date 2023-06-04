import $ from 'jquery';
import './index.css'

const Pix = (props) => {
    const back = () => {
        $("article.pix").removeClass("openned");
    };

    return (
        <article className='absolute pix ease-linear duration-500 rounded-t-xl m-4'>
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
                        <input className='relative px-3 py-2 rounded-t-md outline-none w-full h-full' type="text" placeholder='E-mail, CPF/CNPJ, Telefone ou aleatória' />
                    </div>
                    <p>Não tem uma chave? <b>Crie uma agora</b></p>
                </section>
            </main>
        </article>
    )
}

export default Pix;