import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  styleUrls: ['./parametro.component.css']
})
export class ParametroComponent implements OnInit {

  title = 'appPwa';
  nome: string = "Estudante Iara Camargos";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data);
    })
  }

}
