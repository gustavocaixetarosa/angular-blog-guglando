import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  @Input()
  photoCover: string = "https://media.istockphoto.com/id/1409329028/pt/vetorial/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=2048x2048&w=is&k=20&c=99fISV8MCqK-5ZphBqT-W50eTgq5UMBu0vteQ-rE-Do= ";

  @Input()
  cardTitle: string = "Teste de text interpolation";

  @Input()
  cardDescription: string = "Gosto bastante de trabalhar com Angular";
}
