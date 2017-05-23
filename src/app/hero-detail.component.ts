/**
 * Created by kihyunkim on 2017. 5. 22..
 */

import { Component } from '@angular/core';


@Component({
  selector: 'hero-detail',
  template: '<div *ngIf="hero">' +
  '<h2>>{{hero.name}} details!</h2>' +
  '<div><label>id: </label>{{selectedHero.id}}</div>' +
  '<div><label>name: </label>{{selectedHero.name}}</div> ' +
  '<div> ' +
  '<label>name: </label> ' +
  '<input [(ngModel)]="selectedHero.name" placeholder="name"></div>' +
  '</div>'
})

export class HeroDetailComponent {

}
