declare module '*.css' {
    interface CssClass {
        [cssClass: string]: string;
    }
    const cssClass: CssClass;
    export = cssClass;
}
