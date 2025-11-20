package abiodun_java_qap1.Time;

public class Time {
    // Private instance variables
    private int hour;
    private int minute;
    private int second;

    // Parameterized constructor
    public Time(int hour, int minute, int second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    // Getter to get hour
    public int getHour() {
        return hour;
    }

    // Getter to get minute
    public int getMinute() {
        return minute;
    }

    // Getter to get second
    public int getSecond() {
        return second;
    }

    // Setter to set hour
    public void setHour(int hour) {
        this.hour = hour;
    }

    // Setter to set minute
    public void setMinute(int minute) {
        this.minute = minute;
    }

    // Setter to set second
    public void setSecond(int second) {
        this.second = second;
    }

    // Setter to set time
    public void setTime(int hour, int minute, int second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    // Overrides toString method to return time in HH:MM:SS format
    @Override
    public String toString() {
        return String.format("%02d:%02d:%02d", hour, minute, second);
    }

    // Method to increment time by one second
    public Time nextSecond() {
        second++;
        if (second == 60) {
            second = 0;
            minute++;
            if (minute == 60) {
                minute = 0;
                hour++;
                if (hour == 24) {
                    hour = 0;
                }
            }
        }
        return this;
    }

    // Method to decrement time by one second
    public Time previousSecond() {
        second--;
        if (second == -1) {
            second = 59;
            minute--;
            if (minute == -1) {
                minute = 59;
                hour--;
                if (hour == -1) {
                    hour = 23;
                }
            }
        }
        return this;
    }
}
