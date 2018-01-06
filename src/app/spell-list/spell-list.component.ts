import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Spell } from '../spell';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {

  private spellsCollection: AngularFirestoreCollection<Spell>;
  spells: Observable<Spell[]>;
  constructor(private readonly afs: AngularFirestore) {
    this.spellsCollection = afs.collection<Spell>('spell-list');
    this.spells = this.spellsCollection.valueChanges();
  }

  ngOnInit() {
  }

}
