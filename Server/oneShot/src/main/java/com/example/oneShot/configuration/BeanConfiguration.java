package com.example.oneShot.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Random;

@Configuration
public class BeanConfiguration {

    @Bean
    Random random(){
        return new Random();
    }
}
