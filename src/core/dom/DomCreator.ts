export default class DomCreator<K extends keyof HTMLElementTagNameMap>{

    private result : HTMLElement | HTMLImageElement;

    public constructor(tagName: K){
        this.result = <HTMLElementTagNameMap[K]>document.createElement(tagName);
    }

    public build() : HTMLElement{
        return this.result;
    }

    public idName(id: string): DomCreator<K>{
        this.result.setAttribute('id', id);
        return this;
    }

    public className(className: string): DomCreator<K>{
        this.result.setAttribute('class',className);
        return this;
    }

    public srcName(srcName: string): DomCreator<K>{
        if(this.result instanceof HTMLImageElement){
            this.result.src = srcName;
        } else {
            console.log("This is not HTMLImageElement");
        }
        return this;
    }

}