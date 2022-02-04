import Shelf from "../core/gallery/Shelf";

export default class Setting{
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