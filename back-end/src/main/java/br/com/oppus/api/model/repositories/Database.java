package br.com.oppus.api.model.repositories;

import br.com.oppus.api.model.entities.Professional;
import br.com.oppus.api.model.entities.User;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

public class Database {
    private List<Professional> professionals;
    private List<User> users;

    public Database() {
        this.professionals = new ArrayList<>();
        this.users = new ArrayList<>();
    }

    public void addNewProfessional(Professional newProfessional) {

        professionals.add(newProfessional);
    }

    public void addNewUser(User newUser){
        users.add(newUser);
    }

    public void  getProfessionals() {
         for(Professional professional: professionals){
             System.out.println(professional.toString());
         }
    }

    public void searchProfessionals(String search) {
        for (Professional p: professionals){
            if(search.toLowerCase(Locale.ROOT).contains(p.getNameActivity().toLowerCase(Locale.ROOT))){
                System.out.println(p);
            }
        }
    }

    public List<User> getUsers() {
        return users;
    }
}
