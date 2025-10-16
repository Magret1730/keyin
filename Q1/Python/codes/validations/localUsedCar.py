# Description: 
# Author: 
# Date(s): 


# Define required libraries.



# Define program constants.



# Define program functions.

# A local used car company requires a program to process used car sales.
# Input will include the customer's name (must be entered), the phone number
# (must be entered), the car year, make and model (one variable - must be entered),
# the car price (between $1,000.00 and $10,000.00), and a trade in allowance (cannot
# exceed $10,000.00). Add a calculation or two and some output. Allow the program
# to repeat until the user enters "END" for the Customer name.

# Main program starts here.
while True:
    
    # Gather user inputs.
    while True:
        custName = str(input("Enter the customer's name: "))

        if custName == "END":
            break

        if (custName == ""):
            print()
            print("     Data Entry Error - Customer Name must be entered.")
            print()
        else:
            break

    while True:
        try:
            phoneNum = int(input("Enter the customer's phone number: "))
        except:
            print()
            print("     Data Entry Error - Phone Number has to be a number")
            print()
        else:
            break

    while True:
        try:
            carYear = int(input("Enter the year of the car (####): "))

        except:
            # if (carYear == ""):
            print()
            print("     Data Entry Error - Year of the car has to be in integers")
            print()
        else:
            break

    while True:
        makeModel = str(input("Enter the make and model of the car: "))

        if (makeModel == ""):
            print()
            print("     Data Entry Error - Make and model must contain a variable")
            print()
        else:
            break

    while True:
        try:
            carPrice = float(input("Enter the price of the car: "))
        except:
            print()
            print("     Data Entry Error - Car price must be an integer")
            print()
            
        else:
            if (carPrice < 1000 or carPrice > 10000):
                print()
                print("     Data Entry Error - Car price must be in the range of 1000 - 10,000")
                print()
            else:
                break

    while True:
        try:
            tradeAll = float(input("Enter trade allowance: "))
        except:
            print()
            print("     Data Entry Error - Trade allowance must be integers")
            print()
        else:
            if (tradeAll > 10000):
                print()
                print("     Data Entry Error - Trade Allowance must not exceed 10,000")
                print()
            else:
                break


    # Perform required calculations.



    # Display results



    # Write the values to a data file for storage.


# Any housekeeping duties at the end of the program