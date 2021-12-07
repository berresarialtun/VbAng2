import { Comment } from "./comment.model";

export class Course{
    constructor(public id?:number, 
                public imageUrl?:string, 
                public name?:string, 
                public instructor?:string,
                public rating?:number,
                public categoryId?:number,
                public comments?:Comment[]
                ){

    }
}