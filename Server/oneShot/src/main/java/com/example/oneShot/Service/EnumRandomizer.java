package com.example.oneShot.Service;

import com.example.oneShot.Data.Fear;
import com.example.oneShot.Data.Job;
import com.example.oneShot.Data.Status;
import org.springframework.stereotype.Service;

import java.util.Random;
@Service
public class EnumRandomizer {
    private final Random random;

    public EnumRandomizer(Random random) {
        this.random = random;
    }

    public Job getRandomJob() {
        // Get an array of all enum values
        Job[] values = Job.values();
        // Generate a random index within the array length
        int randomIndex = random.nextInt(values.length);
        // Return the random enum value
        return values[randomIndex];
    }

    public Status getRandomStatus() {
        Status[] values = Status.values();
        int randomIndex = random.nextInt(values.length);
        return values[randomIndex];
    }

    public Fear getRandomFear() {
        Fear[] values = Fear.values();
        int randomIndex = random.nextInt(values.length);
        return values[randomIndex];
    }
}