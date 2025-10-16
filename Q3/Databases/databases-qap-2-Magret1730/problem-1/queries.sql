-- Problem 1: University Course Enrollment System

-- Requirements
-- 1. Create Tables
-- a. Students Table
CREATE TABLE IF NOT EXISTS students(
	student_id SERIAL PRIMARY KEY,
	first_name TEXT,
	last_name TEXT,
	email TEXT,
    enrollment_date DATE
);

-- b. Professors Table
CREATE TABLE IF NOT EXISTS professors(
    professor_id SERIAL PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    department TEXT
);

-- c. Courses Table
CREATE TABLE IF NOT EXISTS courses(
    course_id SERIAL PRIMARY KEY,
    course_name TEXT,
    course_description TEXT,
    professor_id INT REFERENCES professors(professor_id)
);

-- d. Enrollments Table
CREATE TABLE IF NOT EXISTS enrollments (
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE NOT NULL,
    CONSTRAINT pk_enrollments PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

-- 2. Insert Data
-- a. Insert at least 5 students, 4 professors, and 3 courses.
INSERT INTO students (first_name, last_name, email, enrollment_date) VALUES
('Alice', 'Johnson', 'alice.johnson@example.com', '2024-09-15'),
('Bob', 'Smith', 'bob.smith@example.com', '2024-09-16'),
('Charlie', 'Williams', 'charlie.williams@example.com', '2024-09-17'),
('John', 'Doe', 'john.doe@example.com', '2024-09-18'),
('Jane', 'Doe', 'jane.doe@example.com', '2024-09-19');

INSERT INTO professors (first_name, last_name, department) VALUES
('Matthew', 'English', 'Database Systems'),
('Norman', 'Atique', 'FrontEnd Development'),
('Maurice', 'Babin', 'Python Programming'),
('Kennedy', 'Azupwah', 'AWS Cloud');

INSERT INTO courses (course_name, course_description, professor_id) VALUES
('Database Systems', 'Introduction to Database Systems', 1),
('FrontEnd Development', 'Learn the basics of FrontEnd Development', 2),
('Python Programming', 'Comprehensive Python Programming Course', 3),
('Physics 101', 'Introduction to Physics', 4);

-- b. Enroll multiple students in different courses, making sure there are at least 5 enrollments in total.
INSERT INTO enrollments (student_id, course_id, enrollment_date) VALUES
(1, 1, '2024-09-20'),
(2, 1, '2024-09-21'),
(3, 2, '2024-09-22'),
(4, 3, '2024-09-23'),
(5, 2, '2024-09-24'),
(1, 3, '2024-09-25'),
(2, 4, '2024-09-26'),
(3, 4, '2024-09-27');

-- Task 1
-- a. Retrieve the full names (by full name we mean the first name and last name joined into one column,
-- separated by a space) of all students enrolled in “Physics 101”.
SELECT students.first_name || ' ' || students.last_name AS full_name
FROM students
JOIN enrollments ON students.student_id = enrollments.student_id
JOIN courses ON enrollments.course_id = courses.course_id
WHERE courses.course_name = 'Physics 101';

-- b. Retrieve a list of all courses along with the professor’s full name who teaches each course.
SELECT course_name AS course, first_name || ' ' || last_name AS professor
FROM courses
JOIN professors ON courses.professor_id = professors.professor_id;

-- c. Retrieve all courses that have students enrolled in them.
SELECT DISTINCT course_name
FROM courses
JOIN enrollments ON courses.course_id = enrollments.course_id;

-- Task 2
-- Update one of the student’s emails.
UPDATE students
SET
  email = 'jane.doe@real.com'
WHERE first_name = 'Jane' AND last_name = 'Doe';

-- Task 3
-- Remove a student from one of their courses.
DELETE FROM enrollments
WHERE student_id = (SELECT student_id FROM students WHERE first_name = 'Alice' AND last_name = 'Johnson')
AND course_id = (SELECT course_id FROM courses WHERE course_name = 'Database Systems');
