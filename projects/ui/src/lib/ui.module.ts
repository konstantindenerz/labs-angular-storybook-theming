import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ThemesComponent } from './themes/themes.component';



@NgModule({
  declarations: [
    UiComponent,
    ThemesComponent
  ],
  imports: [
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
