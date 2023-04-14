import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent implements OnInit {
  textColor;
  bgColor;
  stop = true;
  signalLight = 'ready';
  selectedImage = 'danger';

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
}
