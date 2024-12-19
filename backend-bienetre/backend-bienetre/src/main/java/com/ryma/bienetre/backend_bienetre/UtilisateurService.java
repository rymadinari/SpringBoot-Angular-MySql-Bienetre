package com.ryma.bienetre.backend_bienetre;

import com.ryma.bienetre.backend_bienetre.Utilisateur;
import com.ryma.bienetre.backend_bienetre.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepository userRepository;

    public Optional<Utilisateur> rechercherParEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public void enregistrerUtilisateur(Utilisateur utilisateur) {
        userRepository.save(utilisateur);
    }
}

