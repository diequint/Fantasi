import { useState } from 'react';
import styles from "./PageEditor.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand, faArrowPointer, faFont,
		faImage, faLink, faMobileScreen,
		faAlignJustify, faAlignCenter, faAlignRight,
		faAlignLeft, faComputer} from '@fortawesome/free-solid-svg-icons';
import { Plantilla_Menu } from '../pages/plantillas/Menu';
import { Plantilla_Evento } from '../pages/plantillas/Evento';
import { Plantilla_Todo } from '../pages/plantillas/Todo';
// import { Plantilla_Blog } from '../pages/plantillas/Blog';
// import { Plantilla_Chat } from '../pages/plantillas/Chat';

export function PageEditor() {
	var url = window.location.pathname;
	var i = url.lastIndexOf("/");
	url = (url.slice(i+1));
	const [panel, cambiaPanel] = useState('drag');
	const [color1, cambiaModo1] = useState('blue');
	const [color2, cambiaModo2] = useState('blue');
	const [color3, cambiaModo3] = useState('blue');
	const [color4, cambiaModo4] = useState('blue');
	const [color5, cambiaModo5] = useState('blue');
	const [color6, cambiaModo6] = useState('blue');
	const dragMode = () => {
		cambiaModo1(color1 === 'green' ? 'blue' : 'green');
		cambiaModo2('blue');
		cambiaModo3('blue');
		cambiaModo4('blue');
		cambiaModo5('blue');
		cambiaModo6('blue');
		cambiaPanel('drag');
	}
	const selectMode = () => {
		cambiaModo1('blue');
		cambiaModo2(color2 === 'green' ? 'blue' : 'green');
		cambiaModo3('blue');
		cambiaModo4('blue');
		cambiaModo5('blue');
		cambiaModo6('blue');
		cambiaPanel('select');
	}
	const fontMode = () => {
		cambiaModo1('blue');
		cambiaModo2('blue');
		cambiaModo3(color3 === 'green' ? 'blue' : 'green');
		cambiaModo4('blue');
		cambiaModo5('blue');
		cambiaModo6('blue');
		cambiaPanel('font');
	}
	const picMode = () => {
		cambiaModo1('blue');
		cambiaModo2('blue');
		cambiaModo3('blue');
		cambiaModo4(color4 === 'green' ? 'blue' : 'green');
		cambiaModo5('blue');
		cambiaModo6('blue');
		cambiaPanel('pic');
	}
	const linkMode = () => {
		cambiaModo1('blue');
		cambiaModo2('blue');
		cambiaModo3('blue');
		cambiaModo4('blue');
		cambiaModo5(color5 === 'green' ? 'blue' : 'green');
		cambiaModo6('blue');
		cambiaPanel('link');
	}
	const deviceMode = () => {
		cambiaModo1('blue');
		cambiaModo2('blue');
		cambiaModo3('blue');
		cambiaModo4('blue');
		cambiaModo5('blue');
		cambiaModo6(color6 === 'green' ? 'blue' : 'green');
		cambiaPanel('device');
	}
	return(<>
		<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
		integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
		crossorigin="anonymous"
		/>
		<main className={styles.Editor}>
		<div className={styles.leftPanel}>
			<div className={styles.icon} onClick={dragMode} style={{backgroundColor: color1}} ><FontAwesomeIcon icon={faHand}/></div>
			<div className={styles.icon} onClick={selectMode} style={{backgroundColor: color2}}><FontAwesomeIcon icon={faArrowPointer}/></div>
			<div className={styles.icon} onClick={fontMode} style={{backgroundColor: color3}}><FontAwesomeIcon icon={faFont}/></div>
			<div className={styles.icon} onClick={picMode} style={{backgroundColor: color4}}><FontAwesomeIcon icon={faImage}/></div>
			<div className={styles.icon} onClick={linkMode} style={{backgroundColor: color5}}><FontAwesomeIcon icon={faLink}/></div>
			<div className={styles.icon} onClick={deviceMode} style={{backgroundColor: color6}}><FontAwesomeIcon icon={faMobileScreen}/></div>
		</div>
		<div className={styles.centerPanel}>
			<p>Esta es una prueba para visualizar el sitio en html</p>
			<div className={styles.plantilla}>
				{url === '1' ? <Plantilla_Menu/> : null}
				{url === '2' ? <Plantilla_Evento/> : null}
				{url === '3' ? <Plantilla_Todo/> : null}
				{/* {url === '3' ? <Plantilla_Chat/> : null} */}
				{/* {url === '4' ? <Plantilla_Menu/> : null} */}
				{/* {url === '5' ? <Plantilla_Menu/> : null} */}
				{/* {url === '6' ? <Plantilla_Menu/> : null} */}
				{/* {url === '7' ? <Plantilla_Menu/> : null} */}
			</div>
		</div>
		<div className={styles.rightPanel}>
			{panel === 'font' ? <TextButton/> : null}
			{panel === 'pic' ? <LoadImage/> : null}
			{panel === 'link' ? <SetLink/> : null}
			{panel === 'device' ? <ToogleDeviceView/> : null}
		</div>
		</main>
	</>);
}
/* Me guataría que pusieramos una función por botón y que dependiendo del que piquemos aparezca a la derecha */
function TextButton() {
	return(<>
		<h4>Texto</h4>
		<p>Alineación</p>
		{
			// Icono font awesome para centrar, justificar
			<>
			<FontAwesomeIcon icon={faAlignJustify}/> 
			<FontAwesomeIcon icon={faAlignCenter}/> 
			<FontAwesomeIcon icon={faAlignRight}/> 
			<FontAwesomeIcon icon={faAlignLeft}/>
			</>
		}
		<p>Fuente</p>
		{
			<>
			<FontAwesomeIcon icon={faFont}/>
			</>
		}
	</>);
}

function LoadImage() {
	return(<>
		<h4>Agregar Imagen</h4>
		<FontAwesomeIcon icon={faImage}/>
	</>);
}

function SetLink() {
	return(<>
		<h4>Agregar Link</h4>
		<FontAwesomeIcon icon={faLink}/>
	</>);
}

function ToogleDeviceView() {
	return(<>
		<h4>Visualizar Dispositivo</h4>
		<FontAwesomeIcon icon={faMobileScreen}/> <FontAwesomeIcon icon={faComputer}/>
	</>);
}