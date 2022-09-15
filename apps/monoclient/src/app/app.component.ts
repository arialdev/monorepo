import { Component } from '@angular/core';
import { GreetingService } from './services/greeting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'monoclient';

  name = 'default';

  public simpleGreeting = '';
  public complexGreeting = '';

  constructor(private greetingService: GreetingService) { }

  public getSimpleGreeting() {
    this.greetingService.getSimpleGreeting().subscribe(data => {
      this.simpleGreeting = data;
    });
  }

  public getComplexGreeting() {
    console.log(this.name)
    this.greetingService.getComplexGreeting(this.name).subscribe(data => {
      this.complexGreeting = data;
    });
  }

  public changeName(event: any) {
    this.name = event.target.value;
  }
}
