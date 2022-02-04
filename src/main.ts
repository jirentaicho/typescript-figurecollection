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

        const shelfa = new Shelf("ラブライブ", Array.of(
                new Item("kanon.jpg"),
                new Item("misaka.jpg"),
            ));
        shelfa.setBackImage("kanon.jpg");

        const shelfb = new Shelf("とある", Array.of(
            new Item("misaka.jpg"),
        ));
        shelfb.setBackImage("misaka.jpg");


        //ここsingletonにする
        const setting = Setting.getInstance();
        setting.addShelf("toaru",shelfa);
        setting.addShelf("lovelive",shelfb);
        
        const shelfarea = Dom.getElementByIdWithException(Dom.SHELF_AREA); 
        setting.drawDomShelfs(shelfarea);

    }
}

window.onload = () => {
    const main = new Main();
    main.init();
}