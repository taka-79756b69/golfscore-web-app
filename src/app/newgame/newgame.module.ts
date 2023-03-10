import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScoreService } from '../common/service/score.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { NewgameComponent } from './newgame.component'
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { ScoreComponent } from '../score/score.component';

const routes: Routes = [
  { path: 'score', component: ScoreComponent }
];

@NgModule({
  declarations: [
    NewgameComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    BrowserModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ScoreService,
    MatDatepickerModule,
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
  ],
  bootstrap: []
})
export class NewgameModule { }
