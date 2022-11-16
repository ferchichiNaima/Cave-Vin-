package com.enicarthage.example.repository;

import com.enicarthage.example.entity.User;
import com.enicarthage.example.entity.Vin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistrationRepository extends JpaRepository<User, Long> {
    public User findByEmailId(String email);
    public User findByEmailIdAndPassword(String email,String password);
    public User findById(long id);

}
