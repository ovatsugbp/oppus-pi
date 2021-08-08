package br.com.oppus.api.model.entities;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import  java.lang.String;

public class Professional{

    private final int id;
    private String name;
    private String password;
    private String email;
    private String photoURL;
    private final boolean isProfessional = true;
    private Integer phone;
    private String bio;
    private double score;
    private String socialMedia;
    private double priceActivity;
    private String nameActivity;

    public List<Schedule> professionalSchedule = new ArrayList<>();

    public void addSchedule(Schedule sch){
        professionalSchedule.add(sch);
        sch.professional = this;
    }

    public void deleteSchedule(){
        Stream<Schedule> stream = professionalSchedule.stream().filter((schedule) -> !schedule.getAvailableDay().equals(""));
    }


    public Professional(int id, String name, String nameActivity) {
        this.id =id;
        this.name = name;
        this.nameActivity = nameActivity;
    }

    public String getNameActivity() {
        return nameActivity;
    }

    public String toString(){
        return "ID: " + id + "\nProfissional: " + name
                + "\nProfissão: " + nameActivity + "\nDisponível em: "
                + professionalSchedule.stream().map(Object::toString).collect(Collectors.joining(", ")) + "\n";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Professional)) return false;
        Professional that = (Professional) o;
        return name.equals(that.name) && nameActivity.equals(that.nameActivity) && Objects.equals(professionalSchedule, that.professionalSchedule);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, nameActivity, professionalSchedule);
    }
}