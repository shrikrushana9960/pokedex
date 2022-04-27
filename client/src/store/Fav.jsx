import { action, makeObservable, observable } from "mobx";

export class Fav{
    data=[];

    constructor(){
        makeObservable(this,{
           
            add_data:action
        })
    }
    add_data(values){
        this.data=[...values]
    } 
}