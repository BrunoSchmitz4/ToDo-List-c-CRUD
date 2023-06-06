import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Tarefa, TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { FormsModule } from '@angular/forms';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarComponent,
    TarefaConcluidaDirective,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService,
  ]
})
export class TarefasModule { }
