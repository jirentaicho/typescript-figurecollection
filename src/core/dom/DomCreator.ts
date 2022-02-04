export default class DomCreator{

    private result : HTMLElement | HTMLImageElement;

    private constructor(){};

    public init<K extends keyof HTMLElementTagNameMap>(tagName: K): void{
        this.result = <HTMLElementTagNameMap[K]>document.createElement(tagName);
    }

    public build() : HTMLElement{
        return this.result;
    }

    public idName(id: string): DomCreator{
        this.result.setAttribute('id', id);
        return this;
    }

    public className(className: string): DomCreator{
        this.result.setAttribute('class',className);
        return this;
    }

    public srcName(srcName: string): DomCreator{
        if(this.result instanceof HTMLImageElement){
            this.result.src = srcName;
        } else {
            console.log("This is not HTMLImageElement");
        }
        return this;
    }

    

}