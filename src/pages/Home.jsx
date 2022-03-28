import styles from "./Home.module.css";
import { Footer } from "../modules/Footer";
import { NavMenu } from "../modules/NavMenu";

export function Home() {
	return(<>
	<NavMenu />
	<h2>Bienvenido a Fantasi</h2>
	<main className={styles.main}>
		<p>Fantasi es una herramienta ideal para la rápida creación de sitios web personales, así como empresariales, tiendas online, sitios de noticias, paginas gubernamentales, etc.</p>
		<img className={styles.image} src="./resources/create-pages.png" alt="Ups, aquí iba ina imagen :c"/>
		<br/>
		<div className={styles.divisionH}>
			<div>
				<img className={styles.halfimage} src="./resources/programing.jpg" alt="Ups, aquí iba ina imagen :c"/>
			</div>
			<div>
				<p>Con nosotros no tienes que ser un diseñador, mucho menos un programador para obtener resultados profesionales. Aunque si lo eres, te va a encantar lo que podrás lograr aquí.<br/><br/>Contamos con decenas de plantillas distintas que se acoplarán perfecto a tus necesidades.<br/><br/>Además, cuando terminas tu sitio, te damos todo el código fuente para que hagas con el lo que quieras.</p>
			</div>
		</div>
		<div className={styles.divisionH}>
			<div>
				<p><br/>Por si esto fuera poco, nosotros solo generamos ingresos por publicidad y donativos por lo que NO necesitas pagar absolutamente nada, así, sin letras chiquitas podrás obtener tu sitio ideal</p>
			</div>
			<div>
				<img className={styles.littleimage} src="./resources/no-card.jpg" alt="Ups, aquí iba ina imagen :c"/>
			</div>
		</div>
	</main>
	<Footer />
	</>);
}