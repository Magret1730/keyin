package abiodun_java_qap2.Problem4;

public class TestCampusMap {
    public static void main(String[] args) {
        CampusMap campus = new CampusMap();

        // Create buildings
        MyRectangle scienceHall = new MyRectangle(new MyPoint(200, 700), new MyPoint(400, 500));
        MyRectangle library = new MyRectangle(new MyPoint(600, 800), new MyPoint(900, 500));
        MyRectangle lectureRoom1 = new MyRectangle(new MyPoint(100, 400), new MyPoint(200, 300));
        MyRectangle lectureRoom2 = new MyRectangle(new MyPoint(220, 400), new MyPoint(320, 300));
        MyRectangle lectureRoom3 = new MyRectangle(new MyPoint(340, 400), new MyPoint(440, 300));
        MyRectangle lectureRoom4 = new MyRectangle(new MyPoint(460, 400), new MyPoint(560, 300));
        MyRectangle lectureRoom5 = new MyRectangle(new MyPoint(580, 400), new MyPoint(680, 300));

        // Add buildings
        campus.addBuilding(scienceHall);
        campus.addBuilding(library);
        campus.addBuilding(lectureRoom1);
        campus.addBuilding(lectureRoom2);
        campus.addBuilding(lectureRoom3);
        campus.addBuilding(lectureRoom4);
        campus.addBuilding(lectureRoom5);

        // Create fountain
        MyCircle fountain = new MyCircle(new MyPoint(500, 600), 50);
        campus.addFountain(fountain);

        // Create walkways (connecting Science Hall with others and fountain)
        campus.addWalkway(scienceHall, library);
        campus.addWalkway(scienceHall, lectureRoom1);
        campus.addWalkway(scienceHall, lectureRoom2);
        campus.addWalkway(scienceHall, lectureRoom3);
        campus.addWalkway(scienceHall, lectureRoom4);
        campus.addWalkway(scienceHall, lectureRoom5);

        // Print calculations
        System.out.println("Total walkway length: " + campus.calculateTotalWalkwayLength());
        System.out.println("Total fountain area: " + campus.calculateTotalFountainArea());

        // Test walkway existence
        System.out.println("Is there a walkway between Science Hall and Library? " +
                campus.isWalkwayFromTo(scienceHall, library));

        System.out.println("Is there a walkway between Library and Lecture Room 1? " +
                campus.isWalkwayFromTo(library, lectureRoom1));
    }
}
