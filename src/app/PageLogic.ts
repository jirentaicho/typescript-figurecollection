import Animate from "../core/anim/Animate";
import Dom from "../core/dom/Dom";
import DomCreator from "../core/dom/DomCreator";
import DomConst from "../type/DomConst";

export default class PageLogic{

    private constructor(){}

    private static loaded = false;

    private static readonly ITEM_AREA_STYLE = "w-full overflow-y-scroll bg-slate-300 p-5 block flex flex-wrap";

    private static readonly SHELF_AREA_STYLE = "w-full overflow-y-scroll bg-slate-300 p-5 block flex flex-wrap";

    private static readonly OVER_RAY_STYLE = "fixed hidden left-0 top-0 flex justify-center items-center w-full min-h-screen z-20 bg-black bg-opacity-75";

    public static init(): void{
        //初期処理が完了している場合は処理しない
        if(PageLogic.loaded){
            return;
        }
        PageLogic.loaded = true;
        
        // ITEMエリアの作成
        const itemarea = new DomCreator('div')
                            .idName(DomConst.ITEM_AREA_ID)
                            .className(PageLogic.ITEM_AREA_STYLE)
                            .build();
        itemarea.innerHTML="私のコレクション";
        document.body.appendChild(itemarea);

        // 棚エリアの作成
        const shelfarea = new DomCreator('div')
                            .idName(DomConst.SHELF_AREA_ID)
                            .className(PageLogic.SHELF_AREA_STYLE)
                            .build();
        document.body.appendChild(shelfarea);

        // オーバーレイエリアの作成
        const overrayarea = new DomCreator('div')
                            .idName(DomConst.OVERRAY_AREA_ID)
                            .className(PageLogic.OVER_RAY_STYLE)
                            .build();
        // オーバーレイを閉じる時の動作になります。
        overrayarea.addEventListener('click', function(){
            Animate.PlayWithId(DomConst.CURRENT_IMAGE_ID, {
                scale: [0.6, 0.7, 0.1],
                duration: 400,
                easing: 'easeInOutSine',
                complete: ()=> {
                    this.classList.add('hidden');
                }
            });
        });
        document.body.appendChild(overrayarea);
    }

    /**
     * オーバーレイエリアを表示して取得します。
     * 
     * @returns 
     */
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