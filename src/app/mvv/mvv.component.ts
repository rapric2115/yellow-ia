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
      vision.classList.toggle('noVisible');
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
    const vision = document.getElementById('vision');
    vision.classList.remove('show-mVision');
    vision.classList.remove('vision');
    vision.classList.add('noVisible');

    const calidad = document.getElementById('calidad');
    calidad.classList.remove('calidad');
    calidad.classList.add('noVisible');

    const se = document.getElementById('seguridad');
    se.classList.remove('seguridad');
    se.classList.add('noVisible');

    const contFluid = document.getElementById('contF');
    contFluid.classList.toggle("h"); 

    const mision = document.getElementById('mision');
    mision.classList.toggle('noVisible');
    mision.classList.toggle('mision');
    mision.classList.toggle('show-mision');

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
    if(this.innerwidth > 500) {
      const valores = document.getElementById('valores');
    valores.classList.toggle('noVisible');
    valores.classList.toggle('valores');

    const contFluid = document.getElementById('contF');
    contFluid.classList.toggle("h");
    if(document.getElementById('va').hasAttribute('data-toggle')) {
      document.getElementById('va').setAttribute('data-toggle', "");
    }
    }  else {
      const mision = document.getElementById('valores');
      mision.classList.toggle('modal');
      mision.classList.toggle('fade');
      if( document.getElementById('va').hasAttribute('data-target')) {
        document.getElementById('va').setAttribute("data-target", "#valoresModal");
      }
    }
}

  motivacion() {
  if(this.innerwidth > 500) {
   const seguridad = document.getElementById('seguridad');
   seguridad.classList.remove('seguridad');
   seguridad.classList.add('noVisible');

  const contFluid = document.getElementById('contF');
  contFluid.classList.toggle("h");

  const valores = document.getElementById('motivacion');
  valores.classList.toggle('noVisible');
  valores.classList.toggle('motivacion');

  if(document.getElementById('moti').hasAttribute('data-toggle')) {
    document.getElementById('moti').setAttribute('data-toggle', "");
  }
  }  else {
    const mision = document.getElementById('motivacion');
    mision.classList.toggle('modal');
    mision.classList.toggle('fade');
    if( document.getElementById('moti').hasAttribute('data-target')) {
      document.getElementById('moti').setAttribute("data-target", "#motivacionModal");
    }
  }
}

calidad() {
  if(this.innerwidth > 500) {

    const vision = document.getElementById('vision');
    vision.classList.remove('vision');
    vision.classList.remove('show-mVision');
    vision.classList.add('noVisible');

  const contFluid = document.getElementById('contF');
  contFluid.classList.toggle("h");

  const valores = document.getElementById('calidad');
  valores.classList.toggle('noVisible');
  valores.classList.toggle('calidad');

  if(document.getElementById('ca').hasAttribute('data-toggle')) {
    document.getElementById('ca').setAttribute('data-toggle', "");
  }
  }  else {
    const mision = document.getElementById('calidad');
    mision.classList.toggle('modal');
    mision.classList.toggle('fade');
    if( document.getElementById('ca').hasAttribute('data-target')) {
      document.getElementById('ca').setAttribute("data-target", "#calidadModal");
    }
  }
}

seguridad() {
  if(this.innerwidth > 500) {
    const valores = document.getElementById('seguridad');
  valores.classList.toggle('noVisible');
  valores.classList.toggle('seguridad');

  const contFluid = document.getElementById('contF');
  contFluid.classList.toggle("h");
  if(document.getElementById('se').hasAttribute('data-toggle')) {
    document.getElementById('se').setAttribute('data-toggle', "");
  }
  }  else {
    const mision = document.getElementById('seguridad');
    mision.classList.toggle('modal');
    mision.classList.toggle('fade');
    if( document.getElementById('se').hasAttribute('data-target')) {
      document.getElementById('se').setAttribute("data-target", "#seguridadModal");
    }
  }
}


  ngOnInit() {
  
  }

}
