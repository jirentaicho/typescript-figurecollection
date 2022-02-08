import FileManager from './app/FileManager';
import PageLogic from './app/PageLogic';
import './asset/sass/app.scss';
import Dom from './core/dom/Dom';
import Item from './core/gallery/Item';
import Shelf from './core/gallery/Shelf';
import ClazzMake from './core/Maker/ClazzMake';
import Setting from './info/Setting';
import DomConst from './type/DomConst';
import yaml from 'js-yaml';
import Yaml from './core/Maker/Yaml';


class Main{

    private async loadSettings(): Promise<void>{
        
        // yamlの読込
        const response = await FileManager.getDataWithFile('mylist.yaml');
        const data = await response.text();

        // class作成クラスをインスタンス化する
        const clazzMaker = new ClazzMake();
        clazzMaker.register(Item);
        clazzMaker.register(Shelf);

        //　Settingの作成
        const setting = Setting.getInstance();

        //　ここで型を指定しておくと、その通りに取得できるのでYaml用の型を作成しておく
        const yamlData = yaml.load(data) as Array<Yaml>;

        yamlData.forEach(elm => {
            // 空のItems配列を用意しておく
            const t_items : Array<Item> = [];
            // yamlのitems配列を走査して、Itemを作成する
            elm.items.forEach(item => {
                // Itemクラスの作成
                const clazz = clazzMaker.GetImplementationByName("Item");
                // tempのitems配列に入れておく
                t_items.push(new clazz(item) as Item);
            });

            // Shelfクラスを作成する
            const clazz = clazzMaker.GetImplementationByName("Shelf");
            // 先ほど設定したtempのItem配列のデータをセットする
            const shelf = new clazz(
                elm.name,
                t_items
            ) as Shelf;
            shelf.setBackImage(elm.imageName);

            //設定にshelfを追加する
            setting.addShelf(elm.name,shelf);

        });

        const shelfarea = Dom.getElementByIdWithException(DomConst.SHELF_AREA_ID); 
        setting.drawDomShelfs(shelfarea);

    }

    public init() : void{

        // 設定系の操作
        this.loadSettings();

        // 初期画面に必要なものを揃えます
        PageLogic.init();
    }
}


window.onload = () => {
    const main = new Main();
    main.init();
}