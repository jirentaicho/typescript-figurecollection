import PageLogic from "../../app/PageLogic";
import DomItem from "../dom/DomItem";

import DomConst from "../../type/DomConst";
import Animate from "../anim/Animate";

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

       // 画像を表示する
        const element = <HTMLDivElement>document.createElement('div');
        element.setAttribute('id', DomConst.IMAGE_ITEM_VIEW_ID);
        element.setAttribute('class', this.IMAGE_STYLE);

        const img = document.createElement('img');
        img.setAttribute('id', DomConst.CURRENT_IMAGE_ID);
        img.src = `asset/images/${this.image}`; // 画像パス
        element.appendChild(img);

        overray.appendChild(element);
        //アニメーションさせる
        // const animationNode = AnimNodeFactory.create('cuurrent_img');
     
        // appendしないとDomに無い状態なのでアニメーションされません。
        Animate.PlayWithId(DomConst.CURRENT_IMAGE_ID,{
            scale: [0.8, 1.2, 1],
            duration: 800,
            easing: 'easeInOutSine'
        });

        
        
        
    }

    // HTMLElementを返却します。
    getHtml(): HTMLElement{
        const element = <HTMLDivElement>document.createElement('div');
        element.setAttribute('id',this.image);
        element.setAttribute('class', this.PREVIEW_STYLE);
        element.style.backgroundImage = `url(asset/images/${this.image})`;
        
        element.addEventListener('click',this.clickEvent.bind(this));

        return element;
    }


}