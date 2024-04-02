import {v4 as uuidv4 } from 'uuid';

export class Task {
  constructor(title){
    this.id = uuidv4(),
    this.title = title,
    this.completed = false
  }

  complete() {
    this.completed = true;
  }
}

