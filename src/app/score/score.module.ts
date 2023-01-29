import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScoreComponent } from './score.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScorelistComponent } from './scorelist/scorelist.component';
import { ScorelisttopComponent } from './scorelisttop/scorelisttop.component';
import { ScoreService } from '../common/service/score.service';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatSnackBarModule } from '@angular/material/snack-bar'

const routes: Routes = [
  {
    path: 'score', component: ScoreComponent,
    children: [
     { path: '', component: ScorelisttopComponent },
     { path: ':scoreId', component: ScorelistComponent },
    //  { path: ':scoreId/score', component: ScoreComponent },
     { path: ':scoreId/score', redirectTo: '/score', pathMatch: 'full'},
     { path: 'scorelisttop', component: ScorelisttopComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ScoreComponent,
    ScorelistComponent,
    ScorelisttopComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [
    ScoreService
  ],
  bootstrap: [],
  exports: [RouterModule]
})
export class ScoreModule { }
