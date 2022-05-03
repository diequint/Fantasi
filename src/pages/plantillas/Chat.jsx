import { styles } from './Chat.module.css';

export function Plantilla_Chat()
{
	return(<>
		<div class="contenedor">
			<header>
				<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
					<a class="navbar-brand" href="#">Plataforma de chat</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Login</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">Exit</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
			<main>
				<div class="container" style="width: 25%;">
					<div class="amigo">John</div>
					<div class="amigo">Mark</div>
					<div class="amigo">Peter</div>
					<div class="amigo">Mary</div>
					<div class="amigo">Sara</div>
					<div class="amigo">Petunia</div>
					<div class="amigo">John</div>
					<div class="amigo">Mark</div>
					<div class="amigo">Peter</div>
					<div class="amigo">Mary</div>
					<div class="amigo">Sara</div>
					<div class="amigo">Petunia</div>
				</div>
				<div class="container" style="width: 75%;">
					<div class="row">
						<div class="col-md-12" style="width: 100%; height: 300px; border: #000 solid 3px; border-radius: 10px; background-color: aliceblue;">
							Mensajes
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<form action="">
								<div class="form-group">
									<input type="text" id="mensaje" name="mensaje" class="form-control"></input>
								</div>
								<button type="submit" class="btn btn-primary">Enviar</button>
							</form>
						</div>
					</div>
				</div>
			</main>
			<footer>
				Copiraight&copy; Fantasi&#174; 2022 - Todos los derechos reservados
			</footer>
		</div>
	</>);
}