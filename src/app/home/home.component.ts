import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  handleIconClick(platform: string): void {
    switch (platform) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/shantanu-pabitwar-7540631b0/', '_blank');
        break;
      case 'github':
        window.open('https://github.com/shaan04', '_blank');
        break;
      case 'twitter':
        window.open('https://twitter.com/shantanupabitwar', '_blank');
        break;
      default:
        console.error('Unknown platform:', platform);
    }
  }
}
