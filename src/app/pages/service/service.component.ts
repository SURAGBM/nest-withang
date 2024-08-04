import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../units/footer/footer.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [RouterLink,FooterComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

}
