import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';

@Component({
  selector: 'jhi-home',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit, OnDestroy {
  account: Account | null = null;

  title = 'app';

  private readonly destroy$ = new Subject<void>();

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.accountService
      .getAuthenticationState()
      .pipe(takeUntil(this.destroy$))
      .subscribe(account => (this.account = account));
  }

  async ngAfterViewInit(): Promise<void> {
    const camera_button: HTMLButtonElement | null = document.querySelector('#start-camera');
    const video: HTMLVideoElement | null = document.querySelector('#video');
    const click_button: HTMLButtonElement | null = document.querySelector('#click-photo');
    const canvas: HTMLCanvasElement | null = document.querySelector('#canvas');
    const dataurl: HTMLTextAreaElement | null = document.querySelector('#dataurl');
    const dataurl_container: HTMLElement | null = document.querySelector('#dataurl-container');

    if (!video) return;
    if (!click_button) return;
    if (!dataurl) return;
    if (!dataurl_container) return;

    let stream = null;

    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    } catch (error) {
      return;
    }

    video.srcObject = stream;

    video.style.display = 'block';

    click_button.style.display = 'block';

    click_button?.addEventListener('click', function () {
      if (canvas === null) return;
      // @ts-ignore
      canvas?.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
      dataurl.value = canvas.toDataURL('image/jpeg');
      dataurl_container.style.display = 'block';
      video.style.display = 'none';

      click_button.style.display = 'none';
    });
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
