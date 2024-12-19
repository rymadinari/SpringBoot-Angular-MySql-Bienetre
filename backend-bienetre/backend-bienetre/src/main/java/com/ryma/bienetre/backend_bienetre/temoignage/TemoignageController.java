package com.ryma.bienetre.backend_bienetre.temoignage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/temoignage")
public class TemoignageController {

    @Autowired
    private TemoignageService temoignageService;

    @GetMapping
    public List<Temoignage> getAllTemoignages() {
        return temoignageService.getAllTemoignages();
    }

    @PostMapping
    public ResponseEntity<Temoignage> saveTemoignage(@RequestBody Temoignage temoignage) {
        Temoignage savedTemoignage = temoignageService.saveTemoignage(temoignage);
        return ResponseEntity.ok(savedTemoignage);
    }
}
