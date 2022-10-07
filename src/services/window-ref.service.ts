export class WindowRef {
    get nativeWindow(): any {
        return _window();
    }
}

function _window(): any {
    return window;
}
