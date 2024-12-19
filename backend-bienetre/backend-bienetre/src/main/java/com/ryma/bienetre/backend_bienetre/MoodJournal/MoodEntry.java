package com.ryma.bienetre.backend_bienetre.MoodJournal;

import com.ryma.bienetre.backend_bienetre.Utilisateur;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class MoodEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate date;
    private String mood;
    private int emotionalReactions;
    private int stressLevel;
    private int socialInteractions;
    private String foodBalance;
    private int sleepQuality;
    private int exerciseDuration;
    private String negativeThoughts;
    private String cognitiveFocus;



    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Utilisateur user;


    public Utilisateur getUser() {
        return user;
    }

    public void setUser(Utilisateur user) {
        this.user = user;
    }




    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getMood() {
        return mood;
    }

    public void setMood(String mood) {
        this.mood = mood;
    }

    public int getEmotionalReactions() {
        return emotionalReactions;
    }

    public void setEmotionalReactions(int emotionalReactions) {
        this.emotionalReactions = emotionalReactions;
    }

    public int getStressLevel() {
        return stressLevel;
    }

    public void setStressLevel(int stressLevel) {
        this.stressLevel = stressLevel;
    }

    public int getSocialInteractions() {
        return socialInteractions;
    }

    public void setSocialInteractions(int socialInteractions) {
        this.socialInteractions = socialInteractions;
    }

    public String getFoodBalance() {
        return foodBalance;
    }

    public void setFoodBalance(String foodBalance) {
        this.foodBalance = foodBalance;
    }

    public int getSleepQuality() {
        return sleepQuality;
    }

    public void setSleepQuality(int sleepQuality) {
        this.sleepQuality = sleepQuality;
    }

    public int getExerciseDuration() {
        return exerciseDuration;
    }

    public void setExerciseDuration(int exerciseDuration) {
        this.exerciseDuration = exerciseDuration;
    }

    public String getNegativeThoughts() {
        return negativeThoughts;
    }

    public void setNegativeThoughts(String negativeThoughts) {
        this.negativeThoughts = negativeThoughts;
    }

    public String getCognitiveFocus() {
        return cognitiveFocus;
    }

    public void setCognitiveFocus(String cognitiveFocus) {
        this.cognitiveFocus = cognitiveFocus;
    }
}
