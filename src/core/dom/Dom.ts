
export default class Dom{

    public static readonly ITEM_AREA_STR = "item_area";

    public static readonly SHELF_AREA = "shelf_area";

    public static readonly OVER_RAY_AREA = "over_ray";
    
    private constructor(){}

    /**
     * 指定した親ノードに対してIemをappendします。
     * 
     * @param parent 
     * @param item 
     */
    public static appendChild(parent: HTMLElement, item: HTMLElement): void{
        parent.appendChild(item);
    }

    /**
     * 指定した親ノードに対してItemの配列にある全てのItemをappendします。
     * @param parent 
     * @param items 
     */
    public static appendAllChild(parent: HTMLElement, items: Array<HTMLElement>): void{
        items.forEach(item => {
            parent.appendChild(item);
        });
    }

    /**
     * 対象親Nodeの全ての子要素を削除します。
     */
    public static clearChildNode(parrent : HTMLElement) : void{
        while(parrent.firstChild){
            parrent.removeChild(parrent.firstChild);
        }
    }

    /**
     * idのDomを取得します。
     * 取得に失敗した場合は例外とします。
     * @param id 
     * @returns HTMLElement
     */
    public static getElementByIdWithException(id : string): HTMLElement{
        const element = document.getElementById(id);
        if(element === null){
            alert(`対象のDOMが存在しません id : ${id}`);
            throw new Error(`対象のDOMが存在しません id : ${id}`);
        }
        return element;
    }

}