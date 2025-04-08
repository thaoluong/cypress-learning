import { HeroComponent } from "../components/sr/HeroComponent";

export class SRHomePage {

    heroComponent(){
        return new HeroComponent(cy.get(HeroComponent.HERO_SECTION));
    }


}