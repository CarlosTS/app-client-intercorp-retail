import { Component, OnInit } from '@angular/core';
import { ClientInterface } from '../../models/clientInterface';
import { ClientService } from '../../services/client.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client: ClientInterface = {
    nombre: '',
    apellido: '',
    edad: 0,
    fecha_nac: ''
  }

  public promedio : number;
  public std : number;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.calculate();
  }

  calculate() {
    let ages = [];
    this.clientService.getClientes().subscribe( clientes => {
      clientes.forEach((item,index) => {
        ages.push(item.edad);
      });
      this.promedio = Math.round((ages.reduce((a,b) => a + b ))/ages.length); 
      this.std = Math.round(this.standardDeviation(ages,true));
    });
  }

  standardDeviation = (arr, usePopulation = false) => {
    const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
    return Math.sqrt(
      arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
        (arr.length - (usePopulation ? 0 : 1))
    );
  };
  
  onGuardarCliente(myForm: NgForm) {
    this.clientService.addCliente(this.client);
    this.calculate();
    this.resetform();
  }

  resetform() {
    this.client.edad = 0;
    this.client.nombre = '';
    this.client.apellido = '';
    this.client.fecha_nac = '';
    this.client.edadMuerte = 0;
  }
}
