package com.enicarthage.example.controller;

import com.enicarthage.example.entity.Producteur;
import com.enicarthage.example.entity.User;
import com.enicarthage.example.entity.Vin;
import com.enicarthage.example.repository.ProducteurRepository;
import com.enicarthage.example.repository.RegistrationRepository;
import com.enicarthage.example.repository.VinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class VinController {

    @Autowired
    private VinRepository vinRepository;

    @Autowired
    RegistrationRepository registrationRepository;

    @Autowired
    ProducteurRepository producteurRepository;


    // get all employees
    @GetMapping("/wines")
    public List<Vin> getAllVins(){
        return vinRepository.findAll();
    }

    // create employee rest api
    @PostMapping("/wines")
    public Vin ajouterVin(@RequestBody Vin vin) throws Exception{


        if  (vin.getIdCompte()!= null )
        {
            Producteur test =producteurRepository.findByIdcompte(vin.getIdCompte()) ;
            if (test== null)
            {
                throw new Exception(("producteur n'existe pas "));
            }
        }

        return vinRepository.save(vin);

    }

    // get employee by id rest api
    @GetMapping("/wines/{id}")
    public ResponseEntity<Vin> getVinById(@PathVariable Long id) {
        Vin vin = vinRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(" vin n'existe pas ayant id :" + id));
        return ResponseEntity.ok(vin);
    }

    // update employee rest api

    @PutMapping("/wines/{id}")
    public ResponseEntity<Vin> updateVin(@PathVariable Long id, @RequestBody Vin vinDetails){
        Vin vin = vinRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("vin n'existe pas ayant id :" + id));


        vin.setAppelation(vinDetails.getAppelation());
        vin.setCouleur(vinDetails.getCouleur());
        vin.setCepage(vinDetails.getCepage());
        vin.setPrix(vinDetails.getPrix());
        vin.setContenance(vinDetails.getContenance());
        vin.setDegre_alcool(vinDetails.getDegre_alcool());
        vin.setDescription(vinDetails.getDescription());
        Vin updatedVin =vinRepository.save(vin);
        return ResponseEntity.ok(updatedVin);
    }


    // delete employee rest api
    @DeleteMapping("/wines/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteVin(@PathVariable Long id){
        Vin vin = vinRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vin n'existe pas ayant id :" + id));

        vinRepository.delete(vin);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


    @GetMapping("/vin/{coul}")
    public List<Vin> chercherParCouleur(@PathVariable String coul) throws Exception
    {
        return vinRepository.findByCouleur(coul);


    }
    @GetMapping("/compte/{idcompte}")
    public List<Vin> findByIdCompte(@PathVariable long idcompte) throws Exception
    {
        return vinRepository.findByIdCompte(idcompte);
    }


    @GetMapping("/vin/{coul}/{id}")
    public List<Vin> chercherParCouleur(@PathVariable String coul,@PathVariable Long id) throws Exception
    {
        return vinRepository.findByCouleurAndIdCompte(coul,id);


    }

    @GetMapping("/region/{region}")
    public List<Vin> getviParRegion(@PathVariable String region)
    {
        return vinRepository.findByRegion(region);
    }
    @GetMapping("/filtre/{couleur}/{region}/{prix}")
    public List<Vin> getVinFiltreTous(@PathVariable String couleur, @PathVariable String region, @PathVariable String prix)
    {
        ArrayList<Vin> listePrixRegion = new ArrayList<Vin>();
        List<Vin>  liste=getVinFiltreCouleurPrix(couleur,prix);
        for (Vin v : liste)
        {
            if (v.getRegion().equals(region))
            {
                listePrixRegion.add(v) ;
            }
        }
        return listePrixRegion;
    }

    @GetMapping("/filtre/{couleur}/{region}")
    public List<Vin> getVinFiltreCouleurRegion(@PathVariable String couleur, @PathVariable String region)
    {
        return vinRepository.findByCouleurAndRegion(couleur, region);
    }

    @GetMapping("/filtre1/{couleur}/{prix}")
    public List<Vin> getVinFiltreCouleurPrix(@PathVariable String couleur, @PathVariable String prix)
    {
        ArrayList<Vin> listePrixRegion = new ArrayList<Vin>();
        List<Vin>  liste=getVinFiltrePrix(prix);
        for (Vin v : liste)
        {
            if (v.getCouleur().equals(couleur))
            {
                listePrixRegion.add(v) ;
            }
        }
        return listePrixRegion;
    }

    @GetMapping("/filtre2/{region}/{prix}")
    public List<Vin> getVinFiltreRegionPrix(@PathVariable String region, @PathVariable String prix)
    {
        ArrayList<Vin> listePrixRegion = new ArrayList<Vin>();
        List<Vin>  liste=getVinFiltrePrix(prix);
        for (Vin v : liste)
        {
            if (v.getRegion().equals(region))
            {
                listePrixRegion.add(v) ;
            }
        }
        return listePrixRegion;
    }

    @GetMapping("/filtre/{prix}")
    public List<Vin> getVinFiltrePrix(@PathVariable String prix ) {
        ArrayList<Vin> listePrix = new ArrayList<Vin>();
        if (prix.equals("inférieur à 10"))
        {
            for (Vin v : vinRepository.findAll()) {
                if (v.getPrix()<10)
                {
                    listePrix.add(v);
                }
            }

        }
        if (prix.equals("entre 10 et 20"))
        {
            for (Vin v : vinRepository.findAll()) {
                if (v.getPrix()>=10 && v.getPrix()<=20)
                {
                    listePrix.add(v);
                }
            }

        }
        if (prix.equals("supérieur à 20"))
        {
            for (Vin v : vinRepository.findAll()) {
                if (v.getPrix()>20)
                {
                    listePrix.add(v);
                }
            }

        }
        return listePrix;
    }


}