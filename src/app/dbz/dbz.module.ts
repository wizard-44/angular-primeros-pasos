import { MainPageComponent } from './pages/main-page.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddCharactersComponent } from './components/add-characters/add-characters.component';




@NgModule({
  declarations:[
    MainPageComponent,
    ListComponent,
    AddCharactersComponent,
  ],
  exports:[
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
