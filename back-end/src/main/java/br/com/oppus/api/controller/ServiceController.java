package br.com.oppus.api.controller;

import br.com.oppus.api.model.entities.Address;
import br.com.oppus.api.model.entities.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/api/service")
public class ServiceController {

    @GetMapping
    public Service getService(){
        Date date = new Date();
        Address address = new Address(23914010, "uf","city", "discrict", "street");
        return new Service("Pedreiro", address, "10/10/2021", date);
    }

    @PostMapping("/Register")
    public Service registerService(Service service){
        return  service;
    }
}
