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
      { id : 6, name: 'Bwaq', last: 'Reg', phone:67333194, address : '33 Elm Street ' },
      { id: 7, name: 'Test', last: 'Smith', phone:5332328494, address : '3231 Apple Way' },
      { id: 8, name: 'Ford', last: 'Jad', phone:51332294, address : '534 Masom Ave' },
      { id : 9, name: 'Rom', last: 'Jad', phone:67333194, address : '33 Elm Street ' },
      { id: 10, name: 'Jim', last: 'R', phone:5332328494, address : '3231 Apple Way' },
      { id: 11, name: 'Sammy', last: 'R', phone:51332294, address : '534 Masom Ave' },
      { id : 12, name: 'Bwaq', last: 'Reg', phone:67333194, address : '33 Elm Street ' },
      { id: 13, name: 'Anda', last: 'Smith', phone:5332328494, address : '3231 Apple Way' },
      { id: 14, name: 'Na', last: 'Jad', phone:51332294, address : '534 Masom Ave' },
      { id : 15, name: 'Cra', last: 'Jad', phone:67333194, address : '33 Elm Street ' },
      { id: 16, name: 'Jad', last: 'R', phone:5332328494, address : '3231 Apple Way' },
      { id: 17, name: 'Soe', last: 'R', phone:51332294, address : '534 Masom Ave' },
      { id : 18, name: 'Bwaq', last: 'Reg', phone:67333194, address : '33 Elm Street ' },
      { id : 19, name: 'Rom', last: 'Jad', phone:67333194, address : '33 Elm Street ' },
      { id: 20, name: 'Jim', last: 'R', phone:5332328494, address : '3231 Apple Way' },
      { id: 21, name: 'Sammy', last: 'R', phone:51332294, address : '534 Masom Ave' },
      { id : 23, name: 'Bwaq', last: 'Reg', phone:67333194, address : '33 Elm Street ' },
      { id: 24, name: 'Anda', last: 'Smith', phone:5332328494, address : '3231 Apple Way' },
      { id: 24, name: 'Na', last: 'Jad', phone:51332294, address : '534 Masom Ave' },
      { id : 25, name: 'Cra', last: 'Jad', phone:67333194, address : '33 Elm Street ' },
      { id: 26, name: 'Jad', last: 'R', phone:5332328494, address : '3231 Apple Way' },
      { id: 27, name: 'Soe', last: 'R', phone:51332294, address : '534 Masom Ave' },
      { id : 28, name: 'Bwaq', last: 'Reg', phone:67333194, address : '33 Elm Street ' }
    ];
    return {users};
  }

}