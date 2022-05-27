import porsol from "../assets/sol.jpg";


const Images = () => {
    return(
        <div>
            <h1>Imprimindo uma img</h1>
            <img src="/cd.jpg" />
            <hr />
            <img src={porsol}/>
        </div>
    );
};

export default Images;