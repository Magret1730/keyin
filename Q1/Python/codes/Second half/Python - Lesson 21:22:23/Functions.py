# Description: 
# Author: 
# Date(s): 


# Define required libraries.



# Define program constants.



# Define program functions.
def PrintMsg():
    # Comment to explain the use of the function.

    print()
    print("******************************************")
    print("   Thanks for playing with Mo's menu.")
    print("******************************************")
    print()

def CelToFahr():
    # Convert a celsius temperature to Fahrenheit and display the result.

    print()
    CelTemp = input("Enter the temperature in Celsius: ")
    CelTemp = float(CelTemp)

    FahrTemp = 9 / 5 * CelTemp + 32

    FahrTempDsp = "{:.1f}".format(FahrTemp)
    print()
    print(f"The fahrenheit temperature is {FahrTempDsp}.")
    print()


def TrainingHR():
    # Determine and display the ideal training heart rate for a person.
    print("This is Option 2 from the menu")
    pass  # If you want to pass the function - code will be added later.


def DaysToChristmas():
    # Determine the number of days from the current date to the next Christmas day.
    print("This is Option 3 from the menu")
    pass


def InvoiceAge():
    # Determine the age of an invoice.
    print("This is Option 4 from the menu")
    pass


def GuessingGame():
    # Play my guessing game.  It is so much fun.
    print("This is Option 5 from the menu")
    pass


def PassStrength():
    # Check the strenght of an entered password
    print("This is Option 6 from the menu")
    pass

def EmpBenefits():
    # Determine when an employee can get enrolled in company benefits.
    print("This is Option 7 from the menu")
    pass

def SumNums():
    # Determine the sum of numbers up to an entered value.
    print("This is Option 8 from the menu")
    pass

def ChangeReturn():
    # Determine each denomination required for change on a purchase.
    # Determine the number of each denomination required to make change for a customer.

    TotalDue = input("Enter the total amount due: ")
    TotalDue = float(TotalDue)
    AmtTend = input("Enter the amount tendered: ")
    AmtTend = float(AmtTend)

    Change = AmtTend - TotalDue
    print(f"Change:    {Change}")
    print()

    # Convert the total total change left to cents (* 100).
    left = Change * 100

    # Use integer division to get the number of bills.
    # Then use modulus to get how much is left.
    Twenty = left // 2000
    left = left % 2000
    print(f"x 20:      {Twenty}")

    Ten = left // 1000
    left = left % 1000
    print(f"x 10:      {Ten}")

    Five = left // 500
    left = left % 500
    print(f"x 5:       {Five}")

    Toonie = left // 200
    left = left % 200
    print(f"x 2:       {Toonie}")

    Loonie = left // 100
    left = left % 100
    print(f"x 1:       {Loonie}")

    Quarter = left // 25
    left = left % 25
    print(f"x .25:     {Quarter}")

    Dime = left // 10
    left = left % 10
    print(f"x .10:     {Dime}")

    Nickel = left // 5
    left = left % 5
    if left >= 3:
        Nickel += 1
    print(f"x .05:     {Nickel}")


# Main program starts here.
while True:
    
    # Gather user inputs.
    # Call a function by referencing the name.
    print()
    print("Mo's Quick Problems - Main Menu")
    print()

    print("1. Convert Celsius to Fahrenheit.")
    print("2. Determine Training Heart Rate.")
    print("3. How many days to Christmas?")
    print("4. How old is an invoice?")
    print("5. Play my guessing game.")
    print("6. Check password strength.")
    print("7. When can an employee get benefits.")
    print("8. Get the sum of all numbers.")
    print("9. Change return calculator.")
    print("10. Quit")
    print()

    Choice = input("Enter choice (1-6): ")
    Choice = int(Choice)


    # Perform required calculations.
    # Each option from the menu is set up in a function.  That makes this area of the program much cleaner and better organized.

    if Choice == 1:
        CelToFahr()  # Could also create a separate program and import it here.
    elif Choice == 2:
        TrainingHR()  
    elif Choice == 3:
        DaysToChristmas()
    elif Choice == 4:
        InvoiceAge()
    elif Choice == 5:
        GuessingGame()
    elif Choice == 6:
        PassStrength()
    elif Choice == 7:
        EmpBenefits()
    elif Choice == 8:
        SumNums()
    elif Choice == 9:
        ChangeReturn()
    else:
        break
    

    # Display results




    # Write the values to a data file for storage.


# Any housekeeping duties at the end of the program.
PrintMsg()