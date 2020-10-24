export class HashRouter {
    routes: Record<string, Function> = {};

    constructor() {
        window.addEventListener("hashchange", () => this.onRouteChange());
    }

    onRouteChange() {
        const { hash } = window.location;

        Object.entries(this.routes).some(([routeHash, callback]) => {
            if (routeHash === hash) {
                callback();
                return true;
            }
        });
    }

    use(hash: string, callback: Function) {
        this.routes[hash] = callback;
    }

    go(hash: string) {
        window.location.hash = hash;
    }

    back() {
        window.history.back();
    }
}
