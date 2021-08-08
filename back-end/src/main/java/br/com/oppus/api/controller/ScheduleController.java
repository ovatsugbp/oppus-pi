package br.com.oppus.api.controller;

import br.com.oppus.api.model.entities.Schedule;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/schedule")
public class ScheduleController {

    @GetMapping
    public Schedule getSchedule(){
        return new Schedule(1, "11/08/2021");
    }

    @PostMapping("/register")
    public Schedule registerSchedule( Schedule schedule){
        return schedule;
    }
}
