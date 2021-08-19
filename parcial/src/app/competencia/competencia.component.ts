import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Competencia } from '../models/competencia.model'; 
import { Comportamiento } from '../models/comportamiento.model';

@Component({
  selector: 'app-competencia',
  templateUrl: './competencia.component.html',
  styleUrls: ['./competencia.component.css']
})
export class CompetenciaComponent{
  title = "Competencias"
  
  NoHay = true
  HayCompo = false

  competencias: Competencia[] = []

  nombre_competencia:string = ""
  descripcion_competencia:string = ""
  id_competencia:string = ""

  comportamientos: Comportamiento[] = []
  descripcion_comportamiento:string = ""
  peso:number = 0


  mostrarNuevaCompetencia() {
    this.NoHay = false
  }

  agregarCompetencia(){
    let competencia = new Competencia(this.competencias.length + 1, this.nombre_competencia, this.descripcion_competencia, [])
    this.competencias.push(competencia)
    
  }

  eliminarCompetencias(id:number){
    let eli = this.competencias
    let elimina = eli.splice(id, 1)
  }

  mostrarNuevoComportamiento(){
    this.HayCompo = true
  }

  agregarComportamiento(id:number){
    let comportamiento = new Comportamiento(this.descripcion_comportamiento, this.peso, id)
    this.comportamientos.push(comportamiento)
  }

  eliminarComportamiento(id:number){
    let eli = this.comportamientos
    let elimina = eli.splice(id, 1)
  }

  /*guardarCompetencia(id:number) {
    if(this.id_competencia != "" && this.nombre_competencia != "" && this.descripcion_competencia != ""){  
    }
    this.SiHayCompe = false
    this.SiHayYa = true
  }*/
}
