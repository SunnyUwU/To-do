import logo from "../assets/images/Logo.svg";
import addImg from "../assets/images/plus.svg";

export function Todo() {
    return (
        <div className="todo-page">
            <header>
                <div className="content">
                    <img src={logo} alt="To-do" />
                    <button>Sair</button>
                </div>
            </header>

            <main>
                <div className="todo-title">
                    <h3>Olá, Gybson!</h3>
                    <p>Alguma tarefa para hoje?</p>
                </div>

                <form>
                    <textarea 
                        placeholder="Adicione uma tarefa..."
                    />

                    <div className="form-footer">
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