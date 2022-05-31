import '../Aside/Aside.css'
import Api from '../Api/Api.js';

export const Aside = ()=>{
    return(
        <aside className="Aside">
            <input type="search" placeholder="Pesquise aqui..." className="input"/>

            <button type="button" onClick={Api}><ion-icon name="search-outline"></ion-icon></button>
        </aside>
    );
}