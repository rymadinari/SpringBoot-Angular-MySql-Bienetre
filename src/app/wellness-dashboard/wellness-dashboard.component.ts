import { Component } from '@angular/core';


@Component({
  selector: 'app-wellness-dashboard',
  templateUrl: './wellness-dashboard.component.html',
  styleUrls: ['./wellness-dashboard.component.css']
})
export class WellnessDashboardComponent {
  
  currentSection: { 
    title: string; 
    content: string; 
    externalLink?: string;   
    imageUrl?: string;   
    showTimer?: boolean; 
    
    
    meditationSteps?: { title: string; description: string;  }[]; 
    steps?: { title: string; description: string;  imageUrl: string }[]; 

  } = { title: '', content: '' }; 


  timer: number = 0; 
  timerInterval: any; 
  isTimerRunning: boolean = false; 
  

  constructor() {}
  
  

  private sections: Record<string, { 
    title: string; 
    content: string; 
    externalLink?: string; 
    imageUrl?: string; 
    showTimer?: boolean;
    
    meditationSteps?: { title: string; description: string; }[]; 
    steps?: { title: string; description: string;  imageUrl: string }[]; 

  }> = {
    exercise: { 
      title: 'Faire de l\'exercice', 
      content: 'Découvrez des routines simples pour rester actif et en bonne santé.', 
      externalLink: 'https://www.coach-hunter.com/exercice', 
      imageUrl: 'https://previews.123rf.com/images/kittisaktaramas/kittisaktaramas1610/kittisaktaramas161000011/65940787-femme-s%C3%A9ance-d-entra%C3%AEnement-fitness-a%C3%A9robic-et-des-exercices-vector-illustration.jpg', 
      
    },
    focus: { 
      title: 'Travailler en profondeur', 
      content: 'Améliorez votre concentration avec des techniques éprouvées.',
      showTimer: true, 
    },
    meditation: { 
      title: 'Méditation',
      content: 'Suivez les étapes pour une séance de méditation.',
      imageUrl: 'https://cdn.paris.fr/qfapv4/2022/07/08/huge-6933ac5569051363ed71df50d3e98a35.jpg',
      meditationSteps: [
        {
          title: 'Asseyez-vous confortablement',
          description: 'Trouvez une position assise confortable, en veillant à ce que votre dos soit droit.'
          
        },
        {
          title: 'Fermez les yeux',
          description: 'Fermez doucement vos yeux et concentrez-vous sur votre respiration.'
          
        },
        {
          title: 'Détendez votre corps',
          description: 'Relâchez toutes les tensions dans votre corps, en commençant par les pieds et en remontant.'
        },
        {
          title: 'Laissez passer vos pensées',
          description: 'Permettez à vos pensées de venir et de partir sans vous y attacher.'
        },
        {
          title: 'Pratiquez la pleine conscience',
          description: 'Concentrez-vous sur le moment présent et soyez conscient de votre respiration.'
        }
      ] 
    },  
    
    
    yoga: {
      title: 'Séance de Yoga',
      content: 'Découvrez les étapes d\'une séance de yoga pour améliorer votre bien-être.',
      steps: [
        {
          title: 'Posture de la Montagne',
          description: 'Commencez par vous tenir droit, les pieds parallèles et les bras le long du corps.',
          imageUrl: 'https://asanas.fr/wp-content/uploads/2020/11/tadasana.jpg',
        },
        {
          title: 'Posture du Chien Tête En Bas',
          description: 'Pliez les genoux et élevez vos hanches en arrière, formant un V inversé.',
          
          imageUrl: 'https://asanas.fr/wp-content/uploads/2020/10/adho-mukha-svanasana.jpg',
        },
        {
          title: 'Posture du Guerrier I',
          description: 'Étendez une jambe en avant et l’autre en arrière, tout en fléchissant le genou avant.',
          
          imageUrl: 'https://asanas.fr/wp-content/uploads/2020/12/virabhadrasana.jpg',
        },
        {
          title: 'Posture du Guerrier II',
          description: 'Les bras sont parallèles au sol, les jambes écartées et le genou avant fléchi.',
          imageUrl: 'https://asanas.fr/wp-content/uploads/2020/12/virabhadrasana.jpg',
        },
        {
          title: 'Posture de l’Arbre',
          description: 'Tenez-vous sur une jambe, l’autre jambe contre la cuisse ou le mollet, les bras levés en position de prière.',
          imageUrl: 'https://asanas.fr/wp-content/uploads/2022/12/vrksasana.jpg',
        },
        {
          title: 'Posture de la Planche',
          description: 'En position allongée sur le ventre, soulevez le corps en ligne droite, soutenu par les mains et les pieds.',
          imageUrl: 'https://asanas.fr/wp-content/uploads/2021/02/kumbhakasana.jpg',
        },
        {
          title: 'Posture du Pont',
          description: 'Allongez-vous sur le dos, les pieds à plat au sol et les bras le long du corps. Soulevez les hanches en formant un pont.',
          imageUrl: 'https://asanas.fr/wp-content/uploads/2021/02/ardha-setu-bandhasana.jpg',
        },
        {
          title: 'Posture de la Savasana',
          description: 'Allongez-vous sur le dos, les bras le long du corps, les paumes tournées vers le ciel, pour une relaxation profonde.',
          imageUrl: 'https://asanas.fr/wp-content/uploads/2021/01/savasana.jpg',
        }
      ]
    },
   
      };

  navigateTo(section: keyof typeof this.sections): void {
    const selectedSection = this.sections[section];

    this.currentSection = { 
      title: selectedSection.title,
      content: selectedSection.content,
      meditationSteps: selectedSection.meditationSteps,
      steps: selectedSection.steps ,
      imageUrl: selectedSection.imageUrl,
      externalLink : selectedSection.externalLink
    };

    

    
  
    this.currentSection.showTimer = selectedSection.showTimer !== undefined ? selectedSection.showTimer : false;

    console.log('showTimer:', this.currentSection.showTimer); 

    if (this.currentSection?.showTimer) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  startTimer(): void {
    if (!this.isTimerRunning) {
      console.log('Démarrage du chronomètre'); 
      this.timerInterval = setInterval(() => {
        this.timer++; 
      }, 1000);
      this.isTimerRunning = true;
    }
  }
  
  stopTimer(): void {
    clearInterval(this.timerInterval); 
    this.isTimerRunning = false;
  }

  toggleTimer(): void {
    if (this.isTimerRunning) {
      this.stopTimer();
    } else {
      this.startTimer();
    }
  }


  resetTimer(): void {
    console.log('Réinitialisation du chronomètre'); 
    this.timer = 0; 
  }
  

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  
  }

