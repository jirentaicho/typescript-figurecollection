import PageLogic from './app/PageLogic';
import './asset/sass/app.scss';
import Dom from './core/dom/Dom';
import Item from './core/gallery/Item';
import Shelf from './core/gallery/Shelf';
import Setting from './info/Setting';


class Main{
    public init() : void{

        // 初期画面に必要なものを揃えます
        PageLogic.init();

        // オブジェクトのループはfor in で行う
        const itema = new Item("kanon.jpg");
        const itemb = new Item("kanon.jpg");
        const itemc = new Item("misaka.jpg");

        const shelfa = new Shelf("ラブライブ",Array.of(itema,itemb));
        shelfa.setBackImage("kanon.jpg");
        const shelfb = new Shelf("とある",Array.of(itemc));
        shelfb.setBackImage("misaka.jpg");


        //ここsingletonにする
        const setting = Setting.getInstance();
        setting.addShelf("toaru",shelfa);
        setting.addShelf("lovelive",shelfb);
        const shelfarea = document.getElementById(Dom.SHELF_AREA);
        if(shelfarea === null){
            alert("エラーです");
            return;
        }
        setting.drawDomShelfs(shelfarea);

    }
}

window.onload = () => {
    console.log("aaaaaaaa");
    const main = new Main();
    main.init();
}