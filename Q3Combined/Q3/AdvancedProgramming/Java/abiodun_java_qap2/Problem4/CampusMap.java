package abiodun_java_qap2.Problem4;

import java.util.ArrayList;

public class CampusMap {
    private ArrayList<MyRectangle> buildings;
    private ArrayList<MyLine> walkways;
    private ArrayList<MyCircle> fountains;

    // Constructor
    public CampusMap() {
        buildings = new ArrayList<>();
        walkways = new ArrayList<>();
        fountains = new ArrayList<>();
    }

    // Add a building
    public void addBuilding(MyRectangle building) {
        buildings.add(building);
    }

    // Add a fountain
    public void addFountain(MyCircle fountain) {
        fountains.add(fountain);
    }

    // Add walkway between two buildings (using centers)
    public void addWalkway(MyRectangle from, MyRectangle to) {
        if (!buildings.contains(from) || !buildings.contains(to)) {
            System.out.println("Error: Both buildings must be part of the campus.");
            return;
        }
        MyPoint centerFrom = getCenter(from);
        MyPoint centerTo = getCenter(to);
        MyLine walkway = new MyLine(centerFrom, centerTo);
        walkways.add(walkway);
    }

    // Calculate total walkway length
    public double calculateTotalWalkwayLength() {
        double total = 0;
        for (MyLine line : walkways) {
            total += line.getLength();
        }
        return total;
    }

    // Calculate total fountain area
    public double calculateTotalFountainArea() {
        double total = 0;
        for (MyCircle f : fountains) {
            total += f.getArea();
        }
        return total;
    }

    // Check if walkway exists between two buildings
    public boolean isWalkwayFromTo(MyRectangle from, MyRectangle to) {
        MyPoint centerFrom = getCenter(from);
        MyPoint centerTo = getCenter(to);
        for (MyLine line : walkways) {
            if ((line.getBegin().equals(centerFrom) && line.getEnd().equals(centerTo)) ||
                (line.getBegin().equals(centerTo) && line.getEnd().equals(centerFrom))) {
                return true;
            }
        }
        return false;
    }

    // get center point of a rectangle
    private MyPoint getCenter(MyRectangle rect) {
        int centerX = (rect.getTopLeft().getX() + rect.getBottomRight().getX()) / 2;
        int centerY = (rect.getTopLeft().getY() + rect.getBottomRight().getY()) / 2;
        return new MyPoint(centerX, centerY);
    }
}
