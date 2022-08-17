import { ArticleNyTimes } from "phosphor-react";
import styles from "./Post.module.css"

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar} 
                        src="https://avatars.githubusercontent.com/u/17790186?v=4">
                    </img>
                    <div className={styles.authorInfo}>
                        <strong>Luiz Fellipe</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time 
                    time="11 de Agosto às 08h14min" dateTime="2022-08-11 08:14:30">Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                    <p>👉
                        <a href="#">jane.design/doctorcare</a>
                    </p>

                    <p>
                        <a href="#">#novoprojeto #nlw #rocketseat</a>
                    </p>
                </p>
            </div>
        </article>
    );
}