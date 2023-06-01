import './index.css'

const Main = (props) => {
    return (
        <div>
            <main className="relative px-2 py-1 flex justify-center items-center flex-col lg:flex-row w-full">
                <section className="relative money m-2 rounded-xl w-full lg:w-1/2">
                    <div className="header px-4 py-2 rounded-t-xl">
                        <h3>Saldo disponível</h3>
                        <p className="relative flex items-center p-1">
                            <span>R$</span> <strong id="saldoAtual" className="hide">5.000,00</strong> &nbsp; <span
                                className="eye cursor-pointer" ><i id="saldoAtual-i"
                                    className="fa fa-eye" aria-hidden="true"></i></span>
                        </p>
                    </div>
                    <div className="footer flex justify-between items-center px-4 py-2 cursor-pointer rounded-b-xl">
                        Ver Extrato <i className="material-icons">arrow_forward</i>
                    </div>
                </section>
                <section className="relative money m-2 rounded-xl w-full lg:w-1/2">
                    <div className="header px-4 py-2 rounded-t-xl">
                        <h3>Saldo bloqueado</h3>
                        <p className="relative flex items-center p-1">
                            <span>R$</span> <strong id="saldoBloqueado" className="hide">0</strong> &nbsp; <span
                                className="eye cursor-pointer" ><i id="saldoBloqueado-i"
                                    className="fa fa-eye" aria-hidden="true"></i></span>
                        </p>
                    </div>
                    <div className="footer flex justify-between items-center px-4 py-2 cursor-pointer rounded-b-xl">
                        Ver Bloqueios <i className="material-icons">arrow_forward</i>
                    </div>
                </section>
            </main>
            <aside class="overflow-hidden">
                <section class="relative cards p-2 flex-nowrap rounded-xl max-w-full w-full">
                    <h2>Aproveite:</h2>
                    <div class="flex items-center flex-row slide p-2 max-w-full">
                        <img class="h-80 mx-2 rounded-lg" src="./imgs/banner5.png" alt="" />
                        <img class="h-80 mx-2 rounded-lg" src="./imgs/banner3.png" alt="" />
                        <img class="h-80 mx-2 rounded-lg" src="./imgs/banner1.png" alt="" />
                        <img class="h-80 mx-2 rounded-lg" src="./imgs/banner2.png" alt="" />
                        <img class="h-80 mx-2 rounded-lg" src="./imgs/banner4.png" alt="" />
                    </div>
                </section>
            </aside>
        </div>
    )
}

export default Main;