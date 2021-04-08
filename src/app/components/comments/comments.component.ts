import { Component, Input } from '@angular/core';
import { CommentsModel } from './comments.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  // TODO: Consertar a anotação de tipo após implementar a tranformação para árvore
  @Input() comments: CommentsModel[] = new Array<CommentsModel>();

  public alerta() {
    alert("Mensagem compartilhada com sucesso!")
  }
}

