package br.com.oppus.api.controller;

import br.com.oppus.api.model.entities.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @GetMapping
    public User getUser(){
        return new User(1,"Name User");
    }

    @PostMapping("/register")
    public User registerUser(User user){
        return user;
    }
}
