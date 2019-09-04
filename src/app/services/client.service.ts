import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { ClientInterface } from '../models/clientInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientsCollection: AngularFirestoreCollection<ClientInterface>;
  clientsCollectionFilter: AngularFirestoreCollection<ClientInterface>;
  clients: Observable<ClientInterface[]>;
  clientsFilter: Observable<ClientInterface[]>;
  clientDoc: AngularFirestoreDocument<ClientInterface>;

  constructor(public afs: AngularFirestore) { 
    //this.clients = afs.collection('client').valueChanges();
    this.clientsCollection = afs.collection<ClientInterface>('client');
  }

  getClientes() {
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as ClientInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.clients;
  }

  getClientesByLastname(lastname: string) {
    this.clientsCollectionFilter = this.afs.collection<ClientInterface>('client', ref => ref.where('apellido', '==', lastname));
    this.clientsFilter = this.clientsCollectionFilter.valueChanges();
    return this.clientsFilter;
  }

  addCliente(cliente: ClientInterface) {
    this.clientsCollection.add(cliente);
  }
}
