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
                new Item("chisato.jpg"),
                new Item("ren.jpg"),
                new Item("keke.jpg"),
                new Item("sumire.jpg"),
            ));
        shelfa.setBackImage("lovelivetitle.png");

        const shelfb = new Shelf("とある", Array.of(
            new Item("misaka.jpg"),
            new Item("kuroko.jpg"),
            new Item("toaru.jpg"),
        ));
        shelfb.setBackImage("toarutitle.jpg");


        const shelfc = new Shelf("俺妹", Array.of(
            new Item("kirino.jpg"),
            new Item("oreimo.jpg"),
            new Item("ayase.jpg"),
        ));
        shelfc.setBackImage("oreimotitle.png");

        const shelfd = new Shelf("鬼滅", Array.of(
            new Item("rengoku.jpg"),
            new Item("giyu.jpg"),
            new Item("nezuko.jpg"),
        ));
        shelfd.setBackImage("kimetutitle.jpg");


        //ここsingletonにする
        const setting = Setting.getInstance();
        setting.addShelf("toaru",shelfa);
        setting.addShelf("lovelive",shelfb);
        setting.addShelf("oreimo", shelfc);
        setting.addShelf("kimetu", shelfd);
        
        const shelfarea = Dom.getElementByIdWithException(Dom.SHELF_AREA); 
        setting.drawDomShelfs(shelfarea);

    }
}

window.onload = () => {
    const main = new Main();
    main.init();
}