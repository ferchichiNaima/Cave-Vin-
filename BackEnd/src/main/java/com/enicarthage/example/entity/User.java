package com.enicarthage.example.entity;

import javax.persistence.*;

@Entity
@Table
public class User {
    @Id
    @GeneratedValue
    private long id;
    private String emailId;
    private String userName;
    private String password;

    public User(){}
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }




}
