import PageLogic from "../../app/PageLogic";
import DomItem from "../dom/DomItem";
import DomConst from "../../type/DomConst";
import Animate from "../anim/Animate";
import DomCreator from "../dom/DomCreator";

export default class Item implements DomItem{
    
    private image: string;

    private readonly PREVIEW_STYLE = "relative m-4 w-96 h-96 bg-cover bg-center bg-no-repeat";

    private readonly IMAGE_STYLE = "flex justify-center items-center w-5/5";

    constructor(img: string){
        this.image = img;
    }

    clickEvent(): void {
        // オーバーレイを表示します。
        const overray = PageLogic.OpenGetOverray();

       // 画像を表示のアウター枠
       const element = new DomCreator('div')
                            .idName(DomConst.IMAGE_ITEM_VIEW_ID)
                            .className(this.IMAGE_STYLE)
                            .build();
        // 現在の表示画像の作成
        const img = new DomCreator('img')
                        .idName(DomConst.CURRENT_IMAGE_ID)
                        .srcName(`asset/images/${this.image}`)
                        .build();
        // 外枠に画像を追加する
        element.appendChild(img);
        // オーバーレイに外枠を追加する
        overray.appendChild(element);

        // 先にappendしないとDomに無い状態なのでアニメーションされません。
        Animate.PlayWithDom(img, {
            scale: [0.8, 1.2, 1],
            duration: 800,
            easing: 'easeInOutSine'
        });
    }

    // HTMLElementを返却します。
    getHtml(): HTMLElement{
        const element = new DomCreator('div')
                .idName(this.image)
                .className(this.PREVIEW_STYLE)
                .build();
        element.style.backgroundImage = `url(asset/images/${this.image})`;
        element.addEventListener('click',this.clickEvent.bind(this));

        return element;
    }

}