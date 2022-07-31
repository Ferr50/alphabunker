import {ButtonModal} from "../modals";

export function Button(props:ButtonModal){
    return(
        <button onClick={props.handleEvent} className={`${props.style}`}>
            {props.content}
        </button>
    );
}