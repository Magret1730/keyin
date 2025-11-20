package abiodun_java_qap1.Date;

public class Date {
    // Private instance variables
    private int day;
    private int month;
    private int year;

    // Constructor
    public Date(int day, int month, int year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    // Method to get day
    public int getDay() {
        return day;
    }

    // Method to get month
    public int getMonth() {
        return month;
    }

    // Method to get year
    public int getYear() {
        return year;
    }

    // Method to set day
    public void setDay(int day) {
        this.day = day;
    }

    // Method to set month
    public void setMonth(int month) {
        this.month = month;
    }

    // Method to set year
    public void setYear(int year) {
        this.year = year;
    }

    // Method to set date
    public void setDate(int day, int month, int year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    // toString method to display date in dd/mm/yyyy format
    @Override
    public String toString() {
        return String.format("%02d/%02d/%04d", day, month, year);
    }
}
