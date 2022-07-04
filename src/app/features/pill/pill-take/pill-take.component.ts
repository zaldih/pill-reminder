import { Component, HostListener, OnInit } from '@angular/core';

import { PillsService } from '../pills.service';

@Component({
  selector: 'app-pill-take',
  templateUrl: './pill-take.component.html',
  styleUrls: ['./pill-take.component.scss'],
})
export class PillTakeComponent implements OnInit {
  positionX = 0;
  isDraging = false;
  private positionXClickStart = 0;
  private dragElement: HTMLElement | null = null;
  private barContainer: HTMLElement | null = null;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: any) {
    event.stopPropagation();
    this.onMoveMouse(event);
  }
  @HostListener('touchmove', ['$event'])
  onTouchMove(event: any) {
    //  event.stopPropagation();
    this.onMoveMouse(event.targetTouches[0]);
  }

  constructor(private pillsService: PillsService) {}

  ngOnInit(): void {
    const dragElement = document.getElementById('dragable');
    const barContainer = document.getElementById('barContainer');
    if (!dragElement || !barContainer) {
      console.error('Cannot find element for drag by id');
      return;
    }
    this.dragElement = dragElement;
    this.barContainer = barContainer;
    this.onKeyframe();
  }

  startDrag(event: any) {
    event.stopPropagation();
    this.positionXClickStart = event.clientX;
    this.isDraging = true;
    if (!this.dragElement) return;
    this.dragElement.classList.add('active');
  }

  endDrag() {
    console.log('end drag', this.positionX);
    this.isDraging = false;
    if (!this.dragElement) return;
    this.dragElement.classList.remove('active');
  }

  onMoveMouse(event: any) {
    if (!this.isDraging || !this.dragElement || !this.barContainer) return;
    this.positionX =
      this.dragElement.offsetLeft - (this.positionXClickStart - event.clientX);
    this.positionXClickStart = event.clientX;

    const elementPosition = this.positionX;
    this.dragElement.style.marginLeft = elementPosition + 'px';

    const minPosX = 0;
    const maxPosX =
      this.barContainer.offsetWidth - this.dragElement.offsetWidth;

    if (elementPosition < minPosX) {
      this.positionX = minPosX;
      this.dragElement.style.marginLeft = this.positionX + 'px';
    }

    if (elementPosition > maxPosX) {
      this.positionX = maxPosX;
      this.dragElement.style.marginLeft = this.positionX + 'px';
      this.slideCompleted();
    }

    /*   if ('vibrate' in navigator) {
      if (Math.round(this.positionX) % 50 === 0) {
        window.navigator.vibrate(30);
      }
    } */
  }

  private slideCompleted() {
    this.endDrag();
    console.log('ADD PILL! slide completed');
    this.pillsService.takePill();
    if ('vibrate' in navigator) {
      window.navigator.vibrate([50, 100, 50]);
    }
  }

  private onKeyframe() {
    if (!this.isDraging && this.dragElement) {
      this.positionX = this.lerp(this.positionX, 0, 0.15);
      this.dragElement.style.marginLeft = this.positionX + 'px';
    }

    window.requestAnimationFrame(() => this.onKeyframe());
  }

  private lerp(start: number, end: number, amt: number) {
    return (1 - amt) * start + amt * end;
  }
}
