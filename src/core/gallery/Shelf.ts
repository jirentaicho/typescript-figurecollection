import Dom from "../dom/Dom";
import DomItem from "../dom/DomItem";
import Item from "./Item";

export default class Shelf implements DomItem{
    
    private name : string;

    private imageName : string = "";

    private items : Array<Item>;

    private readonly OUTER_STYLE = "relative m-4 w-64 h-32 bg-cover bg-center bg-no-repeat";

    private readonly INNERT_STYLE = "absolute inset-x-0 bottom-0 block w-full pt-3 pb-3 text-center text-gray-200 bg-slate-700 bg-opacity-75";

    public constructor(name : string, items : Array<Item>){
        this.name = name;
        this.items = items;
    }

    public setBackImage(imageName : string): void{
        this.imageName = imageName;
    }
    
    getHtml(): HTMLElement {
        // まずはshelfとしてのdiv要素を作成する
        const element = <HTMLDivElement>document.createElement('div');
        element.setAttribute('id',this.name);
        element.setAttribute('class', this.OUTER_STYLE);
        if(this.imageName != ""){
            element.style.backgroundImage = `url(asset/images/${this.imageName})`;
        }
        element.addEventListener('click', this.clickEvent.bind(this));

        //　タイトル箇所
        const innerElement = <HTMLDivElement>document.createElement('div');
        innerElement.textContent = this.name;
        innerElement.setAttribute('class', this.INNERT_STYLE);
        element.appendChild(innerElement);

        return element;
    }



    clickEvent(): void {
        const parrent = document.getElementById(Dom.ITEM_AREA_STR);
        if(parrent === null){
            return;
        }
        // 対象DIVのDOMの要素を空にする必要がある
        Dom.clearChildNode(parrent);
        // 対象DIVにITEMを全て追加する
        Dom.appendAllChild(
            parrent,
            this.toHTMLElementArray(),
        );

    }

    /**
     * ITEM配列をHTMLElementの配列に変換して返します。
     * @returns Array<HTMLElement>
     */
    private toHTMLElementArray(): Array<HTMLElement>{
       return this.items.map( item => item.getHtml());
    }

}