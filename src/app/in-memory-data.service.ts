import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})



export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, name: 'Andrew', last: 'Smith', phone:5332328494, address : '3231 Apple Way' },
      { id: 2, name: 'Nancy', last: 'Jad', phone:51332294, address : '534 Masom Ave' },
      { id : 3, name: 'Chad', last: 'Jad', phone:67333194, address : '33 Elm Street ' },
      { id: 4, name: 'Jim', last: 'R', phone:5332328494, address : '3231 Apple Way' },
      { id: 5, name: 'Sa', last: 'R', phone:51332294, address : '534 Masom Ave' },
      { id : 6, name: 'Bwaq', last: 'Reg', phone:67333194, address : '33 Elm Street ' }
    ];
    return {users};
  }

}