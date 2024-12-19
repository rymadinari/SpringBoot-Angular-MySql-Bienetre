package com.ryma.bienetre.backend_bienetre.temoignage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TemoignageRepository extends JpaRepository<Temoignage, Long> {
}
