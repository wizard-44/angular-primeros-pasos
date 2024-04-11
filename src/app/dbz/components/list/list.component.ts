import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input()
  public characterList: Character[]=[{
    name:'Trunks',
    power:10
  }]
  @Output()
  public OnDelete : EventEmitter<string>= new EventEmitter();
  onDelete():void{

  }
  onDeleteCharacter(id?:string):void{
    if(!id) return;
    this.OnDelete.emit(id);
  }
}
