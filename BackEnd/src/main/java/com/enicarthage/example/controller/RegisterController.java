package com.enicarthage.example.controller;

import com.enicarthage.example.entity.Producteur;
import com.enicarthage.example.entity.User;
import com.enicarthage.example.entity.Vin;
import com.enicarthage.example.repository.ProducteurRepository;
import com.enicarthage.example.repository.RegistrationRepository;
import com.enicarthage.example.repository.VinRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class RegisterController {

    @Autowired
    RegistrationRepository registrationRepository;
    @PostMapping("/users")
    public User ajouterUser(@RequestBody User user) throws Exception {

        String tempEmailId=user.getEmailId();
        if (tempEmailId!= null && !"".equals(tempEmailId))
        {
            User userobj=registrationRepository.findByEmailId(tempEmailId) ;
            if (userobj!= null)
            {
                throw new Exception(("user with "+tempEmailId+"is allready exists"));
            }
        }
        User userobj=null;
        userobj=registrationRepository.save(user);
        return userobj;


    }


    @PostMapping("/login")
    public User loginUser (@RequestBody User user) throws Exception
    {
        String tempEmailId= user.getEmailId();
        String tempPass=user.getPassword();
        User userObj=null;
        if (tempEmailId!=null && tempPass!=null)
        {
            userObj=registrationRepository.findByEmailIdAndPassword(tempEmailId,tempPass);
        }
        if (userObj==null)
        {
            throw new Exception("error de donné");
        }
        return userObj;
    }

    @GetMapping("/UserById/{id}")
    public User getUserById(@PathVariable long id)
    {
        return registrationRepository.findById(id);
    }


}
