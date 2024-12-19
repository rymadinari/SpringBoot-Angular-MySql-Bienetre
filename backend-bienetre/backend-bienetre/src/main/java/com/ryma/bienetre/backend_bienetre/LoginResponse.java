package com.ryma.bienetre.backend_bienetre;

public class LoginResponse {
    private String message;
    private Utilisateur utilisateur;

    public LoginResponse(String message, Utilisateur utilisateur) {
        this.message = message;
        this.utilisateur = utilisateur;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }
}
