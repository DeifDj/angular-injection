import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, OneComponent, TwoComponent]
})
export class AppComponent {
  title = 'angular-injection';
}
