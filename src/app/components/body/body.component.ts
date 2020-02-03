import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
  })
 export class BodyComponent {
   mostrar = true;
    frase: any = {
      mensaje: 'Recolectan el gas vespeno y el mineral. También invocan una grieta espacio-tiempo para las estructuras, y con la ventaja de que además pueden dejarlas sin atención, miestras estas mismas, se auto-construyen. Se construyen en el Nexo.',
      autor: 'Zonda'
    };

    mostrar2 = true;
    frase2: any = {
      mensaje: ' Unidad mecánica blindada que puede atacar objetivos terrestres. Causa una gran cantidad de daño a unidades blindadas enemigas como Colosos, Ultraliscos y Thors. Sus Escudos Reforzados reducen considerablemente la efectividad de los ataques más potentes, haciéndolos muy útiles contra unidades que causan mucho daño.',
      autor: 'Inmortal'
    };

    mostrar3 = true;
    frase3: any = {
      mensaje: 'Masiva unidad blindada que puede atacar unidades terrestres. Capaz de atacar desde grandes distancias. Devastador contra grupos de infantería. La facultad de Trepar Riscos le permite cruzar elevaciones de terreno de igual modo que los Yum-Kimiles. Su tamaño es tal que las unidades y estructuras antiáereas del enemigo pueden atacarlo.',
      autor: 'Coloso'
    };

    mostrar4 = true;
    frase4: any = {
      mensaje: 'Nave ligera que puede atacar unidades aéreas. Unidad muy veloz, perfecta para explorar o cazar unidades aéreas que se desplacen lentamente y no puedan contraatacar; como Amos Supremos o Banshees. Bono de daño contra unidades ligeras, como los Mutaliscos. Tiene la capacidad de levantar unidades enemigas con su Rayo Gravitatorio (siempre y cuando su tamaño no sea masivo)',
      autor: 'Fénix'
    };








    personajes: string[] = ['Zonda', 'Fanático', 'Inmortal','Alto Templario','Arconte','Templario Oscuro','Coloso','Observador','Lanzadera','Explorador','Corsario',];
 }
