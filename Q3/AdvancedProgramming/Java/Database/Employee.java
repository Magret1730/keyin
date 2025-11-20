// package Q3.

import java.io.Serializable;

public class Employee implements Serializable{
    private int id;
    private String firstName;
    private String lastName;
    private double salary;

    Employee()
    {
        this.id = 0;
        this.firstName = null;
        this.lastName = null;
        this.salary = 0.0; 
    }
     //Parameterised Constructor
    Employee(int id, String firstname, String ln, double sal)
    {
     this.id = id;
     this.firstName = firstname;
     this.lastName = ln;
     this.salary = sal;

    }
    //Copy Constructor
    Employee(Employee e)
    {
        this.id = e.id;
        this.firstName = e.firstName;
        this.lastName = e.lastName;
        this.salary = e.salary;
     
    }
    public void setId(int id) {
        this.id = id;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    public int getID()
    {
      return this.id;  
    }
    public String getFirstName()
    {
        return this.firstName;
    }
    public String getLastName()
    {
        return this.lastName;
    }
    public double getSalary()
    {
        return salary;
    }
public String getName()
{
    return(firstName + " " + lastName);
}

public void setSalary(double sal)
{
    this.salary = sal;
}
public double getAnnualSalary()
{
    return(12 * salary);
}

public double raiseSalary(double percentage)
{
    this.salary = this.salary + (percentage/100*this.salary);
    return (this.salary);
}
public String toString()
{
    return (getName() + " has a salary " + this.salary );
}

}
