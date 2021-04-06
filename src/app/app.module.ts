import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrontSizeComponent } from './front-size/front-size.component';
import {FormsModule} from '@angular/forms';
import { PetComponent } from './pet/pet.component';
import { PickColorComponent } from './pick-color/pick-color.component';
import { CaculatorComponent } from './caculator/caculator.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontSizeComponent,
    PetComponent,
    PickColorComponent,
    CaculatorComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
