import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svc',
  templateUrl: './svc.component.html',
  styleUrls: ['./svc.component.css']
})
export class SvcComponent implements OnInit {
  @Input() title='title ';
  @Input() description='desc';
  @Input() number='01';
  constructor() { }

  ngOnInit(): void {
  }

}
