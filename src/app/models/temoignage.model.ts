export interface Temoignage {
  text: string;
  date: string;
  genre: 'male' | 'female';
  username: string; // Remplacer userId par username
  avatar?: string; // Avatar basé sur le genre
}
