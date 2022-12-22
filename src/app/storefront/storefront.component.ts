import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

  // need fix
  currentAllPokemons: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
