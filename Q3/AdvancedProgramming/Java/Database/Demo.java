import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Scanner;

// RUNT HIS ALWAYS
// javac -cp .:lib/postgresql-42.6.0.jar Demo.java
// java -cp .:lib/postgresql-42.6.0.jar Demo


// public class Demo {
  // public static void main(String[] args) {
  //   // write single record in to DB
  //   Employee E1 = new Employee(1, "Dave", "Husk", 200000);
  //   Employee E2 = new Employee(2, "Funny", "Husky", 300000);

  //   String query = " INSERT INTO employee (id, firstname, lastname, salary) " + "Values (?,?,?,?)";

  //   try {
  //     Connection con = DatabaseConnection.getcon();
  //     System.err.println(con);
  //     PreparedStatement statement = con.prepareStatement(query);
  //     statement.setInt(1, E1.getID());
  //     statement.setString(2, E1.getFirstName());
  //     statement.setString(3, E1.getLastName());
  //     statement.setDouble(4, E1.getSalary());
  //     int updateRow = statement.executeUpdate();
  //     System.out.println(updateRow);
  //   } catch (SQLException e) {
  //     e.printStackTrace();
  //   }
  // }

  public class Demo {
    public static void main(String[] args) {
        Employee E1 = new Employee(1, "Dave", "Husk", 200000);
        Employee E2 = new Employee(2, "Funny", "Husky", 300000);

        String createTableQuery = """
            CREATE TABLE IF NOT EXISTS employee (
                id SERIAL PRIMARY KEY,
                firstname VARCHAR(255),
                lastname VARCHAR(255),
                salary REAL
            )
        """;

        String insertQuery = """
            INSERT INTO employee (id, firstname, lastname, salary)
            VALUES (?, ?, ?, ?)
            ON CONFLICT (id) DO NOTHING
        """;

        try {
            Connection con = DatabaseConnection.getcon();
            
            // Create table if it doesn't exist
            con.createStatement().execute(createTableQuery);
            System.out.println("Table checked/created");

            // Insert E1
            PreparedStatement stmt = con.prepareStatement(insertQuery);
            stmt.setInt(1, E1.getID());
            stmt.setString(2, E1.getFirstName());
            stmt.setString(3, E1.getLastName());
            stmt.setDouble(4, E1.getSalary());
            stmt.executeUpdate();

            // Insert E2
            stmt.setInt(1, E2.getID());
            stmt.setString(2, E2.getFirstName());
            stmt.setString(3, E2.getLastName());
            stmt.setDouble(4, E2.getSalary());
            stmt.executeUpdate();

            System.out.println("Data inserted successfully");

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
