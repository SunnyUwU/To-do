import todoImg from "../assets/images/TodoImg.svg";
import logo from "../assets/images/Logo.svg";
import googleIconImg from "../assets/images/google.svg";
import githubIconImg from "../assets/images/github.svg";
import login from "../assets/images/login.svg";

import "../styles/auth.scss";

export function Home() {
    return (
        <div id="page-auth">
            <aside>
                <img src={todoImg} alt="To-do" />
            </aside>
            <main>
                <div className="main-content">
                    <img src={logo} alt="To-do" />
                    <button className="button-login-with">
                        <img src={googleIconImg} alt="Google" />
                        Entrar com o Google
                    </button>
                    <button className="button-login-with">
                        <img src={githubIconImg} alt="Google" />
                        Entrar com o GitHub
                    </button>
                    <div className="separator">ou coloque seu nome</div>
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite seu nome"
                            // value={username}
                        />
                        <button>
                            <img src={login} alt="Entrar" />
                            Entrar no To-do
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}