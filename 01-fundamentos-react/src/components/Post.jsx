import { ArticleNyTimes, Cpu } from "phosphor-react";

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
        event.target.setCustomValidity(''); //para deixar de ser obrigatório (comportamente do JS)
        setNewCommentText(event.target.value); //value do textarea, pois o event ocorre nesse elemento. Roda a cada letra digitada
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(commentToDelete){

        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete; //retorna true? fica, senão nem adiciona - método filter()
        })

        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length == 0;

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
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
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
                    onInvalid={handleNewCommentInvalid} //sempre que der inválido por causa do 'required'
                    required
                />
                <footer>
                    <button 
                        type="submit"
                        disabled={isNewCommentEmpty} //condição em variável. Se true, desabilita
                    >Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                { comments.map(comment => {
                    return <Comment 
                    key={comment}
                    content={comment} 
                    onDeleteComment={deleteComment} //passando função! comunicação entre comentários
                    />
                }) }
            </div>
        </article>
    );
}