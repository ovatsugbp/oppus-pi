package br.com.oppus.api.controller;

import br.com.oppus.api.model.entities.Address;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/address")
public class AddressController {

    @GetMapping
    public Address getAddress(){
        return new Address(23914010,"RJ", "Angra dos Reis", "Verolme","Doce Bruma");
    }

    @PostMapping("/register")
    public Address registerAddress(Address address){
        return address;
    }
}
