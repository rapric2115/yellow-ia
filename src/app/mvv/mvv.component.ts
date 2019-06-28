import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mvv',
  templateUrl: './mvv.component.html',
  styleUrls: ['./mvv.component.css']
})
export class MvvComponent implements OnInit {

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('es');
  }

  mVision() {
    const vision = document.getElementById('vision');
    vision.classList.toggle('mo-mvv');
    vision.classList.toggle('vision');
    vision.classList.toggle('show-mVision');

    const contFluid = document.getElementById('contF');
    contFluid.classList.toggle("h");
  }

  mMision() {
    const mision = document.getElementById('mision');
    mision.classList.toggle('mo-mvv');
    mision.classList.toggle('show-mision');

    const contFluid = document.getElementById('contF');
    contFluid.classList.toggle("h");   
  }

  ngOnInit() {
  }

}
