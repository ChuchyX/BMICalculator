import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  edad = 25;
  peso = 60;
  altura = 170;

  masculino = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  modificarPeso(operador: string){
    if(operador === '+')
    {
      this.peso +=1;
    }
    else
    {
      this.peso -=1;
    }
  }

  modificarEdad(operador: string){
    if(operador === '+')
    {
      this.edad +=1;
    }
    else
    {
      this.edad -=1;
    }
  }

  cambiarAltura(event: any)
  {
    this.altura = event.target.value;
  }

  sexoActivo(sexo: string)
  {
    if(sexo === 'masculino')
    {
      this.masculino = true;
    }
    else{
      this.masculino = false;
    }
  }

  calcularBMI(){
    const BMI = this.peso / Math.pow(this.altura/100, 2);
    this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }

}
