import { Component } from '@angular/core';
import { CarosalComponent } from "../../units/carosal/carosal.component";
import { FooterComponent } from '../../units/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarosalComponent,FooterComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
left: any;
center: any;
right: any;

}
