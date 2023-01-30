import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private autentificacion:AutenticacionService,
    private router:Router,private formbuilder:FormBuilder) { }
  registroform = this.formbuilder.group({
    usuario: ['',{
      validators:[
        Validators.required,
        Validators.email
      ]
    }],
    password: ['',{
      validators:[
        Validators.required,
        Validators.minLength(6)
      ]
    }],
  })
  get usuario(){return this.registroform.get('usuario')}
  get password(){return this.registroform.get('password')}
  urlRedireccion = ""
  ngOnInit(): void {
  }
  Usuario_= "asd@asd.com"
  Password_= "123456"
  contrasenaincorrecta = false
  login(){
    let usuarioeninput = this.registroform.value.usuario
    let passwordEnInput = this.registroform.value.password
    console.log(usuarioeninput)
    console.log(passwordEnInput)
    if(usuarioeninput == this.Usuario_ && passwordEnInput == this.Password_){
      this.autentificacion.login()
      this.urlRedireccion = this.autentificacion.urlUsuarioIntentaAcceder
      this.autentificacion.urlUsuarioIntentaAcceder = ''
      this.router.navigate([this.urlRedireccion]) 
      this.router.navigate(['/perfil']) 
      console.log(typeof this.urlRedireccion)
    }else{
      this.contrasenaincorrecta = true
    }
    
  }

}
