import AnimNode from "./AnimNode";

export default class AnimNodeFactory{

    private static instance: AnimNodeFactory;

    private constructor(){}

    public static create(id : string): AnimNode{
        const animNode = new AnimNode(id);
        if(animNode === undefined){
            alert(`ID属性が見つかりませんでした。: 対象ID : ${id}`);
            throw new Error("ID属性が見つかりませんでした。");
        }
        return animNode;
    }

}