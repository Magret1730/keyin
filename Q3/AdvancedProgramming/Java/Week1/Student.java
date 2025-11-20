// public class Student {
//     String Name;
//     String Email;
//     int Age;
//     String RegNo;

//     public void display(){
//         System.out.println(Name);
//         System.out.println(Email);
//         System.out.println(Age);
//         System.out.println(RegNo);
//     }

//     public static void main(String[] args) {
//         Student s1 = new Student();
//         s1.Name = "John Doe";
//         s1.display();
//         Student s2 = new Student();
//         s2.Age = 20;
//         s2.display();
//     }
// }

public class Student {
    String Name;
    String Email;
    int Age;
    String RegNo;

    Student(String n, String e, int a, String r){
        this.Name = n;
        this.Email = e;
        this.Age = a;
        this.RegNo = r;
    }

    public void display(){
        System.out.println(Name);
        System.out.println(Email);
        System.out.println(Age);
        System.out.println(RegNo);
    }

    public static void main(String[] args) {
        // Student s1 = new Student();
        // s1.Name = "John Doe";
        // s1.display();
        // Student s2 = new Student();
        // s2.Age = 20;
        // s2.display();
        Student s1 = new Student("John Doe", "john.doe@example.com", 20, "REG123");
    }
}
