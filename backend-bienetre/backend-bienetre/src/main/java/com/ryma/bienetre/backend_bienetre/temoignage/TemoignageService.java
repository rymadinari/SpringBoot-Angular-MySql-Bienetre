package com.ryma.bienetre.backend_bienetre.temoignage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TemoignageService {

    @Autowired
    private TemoignageRepository temoignageRepository;

    public List<Temoignage> getAllTemoignages() {
        return temoignageRepository.findAll();
    }

    public Temoignage saveTemoignage(Temoignage temoignage) {
        return temoignageRepository.save(temoignage);
    }
}
