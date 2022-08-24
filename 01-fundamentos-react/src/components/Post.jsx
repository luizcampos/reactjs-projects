import { ArticleNyTimes } from "phosphor-react";

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css"
import { useState } from "react";

export function Post(props){

    const [comments, setComments] = useState([
        "Post muito bacana!",
    ]);

    //estado para verificar digitações na textarea
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {locale: ptBR, addSuffix: true})

    function handleCreateNewComment(){ /* função p/ onSubmit do form */
        event.preventDefault(); /* evitar que submit do form queria redirecionar para outra page*/

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(){

        setNewCommentText(event.target.value); //value do textarea, pois o event ocorre nesse elemento
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={props.author.avatarUrl}
                        hasBorder={true}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormatted} 
                    dateTime={props.publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {props.content.map(line => {
                    if (line.type == 'paragraph'){
                        return <p>{line.content}</p>
                    } else if (line.type == 'link'){
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText} //é sempre o valor desse estado 'newCommentText'
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                { comments.map(comment => {
                    return <Comment content={comment} />
                }) }
            </div>
        </article>
    );
}