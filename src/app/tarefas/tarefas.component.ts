import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  DADOS_KEY = 'dados_key'
listaTarefas:any[] = []

constructor( private snackBar: MatSnackBar) {}
  
openSnackBar(message:any, action:any){

  this.snackBar.open(message, action);[] = []
}





ngOnInit(){
  const tarefas = localStorage.getItem(this.DADOS_KEY)
  if(tarefas){
    this.listaTarefas=JSON.parse(tarefas)
  }
}
  
  adicionar(nomeTarefa: string){
    if(nomeTarefa.trim().length==0){
      return;}
    this.listaTarefas.push({id:this.listaTarefas.length, nome:nomeTarefa})
    this.salvarDados()
  }

  excluir(id:number){
    this.listaTarefas = this.listaTarefas.filter(item => (item.id!=id))
    this.salvarDados()
  }

  
  excluirTudo(){
    this.listaTarefas.length=0
    this.salvarDados()
  }

  private salvarDados(){
    localStorage.setItem(this.DADOS_KEY, JSON.stringify(this.listaTarefas))

  }
}