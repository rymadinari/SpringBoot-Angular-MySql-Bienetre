package com.ryma.bienetre.backend_bienetre.MoodJournal;

import com.ryma.bienetre.backend_bienetre.Utilisateur;
import com.ryma.bienetre.backend_bienetre.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.List;



@RestController
@RequestMapping("/api/mood-entry")
@CrossOrigin(origins = "http://localhost:4200")
public class MoodEntryController {

    @Autowired //injection de dependance
    private MoodEntryRepository moodEntryRepository;

    @Autowired
    private UtilisateurRepository userRepository;

    @PostMapping("/save")
    public ResponseEntity<?> saveMoodEntry(@RequestBody MoodEntry moodEntry) {
        try {

            if (moodEntry.getUser() == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .body("L'utilisateur ne peut pas être null.");
            }

            Long userId = moodEntry.getUser().getId();
            Utilisateur user = userRepository.findById(userId)
                    .orElseThrow(() -> new Exception("Utilisateur non trouvé"));

            // Associer l'utilisateur à l'entrée d'humeur
            moodEntry.setUser(user);

            MoodEntry savedMoodEntry = moodEntryRepository.save(moodEntry);

            return ResponseEntity.ok(savedMoodEntry);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erreur interne lors de l'enregistrement : " + e.getMessage());
        }
    }


    @GetMapping("/{userId}")
    public ResponseEntity<List<MoodEntry>> getMoodsByUser(@PathVariable Long userId) {
        try {
            Utilisateur user = userRepository.findById(userId)
                    .orElseThrow(() -> new Exception("Utilisateur non trouvé"));
            List<MoodEntry> moods = moodEntryRepository.findByUser(user);
            return ResponseEntity.ok(moods);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(null);
        }
    }



    @DeleteMapping("/{id}")
    public void deleteMood(@PathVariable Long id) {
        moodEntryRepository.deleteById(id);
    }


}
