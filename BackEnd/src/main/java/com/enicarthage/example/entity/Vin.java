package com.enicarthage.example.entity;

import javax.persistence.*;

@Entity
@Table(name = "Vins")
public class Vin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "appelation" )
    private String appelation;

    @Column(name = "couleur")
    private String couleur;
    private String region;

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getCepage() {
        return cepage;
    }

    public void setCepage(String cepage) {
        this.cepage = cepage;
    }

    public double getDegre_alcool() {
        return degre_alcool;
    }

    public void setDegre_alcool(double degre_alcool) {
        this.degre_alcool = degre_alcool;
    }

    public double getContenance() {
        return contenance;
    }

    public void setContenance(double contenance) {
        this.contenance = contenance;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Column(name = "cepage")

    private String cepage;

    @Column(name = "degre_alcool")
    private double degre_alcool;

    @Column(name = "contenance")
    private double contenance;

    @Column(name = "prix")
    private double prix;

    @Column(name = "description")
    private String description;
    private Long idCompte;

    public Long getIdCompte() {
        return idCompte;
    }

    public void setIdCompte(Long idCompte) {
        this.idCompte = idCompte;
    }

    public Vin() {

    }

    public Vin(String nom, String appelation, String couleur,String cepage,double degre_alcool,double contenance,double prix,String description, Long idCompte) {
        super();

        this.appelation = appelation;
        this.couleur = couleur;
        this.cepage=cepage;
        this.contenance=contenance;
        this.degre_alcool=degre_alcool;
        this.prix=prix;
        this.description=description;
        this.idCompte=idCompte;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAppelation() {
        return appelation;
    }

    public void setAppelation(String appelation) {
        this.appelation = appelation;
    }

    public String getCouleur() {
        return couleur;
    }

    public void setCouleur(String couleur) {
        this.couleur = couleur;
    }
}