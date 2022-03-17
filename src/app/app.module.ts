import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material.module'; 
import { TarefasComponent } from './tarefas/tarefas.component'; 
import { FormsModule } from '@angular/forms';
import { EstyledDirective } from './estyled.directive';



@NgModule({
  declarations: [
    AppComponent,
    TarefasComponent,
    EstyledDirective,

    

    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
