import '../Content/Content.css';
import wellcome from '../../img/img1.svg';
import not from '../../img/img3.svg';

export const Content = () =>{
    return(
        <div className="Content">
            <div className='wellc'>
                <h1>Bem vindo!!</h1>
                <img src={wellcome} />
            </div>
            <div className='subContent'></div>

            <div className='notFound'>
                <h2>Nenhum resultado encontrado</h2>
                <img src={not} />
            </div>
        </div>
    );
}