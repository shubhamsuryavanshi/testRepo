
export class Todo {

	id : number;
	name: string='';
	standard: number;
	dob : number;

	constructor (values : Object={}){
	Object.assign(this,values);
	}


}

