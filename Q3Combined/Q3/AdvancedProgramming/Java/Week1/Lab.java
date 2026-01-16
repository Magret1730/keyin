import java.util.Scanner;

public class Lab {
    public static Scanner input = new Scanner(System.in);

    public static String numberToWord() {
        int num;

        System.out.print("Enter a one-digit number: ");
        num = input.nextInt();

        switch(num) {
            case 0:
                return "Zero";
            case 1:
                return "One";
            case 2:
                return "Two";
            case 3:
                return "Three";
            case 4:
                return "Four";
            case 5:
                return "Five";
            case 6:
                return "Six";
            case 7:
                return "Seven";
            case 8:
                return "Eight";
            case 9:
                return "Nine";
            default:
                return "Error: Input is not a one-digit number.";
        }
    }

    public static int largestNumber() {
        int num1, num2, num3, num4, num5, largest1, largest2, largest3, largest;

        System.out.println("You will need to enter 5 numbers to find the largest one.");
        System.out.print("Enter the first number: ");
        num1 = input.nextInt();
        System.out.print("Enter the second number: ");
        num2 = input.nextInt();
        System.out.print("Enter the third number: ");
        num3 = input.nextInt();
        System.out.print("Enter the fourth number: ");
        num4 = input.nextInt();
        System.out.print("Enter the fifth number: ");
        num5 = input.nextInt();

        if (num1 >= num2) {
            largest1 = num1;
        } else {
            largest1 = num2;
        }

        if (num3 >= num4) {
            largest2 = num3;
        } else {
            largest2 = num4;
        }

        if (largest1 >= largest2) {
            largest3 = largest1;
        } else {
            largest3 = largest2;
        }

        if (largest3 >= num5) {
            largest = largest3;
        } else {
            largest = num5;
        }

        return largest;
    }

    public static void invest() {
        double principal = 1000.0;
        double profit = 0.05;

        System.out.println("Year Amount on deposit");
        for (int i = 0; i < 10; i++) {
            principal = principal + (principal * profit);
            System.out.printf("%-4d %.2f%n", i, principal);
        }
    }

    public static void readNumbers() {
        int num = 0;
        int sum = 0;
        int count = 0;

        while (true) {
            System.out.print("Enter Number: ");
            num = input.nextInt();

            if (num == -999) {
                break;
            }

            sum += num;
            count++;
        }

        if (count > 0) {
            double ave = (double) sum / count;
            System.out.printf("Sum = %d, Average = %.2f%n", sum, ave);
        } else {
            System.out.println("No numbers were entered.");
        }
    }
    
    public static void main(String[] args) {
        String result = numberToWord();
        System.out.println(result);

        int largest = largestNumber();
        System.out.printf("The largest number is: %d\n", largest);

        invest();
        readNumbers();

        input.close();
    }

}