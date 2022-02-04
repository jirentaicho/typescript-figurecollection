import Dom from "../core/dom/Dom";
import DomConst from "../type/DomConst";

export default class AnimationLogic{

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