package com.enicarthage.example.repository;

import com.enicarthage.example.entity.User;
import com.enicarthage.example.entity.Vin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VinRepository extends JpaRepository<Vin, Long>{
    public List<Vin> findByCouleur(String couleur);
    public List<Vin> findByIdCompte(long id);
    public List<Vin> findByCouleurAndIdCompte(String couleur,Long id);
    public List<Vin> findByRegion(String region);
    public List<Vin> findByPrix(double prix);
    public List<Vin> findByCouleurAndRegion(String couleur, String region);
    public List<Vin> findByCouleurAndPrix(String couleur, double prix);
    public List<Vin> findByRegionAndPrix(String region, double prix);
    public List<Vin> findByCouleurAndRegionAndPrix(String couleur, String region, double prix);

}
