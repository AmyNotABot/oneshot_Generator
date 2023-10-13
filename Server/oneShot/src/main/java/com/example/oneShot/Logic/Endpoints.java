package com.example.oneShot.Logic;

import com.example.oneShot.Data.RandomChar;
import com.example.oneShot.Service.EnumRandomizer;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class Endpoints {
    EnumRandomizer enumRandomizer;

    public Endpoints(EnumRandomizer enumRandomizer) {
        this.enumRandomizer = enumRandomizer;
    }

    @PostMapping("randomize")
    public RandomChar createData() {
        return new RandomChar(enumRandomizer.getRandomStatus(), enumRandomizer.getRandomJob(), enumRandomizer.getRandomFear());
    }
}
