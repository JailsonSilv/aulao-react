const FirstComponent = () => {

    const handleClick = () => {
        console.log("Deu certo o click")  
    }

    return(
        <div>
            <button onClick={handleClick}>Enviar</button>
            <hr />
            <button onClick={() => console.log("Teste")}>Evento no elemento</button>
        </div>
    );
};

export default FirstComponent;