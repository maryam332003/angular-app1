import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  ngOnInit(): void {
    let overlayContainer = document.getElementById('overlayContainer');
    let imgContainer = document.getElementById('imgContainer');
    let item = Array.from(document.querySelectorAll('.content .layer'));

    for (let i = 0; i < item.length; i++) {
      item[i].addEventListener('click', showModel);
    }
    function showModel() {
      overlayContainer?.classList.replace('d-none', 'd-flex');
      document.body.style.overflow = 'hidden';
    }
    function hideModel() {
      overlayContainer?.classList.replace('d-flex', 'd-none');
      document.body.style.overflow = 'visible';
    }
    overlayContainer?.addEventListener('click', () => {
      imgContainer?.addEventListener('click', (e) => {
        e.stopPropagation();
      });
      hideModel();
    });
  }
}
