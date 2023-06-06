// import React, { useState } from "react";
import $ from 'jquery';
import './index.css'

function getCookie(chave) {
    var chaveIgual = chave + "=";
    var pares = document.cookie.split(";");
    for (let i = 0; i < pares.length; i++) {
        var par = pares[i];
        while (par.charAt(0) == " ") {
            par = par.substring(1);
        }
        if (par.indexOf(chaveIgual) == 0) {
            return par.substring(chaveIgual.length);
        }
    }
    return "";
}

const Main = (props) => {
    const toggleSaldo = (div) => {
        if ($(`#${div}-i`).hasClass("fa-eye")) {
            $(`#${div}`).removeClass("hide")
            $(`#${div}-i`).removeClass("fa-eye")
            $(`#${div}-i`).addClass("fa-eye-slash")
        } else {
            $(`#${div}`).addClass("hide")
            $(`#${div}-i`).addClass("fa-eye")
            $(`#${div}-i`).removeClass("fa-eye-slash")
        }
    };
    const open = (param) => {
        if (param == "pix") {
            $("body").addClass("overflow-hidden");
            $("article.pix").addClass("openned");
        }
    };
    return (
        <div>
            <main className="relative px-2 py-1 flex justify-center items-center flex-col lg:flex-row w-full">
                <section className="relative money m-2 rounded-xl w-full lg:w-1/2 ease-in-out duration-300">
                    <div className="header px-4 py-2 rounded-t-xl">
                        <h3>Saldo disponível</h3>
                        <p className="relative flex items-center p-1">
                            <span>R$</span> <strong id="saldoAtual" className="hide">5.000,00</strong> &nbsp; <span
                                className="eye cursor-pointer" ><i id="saldoAtual-i"
                                    className="fa fa-eye" aria-hidden="true" onClick={() => { toggleSaldo('saldoAtual') }}></i></span>
                        </p>
                    </div>
                    <div className="footer flex justify-between items-center px-4 py-2 cursor-pointer rounded-b-xl">
                        Ver Extrato <i className="material-icons">arrow_forward</i>
                    </div>
                </section>
                <section className="relative money m-2 rounded-xl w-full lg:w-1/2 ease-in-out duration-300">
                    <div className="header px-4 py-2 rounded-t-xl">
                        <h3>Saldo bloqueado</h3>
                        <p className="relative flex items-center p-1">
                            <span>R$</span> <strong id="saldoBloqueado" className="hide">0</strong> &nbsp; <span
                                className="eye cursor-pointer" ><i id="saldoBloqueado-i"
                                    className="fa fa-eye" aria-hidden="true" onClick={() => { toggleSaldo('saldoBloqueado') }}></i></span>
                        </p>
                    </div>
                    <div className="footer flex justify-between items-center px-4 py-2 cursor-pointer rounded-b-xl">
                        Ver Bloqueios <i className="material-icons">arrow_forward</i>
                    </div>
                </section>
            </main>
            {/*  */}
            <main className="relative px-2 py-1 flex justify-center items-center flex-col lg:flex-row w-full">
                <section className="relative pix m-2 rounded-xl w-full ease-in-out duration-300">
                    <h2 className='relative p-1 flex items-center'><i className="fa-brands fa-pix px-2" aria-hidden="true"></i> Pix</h2>
                    <div className="header flex flex-row flex-nowrap p-2 rounded-t-xl w-full h-38 md:h-42 lg:h-44">
                        <ul className="relative flex justify-around flex-wrap items-center flex-row w-full ease-in-out duration-300">
                            <li className='relative lg:scale-110 ease-in-out duration-300'>
                                <i className="material-icons">qr_code_scanner</i>
                                Ler QrCode
                            </li>
                            <li className='relative lg:scale-110 ease-in-out duration-300' onClick={() => { open('pix') }}>
                                <i className="fa-solid fa-money-bill-transfer"></i>
                                Transferir
                            </li>
                            <li className='relative lg:scale-110 ease-in-out duration-300'>
                                <i className="material-icons">receipt</i>
                                Parcelar pix
                            </li>
                            <li className='relative lg:scale-110 ease-in-out duration-300'>
                                <i className="material-icons">account_balance</i>
                                Sacar
                            </li>
                            <li className='relative lg:scale-110 ease-in-out duration-300'>
                                <i className="material-icons">attach_money</i>
                                Cobrar
                            </li>
                            <li className='relative lg:scale-110 ease-in-out duration-300'>
                                <i className="material-icons">tune</i>
                                Limites pix
                            </li>
                        </ul>
                    </div>
                    <div className="footer flex justify-around items-center px-4 py-2 cursor-pointer rounded-b-xl">
                        <button className='relative font-semibold w-6/12'>MINHAS CHAVES</button>
                        <button className='relative font-semibold w-6/12' style={{ borderLeft: "2px solid rgba(255,255,255,.1)" }}>CRIAR CHAVE</button>
                    </div>
                </section>
                <section className="relative pix m-2 rounded-xl w-full ease-in-out duration-300">
                    <h2 className='relative p-1 flex items-center'><i className="material-icons px-2">insights</i> Investir</h2>
                    <div className="header flex flex-row items-center flex-nowrap p-2 rounded-t-xl w-full h-38 md:h-42 lg:h-44 text-center">
                        <p className='text-lg lg:text-xl'>Você pode começar seus investimentos com apenas R$ 100, Investimento seguro com seguro do governo brasileiro, Saque quando quiser!</p>
                    </div>
                    <div className="footer flex justify-around items-center px-4 py-2 cursor-pointer rounded-b-xl">
                        <button className='relative font-semibold'>INVESTIR</button>
                    </div>
                </section>
            </main>
            {/*  */}
            <main className="relative px-2 py-1 flex justify-center items-center flex-col lg:flex-row w-full">
                <section className="relative card m-2 rounded-xl w-full ease-in-out duration-300">
                    <h2 className='relative p-1 flex items-center'><i className="material-icons px-2">credit_card</i> Prism Crédito</h2>
                    <div className="header flex flex-row flex-nowrap p-2 rounded-t-xl w-full h-48 lg:h-56">
                        <div className='relative flex justify-center items-center p-2 creditCard'>
                            <div className="relative flex justify-center items-center rounded-md min-h-8 max-h-48 layout">
                                <img src="/imgs/chip.png" className="absolute chip" alt="" />
                                <img src="/imgs/mastercard.png" className="absolute brand" alt="" />
                                <img src="/imgs/bank.png" className="absolute logo" alt="" />
                            </div>
                        </div>
                        <div className="relative flex justify-around flex-col flex-wrap h-full lg:text-xl infos">
                            <div className='relative flex justify-between'>
                                <div className='relative px-2'>
                                    <span className='font-semibold'>Cartão virtual</span>
                                    <p className='font-black'>Final {Math.floor(2000 * Math.random() + (2000 * Math.random() + 999))}</p>
                                    <span className='font-semibold'>Nome Titual</span>
                                    <p className='font-black'>{getCookie("usuario")}</p>
                                </div>
                                <div className='relative px-4 cardLimit' style={{ "--status-free": "65%", "--status-used": "35%" }}>
                                    <span className='font-semibold'>Limite Disponível</span>
                                    <p className='font-black'>R$ 6.500,00</p>
                                    <span className='font-semibold'>Limite Usado</span>
                                    <p className='font-black'>R$ 3.500,00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer flex justify-between items-center px-4 py-2 cursor-pointer rounded-b-xl">
                        <span className='relative flex justify-between items-center'>Desbloqueado <i className="material-icons">lock_open</i></span> <span className="cursor-pointer">Bloquear</span>
                    </div>
                </section>
                {/*  */}
                <section className="relative card m-2 rounded-xl w-full ease-in-out duration-300">
                    <h2 className='relative p-1 flex items-center'><i className="material-icons px-2">credit_card</i> Exclusive Crédito</h2>
                    <div className="header flex flex-row flex-nowrap p-2 rounded-t-xl w-full h-48 lg:h-56">
                        <div className='relative flex justify-center items-center p-2 creditCard'>
                            <div className="relative flex justify-center items-center rounded-md min-h-8 max-h-48 layout">
                                <img src="/imgs/chip.png" className="absolute chip" alt="" />
                                <img src="/imgs/mastercard.png" className="absolute brand" alt="" />
                                <img src="/imgs/bank.png" className="absolute logo" alt="" />
                            </div>
                        </div>
                        <div className="relative flex justify-around flex-col flex-wrap h-full lg:text-xl infos">
                            <div className='relative flex justify-between'>
                                <div className='relative px-2'>
                                    <span className='font-semibold'>Cartão virtual</span>
                                    <p className='font-black'>Final {Math.floor(2000 * Math.random() + (2000 * Math.random() + 999))}</p>
                                    <span className='font-semibold'>Nome Titual</span>
                                    <p className='font-black'>{getCookie("usuario")}</p>
                                </div>
                                <div className='relative px-4 cardLimit' style={{ "--status-free": "82%", "--status-used": "18%" }}>
                                    <span className='font-semibold'>Limite Disponível</span>
                                    <p className='font-black'>R$ 8.200,00</p>
                                    <span className='font-semibold'>Limite Usado</span>
                                    <p className='font-black'>R$ 1.800,00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer flex justify-between items-center px-4 py-2 cursor-pointer rounded-b-xl">
                        <span className='relative flex justify-between items-center'>Bloqueado <i className="material-icons">lock</i></span> <span className="cursor-pointer">Desbloquear</span>
                    </div>
                </section>
            </main>
            <aside className="overflow-hidden">
                <section className="relative px-4 cards flex-nowrap rounded-xl max-w-full w-full">
                    {/* <h2>Aproveite:</h2> */}
                    <div className="flex items-center flex-row slide rounded-xl py-2 max-w-full">
                        <img className="h-32 md:h-48 lg:h-80 ease-in-out duration-300 mx-2 rounded-lg" src="./imgs/banner5.png" alt="" />
                        <img className="h-32 md:h-48 lg:h-80 ease-in-out duration-300 mx-2 rounded-lg" src="./imgs/banner3.png" alt="" />
                        <img className="h-32 md:h-48 lg:h-80 ease-in-out duration-300 mx-2 rounded-lg" src="./imgs/banner1.png" alt="" />
                        <img className="h-32 md:h-48 lg:h-80 ease-in-out duration-300 mx-2 rounded-lg" src="./imgs/banner2.png" alt="" />
                        <img className="h-32 md:h-48 lg:h-80 ease-in-out duration-300 mx-2 rounded-lg" src="./imgs/banner4.png" alt="" />
                    </div>
                </section>
            </aside>
        </div >
    )
}

export default Main;