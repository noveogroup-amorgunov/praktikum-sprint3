import { HashRouter } from './router';

describe('hashrouter', () => {
    it('должен подписываться на изменение хеша', () => {
        const router = new HashRouter();

        const elementMock = jest.fn();

        jest.spyOn(router, 'onRouteChange').mockImplementation(() => {
            elementMock();
        });

        window.history.replaceState({}, 'Test Title', '#245');
        window.dispatchEvent(new HashChangeEvent("hashchange"));

        expect(elementMock).toBeCalled();
    });

    it('должен вызывать соответствующий колбек при изменение роута', () => {
        const router = new HashRouter();
        const mock = jest.fn();

        router.use('#home', mock)

        window.history.replaceState({}, 'Test Title', '#home');
        window.dispatchEvent(new HashChangeEvent("hashchange"));

        expect(mock).toBeCalled();
    });

    it('должен изменять хеш при вызове hashRouter.go', () => {
        const router = new HashRouter();

        window.history.replaceState({}, 'Test Title', '#home');
        router.go('#home2');

        expect(window.location.hash).toEqual('#home2');
    });
});
