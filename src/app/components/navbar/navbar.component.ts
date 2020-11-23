import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(textSearch: string) {

    textSearch = textSearch.trim();
    
    if (textSearch.length === 0)
      return;

    this.router.navigate(['/search', textSearch]);
  }

}
