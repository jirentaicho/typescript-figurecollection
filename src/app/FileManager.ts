export default class FileManager{
    public static getDataWithFile(filename : string) : Promise<Response>{
        return fetch(`/${filename}`);
    }
}