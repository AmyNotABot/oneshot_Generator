package com.example.oneShot.Service;

import java.util.Random;

public class CharacterRandomizer {
    private Random random = new Random();

    private final EnumRandomizer enumRandomizer = new EnumRandomizer(random);

    public CharacterRandomizer(Random random) {
        this.random = random;
    }
}
