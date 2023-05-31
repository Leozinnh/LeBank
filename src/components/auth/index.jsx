import './index.css'

const Login = (props) => {
    return (
        <div id="login" className="absolute flex justify-center items-center">
            <main className="absolute flex justify-center items-center flex-row max-w-6xl p-2 sm:p-4 lg:p-24">
                <div className="relative m-8 w-full md:w-1/2 md:m-0 h-1/2 overflow-hidden rounded-md md:rounded-r-none left">
                    <header className="relative w-full flex justify-center items-center text-center">
                        <img className="relative" src="/imgs/bank.png" alt="" />
                    </header>
                    <main className="relative flex justify-center items-center flex-col">
                        <div className="relative formGroup flex flex-col px-4 py-2">
                            <label for="user">E-mail</label>
                            <input className="font-medium" type="text" name="user" id="user" required minlength="4" placeholder="" autocomplete="email" />
                        </div>
                        <div className="relative formGroup flex flex-col px-4 py-2">
                            <label for="pass">Senha</label>
                            <input className="font-medium" type="password" name="pass" id="pass" required minlength="4" placeholder="" autocomplete="off" />
                        </div>
                        <button className="relative my-4 px-6 py-2 rounded-md">ENTRAR</button>
                    </main>
                    <footer className="relative flex justify-center items-center flex-col">
                        <p>Esqueceu sua senha? <a href="#">Recuperar</a></p>
                        <p>Não possui cadastro? <a href="#">Cadastre-se</a></p>
                    </footer>
                </div>
                <div className="relative justify-center items-center w-1/2 h-1/2 rounded-r-md hidden md:flex right">
                    <img className="absolute z-10" src="/imgs/shirt.png" alt="" />
                </div>
            </main>
        </div>
    )
}

export default Login;