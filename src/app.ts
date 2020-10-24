import {Page} from './components/page/page';
import {HashRouter} from './core/router/router';
import {render} from './core/render';

declare global {
    interface Window {
        router: HashRouter
    }
}

const page = new Page({
    name: "Not detected page"
});

window.router = new HashRouter();

window.router.use('#home', () => {
    console.log('go to home');
    page.setProps({ name: 'Home page' });
});
window.router.use('#about', () => {
    console.log('go to about');
    page.setProps({ name: 'About page' });
});

window.router.go('home');

render("#app", page);
