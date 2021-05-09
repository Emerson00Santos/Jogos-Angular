import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fraseService } from '../fraseRegistro.service';
import { AppComponent } from '../app.component'
import { frase } from '../frase';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})

export class MenuPrincipalComponent {

  fraseModel = new frase("", "");
  listaFrases = [];
  constructor(
    private router: Router,
    private fraseService: fraseService,
    private statusUser: AppComponent,

  ) { }


  ngOnInit(): void {
    this.consultaFrases();
  }

  consultaFrases() {

    this.fraseService.get()
      .subscribe(
        data => {
          this.listaFrases = []
          data.forEach(element => {

              console.log(this.listaFrases)
              this.listaFrases.push(element);

          });
        },
        error => {
          console.log(error);
        });
  }

  
  deletaFrase(id) {
  
    console.log(id)

  this.fraseService.delete(id)
    .subscribe(
      data => {
       this.consultaFrases();
      },
      error => {
        console.log(error)
      });
    
  }


  onSubmit() {

    if (this.fraseModel.titulo == '' || !this.fraseModel.titulo) {

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: 'Por favor, informe o título!'
      })

      return;

    }


    if (this.fraseModel.descricao == '' || !this.fraseModel.descricao) {

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'error',
        title: 'Por favor, informe a descrição!'
      })

      return;

    }

    this.fraseService.add({
      titulo: this.fraseModel.titulo, descricao: this.fraseModel.descricao
    })
      .subscribe(
        (jog) => {
          console.log(jog);
          this.clearFields();
          this.consultaFrases();
        },
        (err) => console.error(err)
      )
  }

  clearFields() {
    this.fraseModel.titulo = '';
    this.fraseModel.descricao = '';


    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Review Cadastrada com sucesso!'
    })
  }
}
