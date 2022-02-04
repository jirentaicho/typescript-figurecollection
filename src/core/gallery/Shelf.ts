import DomConst from "../../type/DomConst";
import Dom from "../dom/Dom";
import DomCreator from "../dom/DomCreator";
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
        const element = new DomCreator('div')
                            .idName(this.name)
                            .className(this.OUTER_STYLE)
                            .build();
        if(this.imageName != ""){
            element.style.backgroundImage = `url(asset/images/${this.imageName})`;
        }
        element.addEventListener('click', this.clickEvent.bind(this));

        const innerElement = new DomCreator('div')
                                .className(this.INNERT_STYLE)
                                .build();
        innerElement.textContent = this.name;                            

        element.appendChild(innerElement);

        /*
        この記載は長い気がする
        const element = <HTMLDivElement>document.createElement('div');
        element.setAttribute('id',this.name);
        element.setAttribute('class', this.OUTER_STYLE);
        if(this.imageName != ""){
            element.style.backgroundImage = `url(asset/images/${this.imageName})`;
        }
        element.addEventListener('click', this.clickEvent.bind(this));
        */

        return element;
    }


    clickEvent(): void {
        const parrent = Dom.getElementByIdWithException(DomConst.ITEM_AREA_ID);
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