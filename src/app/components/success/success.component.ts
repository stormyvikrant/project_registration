import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
  @Output() goBack = new EventEmitter<void>(); // Declare the EventEmitter
  ngOnInit(): void { }

  onGoBack() {
    this.goBack.emit(); // Emit the event when the button is clicked
  }
}   
