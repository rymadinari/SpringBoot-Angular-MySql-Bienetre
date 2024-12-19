import { Component } from '@angular/core';

@Component({
  selector: 'app-relaxing-sounds',
  templateUrl: './relaxing-sounds.component.html',
  styleUrls: ['./relaxing-sounds.component.css']
})
export class RelaxingSoundsComponent {
  sounds = [
    { name: 'Serenity - by David Renda', url: 'https://www.fesliyanstudios.com/download-link.php?src=i&id=897' },
    { name: 'Time Alone - by David Renda', url: 'https://www.fesliyanstudios.com/download-link.php?src=i&id=1434' },
    { name: 'Deep Meditation  - by David Fesliyan', url: 'https://www.fesliyanstudios.com/download-link.php?src=i&id=310' },
    {name:'relaxing song...Just listen and relax ...',url: 'https://www.fesliyanstudios.com/download-link.php?src=i&id=331'}
  ];
}