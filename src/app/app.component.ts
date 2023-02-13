import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  template: `
  <div class="grid">
    <div class="row">
      <div class="col-md-3">
        <div class="text-center p-3">
          <button type="button" class="btn btn-primary p-2" (click)="goTo('home')">
            <fa-icon [icon]="faHome"></fa-icon> Home
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card m-2">
          <img class="card-img-top" src="./../assets/img/formImage.png" alt="Title">
          <div class="card-body">
            <router-outlet></router-outlet>
          </div>
        </div>  
      </div>
    </div>
  </div>
    <!-- FOOTER -->
    <footer class="text-center text-lg-start fixed-bottom">
    </footer>
  `,
  styles: []
})
export class AppComponent {

  public faHome = faHome;
  public faThLarge = faThLarge;

  constructor(
    private router: Router
  ) { }

  goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
