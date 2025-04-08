export class HeroComponent {
    static HERO_SECTION = '.showcase__hero';

    constructor(component){
        this.component = component;
    }

    get cardTitle(){
        return this.component.find('.card__title');
    }
}