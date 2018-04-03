import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });


  it('should accept values in constructor',()=>{
	let todo = new Todo({
		name = 'shubham',
		dob = 19,
	});
	expect(todo.name ).toEqual("shubh");
	expect(todo.dob).toEqual(25);
  });
});
