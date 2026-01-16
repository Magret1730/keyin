package org.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class FlightTest {

    @Test
    public void testIsComplete() {
        Aircraft aircraftUnderTest = new Aircraft();

        Flight flightUnderTest = new Flight();

        flightUnderTest.setAircraft(aircraftUnderTest);

        Assertions.assertTrue(flightUnderTest.isComplete());
    }
}
