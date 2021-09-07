import './Comment.css';
import imageUser from './user.png';
import {formatRelative} from 'date-fns';
import { ptBR } from 'date-fns/locale';

const Comment = props => {

 
    return <div className="Comment">
            <img class="avatar" src={imageUser} alt={props.name} />
                <div class="content">
                    <h2 class="name">{props.name}</h2>
                    <p class="email">{props.email}</p>
                    <p class="message">{props.children}</p>
                    <p class="data">{formatRelative(props.data, new Date(), { locale: ptBR})}</p>
                    <button class="close" onClick={props.onRemove}>&times;</button>
                </div>
            </div>
}

export default Comment;