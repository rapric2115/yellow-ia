import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-yellow',
  templateUrl: './team-yellow.component.html',
  styleUrls: ['./team-yellow.component.css']
})
export class TeamYellowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  team:any[] = [
    {
      'id': 1,
      'name': 'Bienvenido',
      'lastName': 'Hernandez',
      'imgUrl': 'assets/equipo-Yellow/bienvenido-hernandez.webp',
      'position': 'Gerente Ingenieria'
    },
    {
      'id': 2,
      'name': 'Esteban',
      'lastName': 'Hernandez',
      'imgUrl': 'assets/equipo-Yellow/esteban-hernandez.webp',
      'position': 'Director General'
    },
    {
      'id': 3,
      'name': 'Victor',
      'lastName': 'Hernandez',
      'imgUrl': 'assets/equipo-Yellow/victor-hernandez.webp',
      'position': 'Gerente de Proyectos'
    },
    {
      'id': 4,
      'name': 'Sandy',
      'lastName': 'Cabrera',
      'imgUrl': 'assets/equipo-Yellow/sandy-cabrera.webp',
      'position': 'Enc. Contabilidad'
    },
    {
      'id': 5,
      'name': 'Michelle',
      'lastName': 'Sepulveda',
      'imgUrl': 'assets/equipo-Yellow/michelle-sepulveda.webp',
      'position': 'Enc. RR.HH.'
    },
    {
      'id': 6,
      'name': 'Pamela',
      'lastName': 'Paulino',
      'imgUrl': 'assets/equipo-Yellow/pamela-paulino.webp',
      'position' : 'Enc. Diseño e Imagen Corporativa'
    },
    {
      'id': 7,
      'name': 'Rafael',
      'lastName': 'Hernandez',
      'imgUrl': 'assets/equipo-Yellow/rafael-hernandez.webp',
      'position': 'Arquitecto / Enc. Diseño'
    },
    {
      'id': 8,
      'name': 'Eduardo',
      'lastName': 'Fernandez',
      'imgUrl': 'assets/equipo-Yellow/eduardo-fernandez.webp',
      'position': 'Ing. Civil Estructuralista'
    },
    {
      'id': 9,
      'name': 'Juan Carlos',
      'lastName': 'Santos',
      'imgUrl': 'assets/equipo-Yellow/juan-santos.webp',
      'position': 'Enc. Ventas Inmobiliarias'
    },
    {
      'id': 10,
      'name': 'Emil',
      'lastName': 'Madera',
      'imgUrl': 'assets/equipo-Yellow/emil-madera.jpg',
      'position': 'Ing. Civil Estructuralista'
    },
    {
      'id': 11,
      'name': 'Belgica',
      'lastName': 'Beato',
      'imgUrl': 'assets/equipo-Yellow/belgica-beato.jpg',
      'position': 'Diseñadora'
    },
    {
      'id': 12,
      'name': 'Clistenes',
      'lastName': 'Duran',
      'imgUrl': 'assets/equipo-Yellow/clistenes-duran.jpg',
      'position': 'Dibujante'
    },
    {
      'id': 13,
      'name': 'Juan Carlos',
      'lastName': 'Alvarado',
      'imgUrl': 'assets/equipo-Yellow/juan-alvarado.jpg',
      'position': 'Ing. Civil / Presupuesto'
    },
    {
      'id': 14,
      'name': 'Marleny',
      'lastName': 'Sosa',
      'imgUrl': 'assets/equipo-Yellow/marleny-sosa.jpg',
      'position': 'Secretaria Administrativa'
    },
    {
      'id': 15,
      'name': 'Marian',
      'lastName': 'Diaz',
      'imgUrl': 'assets/equipo-Yellow/marian-diaz.jpg',
      'position': 'Arquitecta'
    },
    {
      'id': 16,
      'name': 'Leandro',
      'lastName': 'Coronado',
      'imgUrl': 'assets/equipo-Yellow/leandro-coronado.jpg',
      'position': 'Dibujante'
    },
    {
      'id': 17,
      'name': 'Nestor',
      'lastName': 'Cuevas',
      'imgUrl': 'assets/equipo-Yellow/nestor-cuevas.jpg',
      'position': 'Abogado'
    },
    {
      'id': 18,
      'name': 'Monica',
      'lastName': 'Soto',
      'imgUrl': 'assets/equipo-Yellow/monica-soto.jpg',
      'position': 'Enc. Presupuesto'
    },
    {
      'id': 19,
      'name': 'Raphael',
      'lastName': 'Richardson',
      'imgUrl': 'assets/equipo-Yellow/raphael-richardson.jpg',
      'position': 'Enc. Administracion Digital'
    },
    {
      'id': 20,
      'name': 'Pedro',
      'lastName': 'Hernandez',
      'imgUrl': 'assets/equipo-Yellow/pedro-hernandez.jpg',
      'position': 'Ingeniero Civil'
    },
    {
      'id': 21,
      'name': 'Guillermina',
      'lastName': 'Padailla',
      'imgUrl': 'assets/equipo-Yellow/guillermina-padilla.jpg',
      'position': 'Conserje'
    },
    {
      'id': 22,
      'name': 'Chofer',
      'lastName': 'Yellow',
      'imgUrl': 'assets/equipo-Yellow/chofer.jpg',
      'position': 'Chofer'
    },
    {
      'id': 23,
      'name': 'Ingeniero',
      'lastName': 'Zurza',
      'imgUrl': 'assets/equipo-Yellow/ingZurza.jpg',
      'position': 'Ingeniero'
    },
    {
      'id': 24,
      'name': 'Yellow',
      'lastName': 'Ingenieros & Arquitectos',
      'imgUrl': '../assets/yellow-logo/Logo_Yellow%20ingenieros%20y%20arquitectos_bg-transparent-white.png'
    }
  ]
}
