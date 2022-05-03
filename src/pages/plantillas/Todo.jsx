import styles from './Todo.module.css';

export function Plantilla_Todo() {
	return(<>
		<div className={styles.contenedor}>
			<header>
				<h1 className={styles.h1}>Plantilla ToDo</h1>
				<nav className={styles.nav}>
					<ul className={styles.ul}>
						<a id="btn-nuevo" className={styles.a} href=""><li className={styles.li}>➕</li></a>
						<a id="btn-eliminar" className={styles.a} href=""><li className={styles.li}>➖</li></a>
						<a id="btn-ordenar" className={styles.a} href=""><li className={styles.li}>⚙</li></a>
					</ul>
				</nav>
			</header>
			<main className={styles.main}>
				<div className={styles.task}> <span>✅</span> <span>Tarea 1</span> <span>01/01/2000</span> </div>
				<div className={styles.task}> <span>✅</span> <span>Tarea 2</span> <span>01/01/2000</span> </div>
				<div className={styles.task}> <span>✅</span> <span>Tarea 3</span> <span>01/01/2000</span> </div>
				<div className={styles.task}> <span>✅</span> <span>Tarea 4</span> <span>01/01/2000</span> </div>
				<div className={styles.task}> <span>✅</span> <span>Tarea 5</span> <span>01/01/2000</span> </div>
			</main>
			<footer className={styles.footer}>
				Copiraight&copy; Fantasi&#174; 2022 - Todos los derechos reservados
			</footer>
		</div>
	</>);
}