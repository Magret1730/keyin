import java.sql.*;//Connection, DeviceManager, SQLException

public class DatabaseConnection{

    private static final String url = "jdbc:postgresql://localhost:5433/javaclass";
    private static final String user = "postgres";
    private static final String password = "qigwu0-G";
    public static Connection getcon()
    {
        Connection connection = null;
        try{
            Class.forName("org.postgresql.Driver");
            connection = DriverManager.getConnection(url, user, password);
            System.out.println(connection);
        }
        catch(ClassNotFoundException | SQLException e)
        {
            e.printStackTrace();
        }
        return connection;
    }

}
