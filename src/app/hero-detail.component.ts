/**
 * Created by kihyunkim on 2017. 5. 22..
 */

import { Component } from '@angular/core';


@Component({
  selector: 'hero-detail',
  template: '<div *ngIf="hero">' +
  '<h2>{{hero.name}} details!</h2>' +
  '<div><label>id: </label>{{hero.id}}</div>' +
  '<div><label>name: </label>{{hero.name}}</div> ' +
  '<div> ' +
  '<label>name: </label> ' +
  '<input [(ngModel)]="hero.name" placeholder="name"></div>' +
  '</div>'
})

export class HeroDetailComponent {

}
