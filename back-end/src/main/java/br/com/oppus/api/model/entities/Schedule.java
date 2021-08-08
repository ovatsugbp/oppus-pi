package br.com.oppus.api.model.entities;

import java.util.Date;

public class Schedule {
    private final int id;
    private String availableDay;
    private Date startHour;
    private Date finishHour;
    Professional professional;
    Address address;

    public Schedule(int id, String availableDay) {
        this.id = id;
        this.availableDay = availableDay;
    }

    @Override
    public String toString() {
        return availableDay;
    }

    public String getAvailableDay() {
        return availableDay;
    }
}

