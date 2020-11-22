import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/shared/main.service';
import { Note } from 'src/app/shared/Note';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private mainService:MainService) { }
  note:Note[]

  ngOnInit(): void {
    console.log(
      this.mainService.getNotes().subscribe(
      (data)=>{
        this.note=data;
        console.log(data)},
      (err)=>{console.log(err)}
      ))
  }

}
