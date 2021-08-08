package br.com.oppus.api.model.entities;

import java.util.Date;
import java.util.Objects;

public class Service {
    private String serviceActivity;
    private Address address;
    private String serviceDay;
    private Date serviceHour;

    public Service(String serviceActivity, Address address, String serviceDay, Date serviceHour){
        this.serviceActivity = serviceActivity;
        this.address = address;
        this.serviceDay = serviceDay;
        this.serviceHour = serviceHour;
    }

    public Service(String serviceActivity, String serviceDay){
        this.serviceActivity = serviceActivity;
        this.serviceDay = serviceDay;
    }

    @Override
    public boolean equals(Object objeto) {
        if (this == objeto){
            return true;
        } else if(objeto == null || getClass() == objeto.getClass()){
            return false;
        }
        Service objetoService = (Service) objeto;
        return Objects.equals(serviceActivity, objetoService.serviceActivity) &&
                Objects.equals(serviceDay, objetoService.serviceDay);

    }

    public String getServiceActivity() {
        return serviceActivity;
    }

    public Address getAddress() {
        return address;
    }

    public String getServiceDay() {
        return serviceDay;
    }

    public Date getServiceHour() {
        return serviceHour;
    }

    @Override
    public String toString() {
        return "Buscando " + serviceActivity  +
                " disponível em " + serviceDay + "...";
    }
}
