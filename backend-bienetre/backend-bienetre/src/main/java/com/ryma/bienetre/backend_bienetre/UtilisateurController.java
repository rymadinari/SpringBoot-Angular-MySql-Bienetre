package com.ryma.bienetre.backend_bienetre;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/auth")
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @Autowired
    private UtilisateurRepository userRepository;



    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Utilisateur utilisateur) {
        if (utilisateurService.rechercherParEmail(utilisateur.getEmail()).isPresent()) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body(new MessageResponse("Email déjà pris."));
        }
        utilisateurService.enregistrerUtilisateur(utilisateur);
        return ResponseEntity.ok(new MessageResponse("Utilisateur enregistré avec succès."));
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Optional<Utilisateur> utilisateur = utilisateurService.rechercherParEmail(loginRequest.getEmail());
        if (utilisateur.isPresent() && loginRequest.getPassword().equals(utilisateur.get().getPassword())) {
            return ResponseEntity.ok(new LoginResponse("Connexion réussie", utilisateur.get()));
        } else {
            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body(new ErrorResponse("Email ou mot de passe incorrect."));
        }
    }



    // Classe interne pour les réponses JSON
    public static class MessageResponse {
        private String message;

        public MessageResponse(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
}
