import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  constructor() { }
  nombre = ""
  apellido = ""
  user = ""
  pass = ""
  nombreValid: boolean | undefined;
  apellidoValid: boolean | undefined;
  userValid: boolean | undefined;
  passValid: boolean | undefined;
  enviado = false
  ngOnInit(): void {
  } 
  validaciones() {
    if (this.nombre.length > 0) {
      this.nombreValid = true;
    } else {
      this.nombreValid = false;
    }
    if (this.apellido.length > 0) {
      this.apellidoValid = true;
    } else {
      this.apellidoValid = false;
    }
    if (this.user.length > 0) {
      this.userValid = true;
    } else {
      this.userValid = false;
    }
    if (this.pass.length > 0) {
      this.passValid = true;
    } else {
      this.passValid = false;
    }
  }
  onSubmit(){
    this.validaciones();
    if(this.nombreValid && this.apellidoValid && this.userValid && this.passValid){
      alert("mensaje de "+this.nombre+" "+this.apellido)
      this.enviado=true
      let datos = {
        nombre:this.nombre,
        apellido:this.apellido,
        user: this.user,
      }
      localStorage.setItem("datos",JSON.stringify(datos))
    }
  }
  salirDeRuta():Observable<boolean> | boolean{
    if(!this.nombre && !this.apellido && !this.user && !this.pass || this.enviado){
      return true
    }
    const confirmar = confirm("¿Deseas salir del formulario? Perderás todos los cambios")
    console.log(confirmar)
    return confirmar
  }

}
