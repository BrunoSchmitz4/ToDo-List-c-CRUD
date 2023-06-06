import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
    ){}

    ngOnInit(){
      const id = +this.route.snapshot.params['id'];
      this.tarefa = this.tarefaService.buscarPorId(id);
    }

    atualizar(): void{
      if (this.formTarefa.form.valid){
        this.tarefaService.atualizar(this.tarefa);
        this.router.navigate(['/tarefas']);
      }
    }
}
