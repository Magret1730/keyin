package Week2.Employee;

public class TestEmployee {
    public static void main(String[] args) {
        // Create Employee objects
        Employee John = new Employee(1, "John", "Smith", 4500);
        Employee James = new Employee(2, "James", "Johnson", 5000);

        // Initial salaries
        System.out.println("Initial Annual Salaries:");
        System.out.println(John.getName() + ": $" + John.getAnnualSalary());
        System.out.println(James.getName() + ": $" + James.getAnnualSalary());

        // 20% raise
        John.setSalary((int)(John.getSalary() * 1.2));
        James.setSalary((int)(James.getSalary() * 1.2));

        // New salaries
        System.out.println("\nAfter 20% Raise:");
        System.out.println(John.getName() + ": $" + John.getAnnualSalary());
        System.out.println(James.getName() + ": $" + James.getAnnualSalary());
    }
}
