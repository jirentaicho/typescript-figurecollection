import DomItem from "../dom/DomItem";
import { Constructor } from "./Constructor";

export default class ClazzMake{
    
    public implementations: Constructor<DomItem>[] = [];

    GetImplementations(): Constructor<DomItem>[] {
        return this.implementations;
    }

    GetImplementationByName(name:string): Constructor<DomItem>{
        const result = this.implementations.find(i => i.name === name);
        if(result == undefined){
            throw new Error(`対象のクラスが存在しません name : ${name}`);
        }
        return result;
    }

    register<T extends Constructor<DomItem>>(ctor: T) {
        this.implementations.push(ctor);
        return ctor;
    }
}