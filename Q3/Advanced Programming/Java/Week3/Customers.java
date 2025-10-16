package Week3;

public class Customers {
    private int ID;
    private String name;
    private char gender;

    public Customers(int ID, String name, char gender) {
        this.ID = ID;
        this.name = name;
        this.gender = gender;
    }

    public int getID() {
        return ID;
    }

    public String getName() {
        return name;
    }

    public char getgender() {
        return gender;
    }

    @Override
    public String toString() {
        return name + "(" + ID + ")";
    }
}
