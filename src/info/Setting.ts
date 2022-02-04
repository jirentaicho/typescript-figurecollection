import Shelf from "../core/gallery/Shelf";

export default class Setting{

    private constructor(){}

    private static instance : Setting;

    public static getInstance(): Setting{
        if(!Setting.instance){
            Setting.instance = new Setting();
        }
        return Setting.instance;
    }

    private shelfs: Record<string,Shelf> = {};

    public addShelf(name: string, shelf : Shelf) : void {
        this.shelfs[name] = shelf;
    }

    public drawDomShelfs(parrent : HTMLElement): void {
        for(const key in this.shelfs){
            parrent.appendChild(this.shelfs[key].getHtml());
        }
    }

}