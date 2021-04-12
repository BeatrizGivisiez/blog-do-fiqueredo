import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentsModel } from './comments.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  // TODO: Consertar a anotação de tipo após implementar a tranformação para árvore
  @Input() comments: CommentsModel[] = new Array<CommentsModel>();

  public alertShare(id) {
    alert("Sua mensagem foi compartilhada com sucesso!" + "\n" + "id do comentário: " + id)
  }

  public alertReport(id) {
    alert("Sua mensagem foi reportada com sucesso!" + "\n" + "id do comentário: " + id)
  }

  ngOnInit() {
  }
}

