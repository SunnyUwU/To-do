import logo from "../assets/images/Logo.svg";
import addImg from "../assets/images/plus.svg";

import "../styles/todo.scss";

export function Todo() {
    return (
        <div id="todo-page">
            <header>
                <div className="content">
                    <img src={logo} alt="To-do" />
                    <button>Sair</button>
                </div>
            </header>

            <main>
                <div className="todo-title">
                    <h3>Olá, Gybson!</h3> 
                    <span>Alguma tarefa para hoje?</span>
                </div>

                <form>
                    <textarea 
                        placeholder="Adicione uma tarefa..."
                    />

                    <div className="form-button">
                        <button>
                            <img src={addImg} alt="Adicionar tarefa" />
                        </button>
                    </div>
                </form>

                <div className="task-list">
                    
                </div>
            </main>
        </div>
    );
}