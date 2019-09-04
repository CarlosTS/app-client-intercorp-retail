import { Component, OnInit } from '@angular/core';
import { ClientInterface } from '../../models/clientInterface';
import { ClientService } from '../../services/client.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-client-analysits',
  templateUrl: './client-analysits.component.html',
  styleUrls: ['./client-analysits.component.css']
})
export class ClientAnalysitsComponent implements OnInit {

  client: ClientInterface = {
    nombre: '',
    apellido: '',
    edad: 0,
    fecha_nac: ''
  }

  clientList: ClientInterface[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {}

  filterByLastname(value){
    this.clientService.getClientesByLastname(value).subscribe( clientes => {

      clientes.forEach((item,index) => {
        item.edadMuerte = Math.floor(Math.random() * (100 - item.edad)) + item.edad;
      });
      this.clientList = clientes;
    });
  }

}
