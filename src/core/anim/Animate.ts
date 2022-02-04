
import anime from 'animejs';

export default class Animate {
    
    private constructor (){}

    public static PlayWithId(targetId : string, params: anime.AnimeParams): void{
        params.targets = `#${targetId}`;
        anime(params);
    }
    
}