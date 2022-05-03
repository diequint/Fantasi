import designs from "./designs.json";
import styles from "./Grid.module.css";
import {Link} from "react-router-dom";

function Card({design}) {
	//TODO: Replace AI's cat images with previews of our templates
	return(<li className={styles.card}>
		<Link to={"/designs/"+design.id}>
			<img className={styles.image} src={design.preview} alt="No hay gatitos :c"/>
		</Link>
		<p className={styles.text}>{design.name}</p>
	</li>);
}

export function Grid() {
	return(<main>
		<ul className={styles.designGgrid}>
			{designs.map((design)=>
				<Card key={design.id} design={design}/>
			)}
		</ul>
	</main>);
}