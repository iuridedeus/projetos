import "./StartScreen.css";

const StartScreen = ({startGame}) => {
    return (
    <div className="Start">
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={startGame}>Começar</button>
    </div>
    );  
};

export default StartScreen;
