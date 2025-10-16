# Code for String Methods from Wednesday.
# Description:
# Author:
# Date(s):
 
 
# Define required libraries.
import random
import math
import datetime
 
 
# Define program constants.
 
 
 
# Define program functions.
 
 
 
# Main program starts here.
 
# Variables with values are referred to as objects. We are
# able to define methods on these objects to change behavior.
 
FirstName = "John"
LastName = "Doe"
Title = "Mr."
 
print(f"{Title:<4s} {FirstName:<15s} {LastName:<15s}")
 
# Add the elements of the name into a single valraible
# using a process called concatenation - adding strings to the end of strings.
 
FullName = Title + " " + FirstName + " " + LastName
 
print(f"{FullName:<35s}")
 
# As a string is placed in memory, each character is defined with an index, starting at 0.
 
Initial = FirstName[0]
print(Initial)
FirstTwo = LastName[0:2]
print(FirstTwo)
 
print(f"{Initial:<1s}. {LastName:<15s}")
 
# If you get extra spacing, consider concatenation.
FullName = Initial + ". " + LastName
print(f"{FullName:<18s}")
 
# Do the other 2 as practice.
 
 
'''
DeptName = input("Enter the department name: ").title()
print(DeptName)
 
FullName = "jOhN o'ReIllY-sMiTh".title()
print(FullName)
 
# When you input a string, ask about case - .upper(), .capitalize(), .title()
'''
 
CurDate = "2025-02-05"
CustFirst = "Alex".title()
CustLast = "Smith".title()
LocCode = "AJRD".upper()
TransCode = 14974
 
# To generate a random number, import the random library, and use either random.random() for a number between 0-1, or random.randint(100, 1000) - in this case you can specify a starting and ending value for a range.
CustCtr = random.randint(1000, 9999)
print(CustCtr)
 
TrackNo = CustFirst[0] + CustLast[0] + "-" + LocCode[0:2] + "-" + str(TransCode)[3:6] + "-" + CurDate[0:4] + str(CustCtr)
print(f"{TrackNo:<17s}")
 
 
# Input and validate a phone number as 0000000000, and format to (000) 000-0000.
while True:
    PhoneNum = input("Enter the phone number (0000000000): ")
 
    if PhoneNum == "":
        print("Error - cannot be blank.")
    elif len(PhoneNum) != 10:
        print("Error - must be 10 digits only.")
    elif PhoneNum.isdigit() == False:
        print("Error - must be all digits.")
    else:
        break
 
# At this point we have a value in the format 0000000000.
PhoneNum = "(" + PhoneNum[0:3] + ") " + PhoneNum[3:6] + "-" + PhoneNum[6:10]
print(PhoneNum)
 
# Practice with a license plate no (LLLOOO) and a postal code (L0L0L0).
 
 
 
# Any housekeeping duties at the end of the program.
 