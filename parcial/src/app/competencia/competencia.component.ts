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
  
  NoPrimero = true
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
    this.NoPrimero = false
  }

  agregarCompetencia(){
    let competencia = new Competencia(this.competencias.length + 1, this.nombre_competencia, this.descripcion_competencia, [])
    this.competencias.push(competencia)
    this.NoHay = true
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
    this.competencias[id].comportamiento.push(comportamiento)
    this.HayCompo = false
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
