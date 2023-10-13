package com.example.oneShot.Data;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;

public class RandomChar {
    @Enumerated(EnumType.STRING)
    Enum Status;
    @Enumerated(EnumType.STRING)
    Enum Job;
    @Enumerated(EnumType.STRING)
    Enum Fears;

    public RandomChar() {
    }

    public RandomChar(Enum status, Enum job, Enum fears) {
        Status = status;
        Job = job;
        Fears = fears;
    }

    public Enum getStatus() {
        return Status;
    }

    public void setStatus(Enum status) {
        Status = status;
    }

    public Enum getJob() {
        return Job;
    }

    public void setJob(Enum job) {
        Job = job;
    }

    public Enum getFears() {
        return Fears;
    }

    public void setFears(Enum fears) {
        Fears = fears;
    }
}
