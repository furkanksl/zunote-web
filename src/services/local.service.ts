export default class LocalService {
    constructor() {}

    initialize() {}

    clickOutsideHandlerOnMobileMenu(e: any): boolean {
        if (e !== undefined) {
            const mobileMenuEl = !document?.getElementById("mobile-menu")?.contains(e.target);

            if (mobileMenuEl ?? false) {
                const closeMenuButtonEl = !document.getElementById("close-mobile-menu-button")?.contains(e.target);
                if (closeMenuButtonEl ?? false) {
                    return false;
                }
            }
        }
        return true;
    }
}
