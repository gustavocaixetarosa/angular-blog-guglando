import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  @Input()
  photoCover: string = "https://terramagna.com.br/wp-content/uploads/2022/07/Femea-besouro-veado-ambiente-natural-galho.jpg";

  @Input()
  contentTitle: string = "A maneirice usual dos besouros";

  @Input()
  contentDescription: string = "O quão interessante pode ser a natureza?";


  constructor(private route: ActivatedRoute){
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }
}
