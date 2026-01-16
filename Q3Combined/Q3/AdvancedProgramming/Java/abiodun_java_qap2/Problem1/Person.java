package abiodun_java_qap2.Problem1;

public class Person {
    private String lastname;
    private String firstname;
    private Address home;

    // Constructor
    public Person(String lastname, String firstname, Address home) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.home = home;
    }

    // toString method to display person's details
    @Override
    public String toString() {
        return firstname + " " + lastname + "\n" + home.toString();
    }
}
