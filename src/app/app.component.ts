import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutStidioComponent } from "./about-stidio/about-stidio.component";
import { MountainSectionComponent } from "./mountain-section/mountain-section.component";
import { ColumnComponent } from "./column/column.component";
import { BackgroundComponent } from "./background/background.component";
import { CardComponent } from "./card/card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AboutStidioComponent, MountainSectionComponent, ColumnComponent, BackgroundComponent, CardComponent]
})
export class AppComponent {
  title = 'new-Angular-practice';
}
