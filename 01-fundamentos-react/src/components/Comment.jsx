import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment(props){

    const [likeCount, setLikeCount] = useState(0); //0 é um valor inicial de likes do comentário

    function handleDeleteComment(){
        props.onDeleteComment(props.content) //deveria ser o id, mas aqui chama a função de Post.jsx e passa o conteúdo do comentário clicado no ícone de lixeira
    }

    function handleLikeComment(){
        setLikeCount((lastNumberLikes) => {
            return lastNumberLikes + 1;
        });
    }

    return(
        <div className={styles.comment}>
            <Avatar
                className={styles.avatar} 
                src="https://avatars.githubusercontent.com/u/2254731?v=4"
                hasBorder={false}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luiz Fellipe</strong>
                            <time 
                                time=   "11 de Agosto às 08h14min" dateTime="2022-08-11 08:14:30">Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}