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
    this.firestore.collection('userApplications').add(user).then(err => '');
  }
  // Read
  readUser(): any {
    return this.firestore.collection('userApplications').snapshotChanges();
  }

  // Update
  updatePolicy(user: UserApplication): void{
    this.firestore.doc('userApplications/' + user.email).update(user).then(err => '');
  }

  // Delete, ps: Unverified
  deletePolicy(user: UserApplication): void{
    this.firestore.doc('userApplications/' + user).delete().then(err => '');
  }

}
