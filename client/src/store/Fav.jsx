import { action, makeObservable, observable } from "mobx";

 class Fav{
    data=[];

    constructor(){
        makeObservable(this,{
            data:observable,
            add_data:action
        })
    }
    add_data(values){
        this.data=[...values]
    } 
}
export const fav=new Fav()