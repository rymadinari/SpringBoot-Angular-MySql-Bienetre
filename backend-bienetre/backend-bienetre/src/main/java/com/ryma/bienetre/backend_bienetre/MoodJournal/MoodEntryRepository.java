package com.ryma.bienetre.backend_bienetre.MoodJournal;
import com.ryma.bienetre.backend_bienetre.Utilisateur;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface MoodEntryRepository extends JpaRepository<MoodEntry, Long> {
    List<MoodEntry> findByUser(Utilisateur user);  // Recherche basée sur l'utilisateur

    List<MoodEntry> findByDateBetween(LocalDate startDate, LocalDate endDate);
}

