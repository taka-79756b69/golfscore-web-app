import { ActivatedRoute, Router } from '@angular/router';
import { ScoreService } from 'src/app/common/service/score.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scorelisttop',
  templateUrl: './scorelisttop.component.html',
  styleUrls: ['./scorelisttop.component.scss']
})
export class ScorelisttopComponent {

  scorelist: any
  deleteTrget: any
  confflag: any

  listArray: number[] = new Array()

  constructor(
    private scoreService: ScoreService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {

    this.getScoreLists()
  }

  getScoreLists(): void {

    const scoreListObservable = this.scoreService.getScoreList()

    scoreListObservable.subscribe({
      next: (data) =>{
        this.scorelist = data
        this.setDataList(data)
      },
      error: (e) =>{
      },
      complete: () =>{
      }
    })
  }

  //新規保存
  //deleteData(deleteId: any) {
  deleteData() {

    const scoreObservable = this.scoreService.deleteScore(this.deleteTrget)

    scoreObservable.subscribe({
      next: (data) =>{
        this.confflag = false
      },
      error: (e) =>{
      },
      complete: () =>{
      }
    })
  }

  setConfFlag(trget: any) {

    this.confflag = true
    this.deleteTrget = this.listArray[trget]
  }

  reload() {
    this.getScoreLists()
  }

  setDataList(lists: any) {
    for (let list of lists){
      this.listArray.push(list._id)
    }
  }
}
