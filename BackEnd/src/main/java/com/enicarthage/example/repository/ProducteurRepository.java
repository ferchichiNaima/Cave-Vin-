package com.enicarthage.example.repository;

import com.enicarthage.example.entity.Producteur;
import com.enicarthage.example.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface ProducteurRepository extends JpaRepository<Producteur, Long> {
    public Producteur findByIdcompte(Long idcompte);
    public List<Producteur> findByRegionviticole(String Regionviticole);

}