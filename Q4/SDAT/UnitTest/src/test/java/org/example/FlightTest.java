package org.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class FlightTest {

    @Test
    public void testIsComplete() {
        Aircraft aircraftUnderTest = new Aircraft();

        Flight flightUnderTest = new Flight();

        flightUnderTest.setAircraft(aircraftUnderTest);
        Assertions.assertFalse(flightUnderTest.isComplete());

        aircraftUnderTest.setStatus(Status.LANDED_AT_GATE);
        Assertions.assertTrue(flightUnderTest.isComplete());

        aircraftUnderTest.setStatus(Status.IN_FLIGHT);
        Assertions.assertFalse(flightUnderTest.isComplete());

    }
}
