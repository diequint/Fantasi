import designs from "../modules/designs.json";
import styles from "./Editor.module.css";
import {Link} from "react-router-dom";

//TODO: Generate modules to customize the design chosen
export function Editor() {
    var url = window.location.pathname;
    var i = url.lastIndexOf("/");
    url = (url.slice(i+1))-1;
    return(<main >
        <img src="https://thiscatdoesnotexist.com/" alt={designs[url].name}></img>
        <br></br>
        <p>Aquí van los menús, botones, etc del editor</p>
    </main>);
}

export function EmptyEditor(){
    return(<main className={styles.empty}>
        <h3>Primero selecciona un diseño</h3>
        <p>
            Estamos seguros que encontrarás el ideal<br></br><br></br>
            <Link to="/designs" className="blue_btn">Seleccionar desde diseños</Link>
            <Link to="/myProfile" className="blue_btn">Seleccionar desde mi perfil</Link>
        </p>
        <br></br>
        <h3>¿No sabes usar el editor?</h3>
        <p>No te preocupes, solo te tomará unos minutos aprenderlo a usar</p>
        <img src="./resources/visual-editor.png" alt="Screenshot of editor"></img>
        <ul className="division-3">
            <li>
                <strong>Herramientas</strong><br></br>
                Inserta texto, botones, vínculos, imagenes y mucho más.
            </li>
            <li></li>
            <li>
                <strong>Previsualización</strong><br></br>
                Ve en tiempo real los cambios que has hecho en tu sitio.
            </li>
            <li></li>
            <li>
            <strong>Propiedades</strong><br></br>
                Selecciona un elemento y cambia su tamaño, color, etc. 
            </li>
            <li></li>
        </ul>
        <br></br>
        <h3>¿Sigues con dudas?</h3>
        <p>Mira este sensillo tutorial</p>
    </main>);
}