import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  private orderCollection: AngularFirestoreCollection<any>;
  private billingCollection: AngularFirestoreCollection<any>;
 
  private orders: Observable<any[]>;
  private billingInfo: Observable<any[]>;

  constructor(private fb: AngularFirestore) {
    this.orderCollection = fb.collection<any>('order');
    this.billingCollection = fb.collection<any>('billinginfo');
    
  

    this.orders = this.orderCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          console.log("order");
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          console.log(a.payload.doc.data.toString);
          return { id, ...data };
        });
      })
    );

    this.billingInfo = this.billingCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          console.log("billing");
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          console.log(a.payload.doc.data.toString);
          return { id, ...data };
        });
      })
    );

   }

   getOrders() {
    return this.orders;
  }

  getBilling(){
    return this.billingInfo;
  }
}
