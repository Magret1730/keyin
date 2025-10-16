# Description: 
# Author: 
# Date(s): 


# Define required libraries.


# Define program constants.


# Define program functions.

# Long or complex calculations of a single value can be placed in a function.
# and the reslting value calculated in the function is returned to the program.

# If any varaibles are required, they must be passed in as parameters.
# In this example, I will need the Number Grade.
def LetterGrade(NumGrade):
    # Convert a number grade to a letter grade.

    if NumGrade >=80 and NumGrade <= 100:
        LetterGrade = "A"
    elif NumGrade >= 70 and NumGrade <= 79:
        LetterGrade = "B"
    elif NumGrade >= 60 and NumGrade <= 69:
        LetterGrade = "C"
    elif NumGrade >= 50 and NumGrade <= 59:
        LetterGrade = "D"
    else:
        LetterGrade = "F"

    return LetterGrade

def WeekGrossPay(NumHours, PayRate):
    # Calculate the weekly gross pay based on 1.5 times overtime after 40 hours.

    if NumHours <= 40:
        GrossPay = NumHours * PayRate
    else:
        RegPay = 40 * PayRate
        OTPay = (NumHours - 40) * (PayRate * 1.5)
        GrossPay = RegPay + OTPay
    
    return GrossPay

def EmpBonus(TotalSales):
    # Calculate and return the Bonus for an employee.

    Bonus = TotalSales * .01
    if TotalSales < 5000.00:
        Bonus = 0
    elif TotalSales > 100000.00:
        Bonus += 500.00
    
    return Bonus



# Main program starts here.
while True:
    
    # Gather user inputs.



    # Perform required calculations.

    '''
    # Test the LetterGrade() function.
    print(LetterGrade(84))

    #             OR

    Grade = input("Enter the student grade (0-100): ")
    Grade = int(Grade)

    # Functions that perform calcs in this way are always on the right side of the equal sign.
    Letter = LetterGrade(Grade)
    print(Letter)


    # Test the WeekGrossPay() function.
    NumHours = 45
    PayRate = 16.00

    GrossPay = WeekGrossPay(NumHours, PayRate)
    print(GrossPay)
    '''

    # Test the EmpBonus() function.
    Sales = 140000.00

    Bonus = EmpBonus(Sales)
    print(Bonus)

    # Display results



    # Write the values to a data file for storage.

    Cont = input("Press Enter to continue.")

# Any housekeeping duties at the end of the program.