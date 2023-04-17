import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  textColor;
  bgColor;
  stop: boolean = true;
  signalLight: string = 'ready';
  selectedImage = 'danger';
  isSpanVisible = true;
  list = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  mathTable = [
    { id: 1, table: 2 },
    { id: 2, table: 2 },
    { id: 3, table: 2 },
    { id: 4, table: 2 },
    { id: 5, table: 2 },
  ];

  ngOnInit(): void {
    this.bgColor = '#3498db';
    this.textColor = '#fff';
  }

  getClass() {
    if (this.signalLight == 'stop') {
      return 'danger';
    } else if (this.signalLight == 'ready') {
      return 'warning';
    } else {
      return 'success';
    }
  }
  getImageUrl() {
    if (this.selectedImage == 'danger') {
      return '../../assets/danger.jpg';
    } else {
      return '../../assets/success.jpg';
    }
  }

  onVisibleSpan() {
    this.isSpanVisible = !this.isSpanVisible;
  }
}
