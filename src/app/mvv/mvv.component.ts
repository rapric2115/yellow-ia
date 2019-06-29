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

  public innerwidth: any = window.innerWidth;



  mVision() {
    if (this.innerwidth > 500) {
      const vision = document.getElementById('vision');
      vision.classList.toggle('mo-mvv');
      vision.classList.toggle('vision');
      vision.classList.toggle('show-mVision');
  
      const contFluid = document.getElementById('contF');
      contFluid.classList.toggle("h");

      if( document.getElementById('v').hasAttribute('data-toggle')) {
        document.getElementById('v').setAttribute("data-toggle", " ");
      }

    } else {
      const vision = document.getElementById('vision');
      vision.classList.toggle('modal');
      vision.classList.toggle('fade');
      if( document.getElementById('v').hasAttribute('data-target')) {
        document.getElementById('v').setAttribute("data-target", "#visionModal");
      }
    }
  }

  mMision() {
    if(this.innerwidth > 500) {
      const mision = document.getElementById('mision');
    mision.classList.toggle('mo-mvv');
    mision.classList.toggle('mision');
    mision.classList.toggle('show-mision');

    const contFluid = document.getElementById('contF');
    contFluid.classList.toggle("h"); 

    if(document.getElementById('m').hasAttribute('data-toggle')) {
      document.getElementById('m').setAttribute('data-toggle', "");
    }
    }  else {
      const mision = document.getElementById('mision');
      mision.classList.toggle('modal');
      mision.classList.toggle('fade');
      console.log('Mision works fine');
      if( document.getElementById('m').hasAttribute('data-target')) {
        document.getElementById('m').setAttribute("data-target", "#misionModal");
      }
    }
  }

  valores() {
    const valores = document.getElementById('valores');
    valores.classList.toggle('mo-mvv');
    valores.classList.toggle('valores');
    valores.classList.toggle('show-mVision');

    const contFluid = document.getElementById('contF');
    contFluid.classList.toggle("h");
  }

  ngOnInit() {
  
  }

}
