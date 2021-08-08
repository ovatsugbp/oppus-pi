package br.com.oppus.api.model.entities;


public class User {
    private final int id;
    private String name;
    private String password;
    private String email;
    private String photoURL;
    private final boolean isProfessional = false;

    public User(int id, String name) {
        this.id = id;
        this.name = name;
    }
}