package br.com.oppus.api.controller;

import br.com.oppus.api.model.entities.Professional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/professional")
public class ProfessionalController {

    @GetMapping
    public Professional getProfessional(){
        return new Professional(1,"José Pereira", "José Júnior");
    }

    @PostMapping("/register")
public Professional registerProfessional(Professional professional){
        return professional;
    }
}