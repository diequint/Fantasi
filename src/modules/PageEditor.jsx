import { useState } from 'react';
import { Err404 } from '../pages/Err404';
import styles from "./PageEditor.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand, faArrowPointer, faFont,
		faImage, faLink, faMobileScreen,
		faAlignJustify, faAlignCenter, faAlignRight,
		faAlignLeft, faComputer} from '@fortawesome/free-solid-svg-icons'

export function PageEditor() {
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
				{
					<Err404/>
				}
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
			<FontAwesomeIcon icon={faAlignJustify}/>	<FontAwesomeIcon icon={faAlignCenter}/>	<FontAwesomeIcon icon={faAlignRight}/>	<FontAwesomeIcon icon={faAlignLeft}/>
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