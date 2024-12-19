export interface MoodEntry {
    id: number;
    date: string;
    mood: string;
    emotionalReactions: number;
    stressLevel: number;
    socialInteractions: number;
    foodBalance: string;
    sleepQuality: number;
    exerciseDuration: number;
    negativeThoughts: string;
    cognitiveFocus: string;
    user: { 
        id: number; 
        name?: string; 
        email?: string; 
    };

}
