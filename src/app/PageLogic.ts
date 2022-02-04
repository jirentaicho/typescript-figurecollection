import Dom from "../core/dom/Dom";
import DomConst from "../type/DomConst";

export default class PageLogic{

    private constructor(){}

    private static loaded = false;

    public static init(): void{
        //初期処理が完了している場合は処理しない
        if(this.loaded){
            return;
        }
        this.loaded = true;
        
        // ITEMエリアの作成
        const element = <HTMLDivElement>document.createElement('div');
        element.setAttribute('id', Dom.ITEM_AREA_STR);
        element.setAttribute('class', "w-full overflow-y-scroll bg-slate-300 p-5 block flex flex-wrap");
        element.innerHTML="私のコレクション";
        document.body.appendChild(element);

        // 棚エリアの作成
        const shelfarea = <HTMLDivElement>document.createElement('div');
        shelfarea.setAttribute('id', Dom.SHELF_AREA);
        shelfarea.setAttribute('class', "w-full overflow-y-scroll bg-slate-300 p-5 block flex flex-wrap");
        document.body.appendChild(shelfarea);

        // オーバーレイエリアの作成
        const overrayarea = <HTMLDivElement>document.createElement('div');
        overrayarea.setAttribute('id', Dom.OVER_RAY_AREA);
        overrayarea.setAttribute('class', "fixed hidden left-0 top-0 w-full min-h-screen z-20 bg-black bg-opacity-75");
        overrayarea.addEventListener('click', function(){
            this.classList.add('hidden');
        });
        document.body.appendChild(overrayarea);
    }

    public static OpenGetOverray(): HTMLElement{
        const overray = document.getElementById(Dom.OVER_RAY_AREA);
        if(overray === null){
            alert('設定ができていません。: Overrayが未設定です');
            throw new Error("設定ができていません。: Overrayが未設定です.");
        }
        // 子要素は全削除する
        Dom.clearChildNode(overray);
        overray.classList.remove(DomConst.HIDDEN);
        return overray;
    }

}