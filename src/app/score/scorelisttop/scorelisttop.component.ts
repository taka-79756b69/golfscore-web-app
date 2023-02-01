import { ActivatedRoute, Router } from '@angular/router';
import { ScoreService } from 'src/app/common/service/score.service';
import { Component } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';

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

    scoreListObservable.subscribe(
      (data)=>{
        this.scorelist = data
        this.setDataList(data)
        //console.log('got data: '+ data)
        //console.log("一覧はとれてる")
      },
      (err)=>{
        //console.log('got err: '+ err)
      },
      ()=>{
        //console.log('complete!')
      }
    )
  }

  //新規保存
  //deleteData(deleteId: any) {
  deleteData() {

    const scoreObservable = this.scoreService.deleteScore(this.deleteTrget)

    scoreObservable.subscribe(
      (data)=>{
        //console.log('got data: '+ JSON.stringify(data))
        //this.router.navigate(["score"])
        this.confflag = false
      },
      (err)=>{
        //console.log('got err: '+ err)
      },
      ()=>{
        //console.log("保存完了")
        //alert("削除しました")
        //this.getScoreLists()
      }
    )
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
