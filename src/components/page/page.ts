import { Block } from '../../core/block/block';
import {Button} from '../button/button';

export class Page extends Block {
    constructor(props: any) {
        super("div", {
            name: props.name,
            buttonHomePage: new Button({
                onClick: () => window.router.go('#home'),
                id: "button-home",
                text: "Go to home page"
            }),
            buttonAboutPage: new Button({
                onClick: () => window.router.go('#about'),
                id: "button-about",
                text: "Go to about page"
            }),
            buttonBack: new Button({
                onClick: () => window.router.back(),
                id: "button-back",
                text: "Go to back"
            })
        });
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setProps({
    //             name: "Login Page new"
    //         });
    //     }, 3000);
    // }

    render() {
        const { name, buttonHomePage, buttonAboutPage, buttonBack } = this.props;

        console.log(`render with2: ${name}`);

        return `
            <div>
                <h1>${name}</h1>
                <div>
                    ${buttonHomePage.render()}&nbsp;
                    ${buttonAboutPage.render()}&nbsp;
                    ${buttonBack.render()}&nbsp;                    
                </div>
            </div>
        `;
    }
}
