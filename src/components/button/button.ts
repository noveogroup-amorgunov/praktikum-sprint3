import {Block} from '../../core/block/block';

interface IProps {
    id?: string;
    text: string;
    onClick?: (e: MouseEvent) => void;
}

export class Button extends Block {
    props: IProps;

    constructor(props: IProps) {
        super('button', props);
    }

    render() {
        const { id, onClick, text } = this.props;

        // TODO: Сделать систему событий
        setTimeout(() => {
            const domNode = document.getElementById(id);
            console.log(domNode);
            domNode.onclick = onClick;
        }, 50);


        return `<button class="button" id="${id}">${text}</button>`;
    }
}
