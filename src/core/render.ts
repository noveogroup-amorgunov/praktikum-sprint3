import { Block } from './block/block';

export function render(query: string, block: Block) {
    const root = document.querySelector(query);
    root.appendChild(block.getContent());

    return root;
}
