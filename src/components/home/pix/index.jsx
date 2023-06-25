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

    function moeda(v) {
        v = v.replace(/\D/g, "") // permite digitar apenas numero
        v = v.replace(/(\d{1})(\d{14})$/, "$1.$2") // coloca ponto antes dos ultimos digitos
        v = v.replace(/(\d{1})(\d{11})$/, "$1.$2") // coloca ponto antes dos ultimos 11 digitos
        v = v.replace(/(\d{1})(\d{8})$/, "$1.$2") // coloca ponto antes dos ultimos 8 digitos
        v = v.replace(/(\d{1})(\d{5})$/, "$1.$2") // coloca ponto antes dos ultimos 5 digitos
        v = v.replace(/(\d{1})(\d{1,2})$/, "$1,$2") // coloca virgula antes dos ultimos 2 digitos
        v = v.substring(0, 20) // Limita o tamanho
        return v;
    }

    function ValidCPF(cpf) {
        if (typeof cpf !== "string") return false
        cpf = cpf.replace(/[\s.-]*/igm, '')
        if (
            !cpf ||
            cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999"
        ) {
            return false
        }
        var soma = 0
        var resto
        for (var i = 1; i <= 9; i++)
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
        resto = (soma * 10) % 11
        if ((resto == 10) || (resto == 11)) resto = 0
        if (resto != parseInt(cpf.substring(9, 10))) return false
        soma = 0
        for (var i = 1; i <= 10; i++)
            soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
        resto = (soma * 10) % 11
        if ((resto == 10) || (resto == 11)) resto = 0
        if (resto != parseInt(cpf.substring(10, 11))) return false
        return true
    }

    function ValidCNPJ(val) {
        if (val.length == 14) {
            var cpf = val.trim();

            cpf = cpf.replace(/\./g, '');
            cpf = cpf.replace('-', '');
            cpf = cpf.split('');

            var v1 = 0;
            var v2 = 0;
            var aux = false;

            for (var i = 1; cpf.length > i; i++) {
                if (cpf[i - 1] != cpf[i]) {
                    aux = true;
                }
            }

            if (aux == false) {
                return false;
            }

            for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
                v1 += cpf[i] * p;
            }

            v1 = ((v1 * 10) % 11);

            if (v1 == 10) {
                v1 = 0;
            }

            if (v1 != cpf[9]) {
                return false;
            }

            for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
                v2 += cpf[i] * p;
            }

            v2 = ((v2 * 10) % 11);

            if (v2 == 10) {
                v2 = 0;
            }

            if (v2 != cpf[10]) {
                return false;
            } else {
                return true;
            }
        } else if (val.length == 18) {
            var cnpj = val.trim();

            cnpj = cnpj.replace(/\./g, '');
            cnpj = cnpj.replace('-', '');
            cnpj = cnpj.replace('/', '');
            cnpj = cnpj.split('');

            var v1 = 0;
            var v2 = 0;
            var aux = false;

            for (var i = 1; cnpj.length > i; i++) {
                if (cnpj[i - 1] != cnpj[i]) {
                    aux = true;
                }
            }

            if (aux == false) {
                return false;
            }

            for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
                if (p1 >= 2) {
                    v1 += cnpj[i] * p1;
                } else {
                    v1 += cnpj[i] * p2;
                }
            }

            v1 = (v1 % 11);

            if (v1 < 2) {
                v1 = 0;
            } else {
                v1 = (11 - v1);
            }

            if (v1 != cnpj[12]) {
                return false;
            }

            for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) {
                if (p1 >= 2) {
                    v2 += cnpj[i] * p1;
                } else {
                    v2 += cnpj[i] * p2;
                }
            }

            v2 = (v2 % 11);

            if (v2 < 2) {
                v2 = 0;
            } else {
                v2 = (11 - v2);
            }

            if (v2 != cnpj[13]) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    function ValidPHONE(phone) {
        var regex = new RegExp('^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9[0-9]{3}[0-9]{5}))$');
        return regex.test(phone);
    }

    const pix = (params) => {
        if ($("#pix").val().length >= 8) {
            $("section.chave .continuarPix").fadeIn();
            if (params.key == "Enter") {
                $("section.chave").hide();
                $("section.valor").css("display", "flex").hide().fadeIn();
            }
        } else {
            $("section.chave .continuarPix").fadeOut();
        }
        $("#pix").unmask();
        if (ValidPHONE($("#pix").val())) {
            $("#pix").mask("(00) 90000-0000");
        } else if (ValidCPF($("#pix").val())) {
            $("#pix").mask("999.999.999-99");
        } else if (ValidCNPJ($("#pix").val())) {
            $("#pix").mask("99.999.999/9999-99");
        } else {
            if (isNumeric($("#pix").val())) {
                if (!$("#pix").val().length < 14) {
                    $("#pix").mask("99.999.999/9999-99");
                }
            }
        }
    }

    const valor = (input) => {
        $(`#${input}`).val(moeda($(`#${input}`).val()));
        console.log(`${parseFloat($("#LimitePixDisponível").html())}[${$("#LimitePixDisponível").html()}]  <  ${parseFloat($(`#${input}`).val())}[${$(`#${input}`).val()}]   ==   ${(parseFloat($("#LimitePixDisponível").html()) < parseFloat($(`#${input}`).val()))}`);
        // if(parseFloat($("#LimitePixDisponível").html()) < parseFloat($(`#${input}`).val())){
        //     return false;
        // }else{
        //     $(`#${input}`).val(moeda($(`#${input}`).val()));
        // }
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
                    <div className="relative flex justify-center items-center flex-col input p-4">
                        <input className='relative px-3 py-2 rounded-t-md outline-none w-full h-full' name="pix" id="pix" type="text" onKeyUp={(e) => { pix(e) }} placeholder='E-mail, CPF/CNPJ, Telefone ou aleatória' />
                        <button className='hidden absolute flex items-center right-0 outline-none text-center h-full pr-6 continuarPix'><i className="material-icons text-4xl">done</i></button>
                    </div>
                    <p>Não tem uma chave? <b className='cursor-pointer'>Crie uma agora</b></p>
                </section>
                <section className='hidden relative flex justify-center items-center flex-col text-4xl font-black h-full valor'>
                    <h2 className='relative mb-2'>Valor</h2>
                    <div className="relative flex justify-center items-center input p-4 my-2">
                        <b className='font-black text-2xl md:text-3xl lg:text-4xl tracking-wider'>R$</b>
                        <input className='relative px-3 py-2 rounded-t-md outline-none text-center w-full h-full' name="pix_value" id="pix_value" onKeyUp={() => { valor('pix_value') }} type="tel" placeholder='0,00' />
                        <button className='hidden absolute flex items-center right-0 outline-none text-center h-full pr-6 continuarPix'><i className="material-icons text-4xl">done</i></button>
                    </div>
                    <p>Limite Disponível: <b>R$ <span id="LimitePixDisponível">5.000,00</span></b></p>
                </section>6666
            </main>
            <section className='relative p-2 actions'>
                {/* <h2 className='relative mb-2 px-2 text-xl font-bold'>Sugestões</h2> */}
                <ul className="relative flex justify-around flex-wrap items-center flex-row w-full ease-in-out duration-300 overflow-hidden">
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