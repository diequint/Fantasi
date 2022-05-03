import styles from './Blog.module.css';

export function Plantilla_Blog() {
	return(<>
		<div className={styles.contenedor}>
			<header>
				<h1>Plantilla Blog</h1>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<a className="navbar-brand" href="#">Blog EAHF</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Entradas</a>
							</li>
							<li className="nav-item dropdown">
								<a className="nav-link" href="#">Contacto</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
			<main>
				<div className={styles.card}>
					<div className="card-body">
						<h5 className="card-title">Título de la entrada</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<a href="#" className="btn btn-primary">Leer más</a>
					</div>
				</div>
				<div className={styles.card}>
					<div className="card-body">
						<h5 className="card-title">Título de la entrada</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat null
						</p>
						<a href="#" className="btn btn-primary">Leer más</a>
					</div>
				</div>
			</main>
			<footer>
				Copiraight&copy; Fantasi&#174; 2022 - Todos los derechos reservados
			</footer>
		</div>
	</>);
}