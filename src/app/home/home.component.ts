import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(45deg)' })),
      transition('rotated => default', [
        animate('.5s')
      ]),
      transition('default => rotated', [
        animate('.5s')
      ]),
    ]),
    trigger('stateRotation', [
      state('open', style({ transform: 'rotate(0)' })),
      state('close', style({ transform: 'rotate(45deg)' })),
      transition('close => open', [
        animate('.5s')
      ]),
      transition('open => close', [
        animate('.5s')
      ]),
    ]),
    trigger('stRot', [
      state('defaults', style({ transform: 'rotate(0)' })),
      state('rotat', style({ transform: 'rotate(45deg)' })),
      transition('rotat => defaults', [
        animate('.5s')
      ]),
      transition('defaults => rotat', [
        animate('.5s')
      ]),
    ]),
  ]
  
})
export class HomeComponent implements OnInit {
 
  years: any;
  m: any;
  days: any;
  hours: any;
  seconds: any;
  OpDate: any;
  map: any;
  aMonths: any



  constructor( private translate: TranslateService) {
    
    translate.setDefaultLang('es');
    
    setInterval(() => {
      this.run(), 1000
    })

  }

  switchLanguage(language:string) {
    this.translate.use(language);
  }

  public innerWidth: any;
  

  run() {
    const time:any = new Date();
  
    const inaugurationDate = new Date('May 10, 2011 23:59:59');
    const OpDate = new Date('May 11, 2011 00:00:00').getTime();

    const exp = time - OpDate;

    const yearOne = 2011;
    const yearTwo:any = time.getFullYear().toString();
    this.years = yearTwo - yearOne;

    // Para Safari compatibility
    //Months
     this.m = time.getMonth() - Math.floor(inaugurationDate.getMonth());
    
    // Days
    const d: number = inaugurationDate.getDay();
      
    const Months:any = 12;
    this.aMonths = Months - Math.floor((exp % (1000 * 60 * 60 * 12 )) / this.days);
    
    
    this.days = Math.floor((exp % (1000 * 60 * 60 * 365)) / (1000 * 60 * 60 * 24));   
    
    this.hours = Math.floor((exp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    this.seconds = time.getSeconds().toString();
  }


  countDown: any;
  state: string = 'default';
  sta: string = 'open';
  t: string = 'defaults';

  rotate() {
      this.state = (this.state === 'default' ? 'rotated' : 'default');
  }

  r() {
    this.sta = (this.sta === 'open' ? 'close': 'open'); 
  }

  o() {
    this.t = (this.t === 'defaults' ? 'rotat': 'defaults'); 
  }
  servicios: any [] = [
    {
      'id': 1,
      'title': 'Gerencia de Proyectos',
      'url' : '../../assets/img-servicios/Escuela%20Espejo%20del%20Rosario%20Azua.webp'
    },
    {
      'id': 2,
      'title': 'Diseño Analisis Estructural',
      'url' : '../../assets/img-servicios/puente%20Cacique(1).webp'    
    },
    {
      'id': 3,
      'title': 'Diseño Arquitectonico',
      'url' : '../../assets/img-servicios/Bellorizonte.webp'
    },
    {
      'id': 4,
      'title': 'Direccion Tecnica de Obras',
      'url' : '../../assets/img-servicios/puenteDeLa17.webp'
    },
    {
      'id': 5,
      'title': 'Ejecusion de Obras',
      'url' : '../../assets/img-servicios/Fachada%20yellow%20sin%20fecha.webp'
    },
    {
      'id': 6,
      'title': 'Estudio Vulnerabilidad y Retrofit',
      'url' : '../../assets/img-servicios/26071335.webp'
    }
  ] 

    // Time Machine



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
      setTimeout(() => { const l = document.getElementById('logo'); l.classList.add('fadeIn') }, 0);
      

      this.innerWidth = window.innerWidth;
      console.log(this.innerWidth);

      if (this.innerWidth > 600) {
        const open = document.getElementById('soYellow');
        open.setAttribute('aria-expanded', 'true');
        open.classList.remove('collapsed');
        console.log(open);
      }

     /* if(this.innerWidth > 500) {
        const img = document.getElementById('map');
        const att = document.createAttribute('usemap');
        att.value = "#image-map";
        img.setAttributeNode(att);         
      } else {
        const img = document.getElementById('map');
        const att = document.createAttribute('usemap');
        att.value = "#image-map-dev";
        img.setAttributeNode(att); 
      } */

     /* if(this.innerWidth > 900) {
        const open = document.getElementById("proyectos");
        open.classList.add('show');
        if (open.hasAttribute('aria-expanded')) {
          open.setAttribute('aria-expanded', 'true');
        }
      } */

        //Set each section's height equals to the window height
    // $('section').height($(window).height());
    /*set the class 'active' to the first element 
     this will serve as our indicator*/
    $('section').first().addClass('active');

    /* handle the mousewheel event together with 
     DOMMouseScroll to work on cross browser */
    $(document).on('mousewheel DOMMouseScroll', function (e) {
        e.preventDefault();//prevent the default mousewheel scrolling
        var active = $('section.active');
        //get the delta to determine the mousewheel scrol UP and DOWN
        var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;
        
        //if the delta value is negative, the user is scrolling down
        if (delta < 0) {
            //mousewheel down handler
            const next = active.next();
            //check if the next section exist and animate the anchoring
            if (next.length) {
               /*setTimeout is here to prevent the scrolling animation
                to jump to the topmost or bottom when 
                the user scrolled very fast.*/
                var timer = setTimeout(function () {
                    /* animate the scrollTop by passing 
                    the elements offset top value */
                    $('body, html').animate({
                        scrollTop: next.offset().top
                    }, 'slow');
                    
                    // move the indicator 'active' class
                    next.addClass('active')
                        .siblings().removeClass('active');
                    
                    clearTimeout(timer);
                }, 500);
            }

        } else {
            //mousewheel up handler
            /*similar logic to the mousewheel down handler 
            except that we are animate the anchoring 
            to the previous sibling element*/
            const prev = active.prev();

            if (prev.length) {
                var timer = setTimeout(function () {
                    $('body, html').animate({
                        scrollTop: prev.offset().top
                    }, 'slow');

                    prev.addClass('active')
                        .siblings().removeClass('active');
                    
                    clearTimeout(timer);
                }, 800);
            }

        }
    });
  
  }
}
