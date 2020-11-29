import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

// user application model
export class UserApplication{
  fName = '';
  lName = '';
  email = '';
  company = '';
  uPhone = '';
  uMsg = '';
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }
  // Create
  createUser(user: UserApplication): void{
    this.firestore.collection('userApplications').add(user).then(err => console.log(err));
  }

  // Read
  readUser(): any {
    return this.firestore.collection('userApplications').valueChanges();
  }

  // Update, ps: Unverified
  updatePolicy(user: UserApplication): void{
    this.firestore.doc('userApplications/' + user.email).update(user).then(err => console.log(err));
  }

  // Delete, ps: Unverified
  deletePolicy(user: UserApplication): void{
    this.firestore.doc('userApplications/' + user.email).delete().then(err => console.log(err));
  }

}
