import { PencilLine } from 'phosphor-react' 
import styles from "./Sidebar.module.css"

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                className={styles.cover}>
            </img>

            <div className={styles.profile}>
                <img 
                    src="https://avatars.githubusercontent.com/u/17790186?v=4"
                    className={styles.avatar}>
                </img>
                <strong>Luiz Fellipe</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}