package br.com.oppus.api.model.entities;

public class Address {
    private Integer CEP;
    private String UF;
    private String city;
    private String district;
    private String street;

    public Address(Integer CEP, String UF, String city, String district, String street){
        this.CEP = CEP;
        this.UF = UF;
        this.city = city;
        this.district = district;
        this.street = street;
    }


}
