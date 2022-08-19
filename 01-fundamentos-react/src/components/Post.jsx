import { ArticleNyTimes } from "phosphor-react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css"

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src="https://avatars.githubusercontent.com/u/17790186?v=4"
                        hasBorder={true}
                    />
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

                    <p>👉{' '}
                        <a href="#">jane.design/doctorcare</a>
                    </p>

                    <p>
                        <a href="#">#novoprojeto</a>{' '}
                        <a href="#">#nlw</a>{' '}
                        <a href="#">#rocketseat</a>
                    </p>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="Deixe um comentário"></textarea>
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
}