
export default class AnimNode{
    private element : HTMLElement | undefined;

    public constructor(id : string){
        const target = document.getElementById(id);
        this.element = target ? target : undefined;
    }

    public addEvent(type : string, callback : (param : Event) => void) : void{
        if(this.element === undefined){
            return;
        }
        this.element.addEventListener(type, e => callback(e));
    }

}