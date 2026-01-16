// My first program in Java
import java.util.Scanner;

public class Welcome {
    public static void main(String[] args) {
        // PRINT STATEMENTS IN JAVA
        // System.out.println("Hello World");
        // System.out.println("This is my first Java program language");
        // System.out.print("Welcome to Java Programming");
        // System.out.print(" Enjoy the journey!");
        // // System.out.printf();

        // DATA TYPES IN JAVA (double string float char boolean long short byte int)
        // int num1 = 10;
        // int num2 = 20;

        // int result = 0;

        // result = num1 + num2;

        // System.out.println(result);
        // // System.out.printf("Sum = %d", result);
        // System.out.printf("%d + %d = %d", num1, num2, result);

        // NAMING CONVENTIONS IN JAVA
        // camelCase
        // PascalCase
        // snake_case
        // kebab-case (not allowed in Java)
        // variable names should be meaningful
        // cannot contain spaces
        // start with letters or underscore
        // cannot start with numbers
        // cannot use reserved keywords

    // ESCAPE SEQUENCES IN JAVA
        // System.out.println("Hello\tWorld"); // tab space
        // System.out.println("Hello\nWorld"); // new line
        // System.out.println("Hello\\World"); // backslash
        // System.out.println("Hello\"World\""); // double quote
        // System.out.println("Hello\'World\'"); // single quote
        // System.out.println("Hello\rWorld"); // carriage return
        // System.out.println("Hello\bWorld"); // backspace
        // System.out.println("Hello\fWorld"); // form feed

        // ARITHEMETIC, EQULALITY, RELATIONAL, LOGICAL OPERATORS IN JAVA
        // int a = 10;
        // int b = 20;
        // int c = 30;
        // int sum = a + b;
        // int diff = b - a;
        // int prod = a * b;
        // int quot = b / a;
        // int mod = b % a;
        // System.out.printf("Sum = %d\n", sum);
        // System.out.printf("Difference = %d\n", diff);
        // System.out.printf("Product = %d\n", prod);
        // System.out.printf("Quotient = %d\n", quot);
        // System.out.printf("Remainder = %d\n", mod);
        // System.out.printf("a == b: %b\n", a == b);
        // System.out.printf("a != b: %b\n", a != b);
        // System.out.printf("a > b: %b\n", a > b);
        // System.out.printf("a < b: %b\n", a < b);
        // System.out.printf("a >= b: %b\n", a >= b);
        // System.out.printf("a <= b: %b\n", a <= b);
        // System.out.printf("(a < b) && (b < c): %b\n", (a < b) && (b < c));
        // System.out.printf("(a < b) || (b > c): %b\n", (a < b) || (b > c));
        // System.out.printf("!(a < b): %b\n", !(a < b));


        // TAKING INPUT FROM USER IN JAVA
        int a,b,c;
        Scanner input = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        a = input.nextInt();
        System.out.print("Enter another integer: ");
        b = input.nextInt();
        c = a + b;
        System.out.println("Sum = " + c);
        input.close();
    }
}
