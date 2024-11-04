import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input()
  photoCover: string = "https://media.istockphoto.com/id/1409329028/pt/vetorial/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=2048x2048&w=is&k=20&c=99fISV8MCqK-5ZphBqT-W50eTgq5UMBu0vteQ-rE-Do= "

  @Input()
  cardTitle: string = "Vamos ver"
}
