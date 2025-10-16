# Code for the Real Estate company.
 
# Description:
# Author:
# Date(s):
 
 
# Define required libraries.
import datetime
import Val #I need to look for this
 
# Define program constants.
CUR_DATE = datetime.datetime.now()
 
 
# Define program functions.
 
 
 
# Main program starts here.
while True:
   
    # Gather user inputs.
    print()
    ListNum = input("Enter the listing number (999999999): ")
    StAdd = input("Enter the street address: ")
    NumBed = input("Enter the number of bedrooms: ")
    NumBath = input("Enter the number of bathrooms: ")
    TotSqFeet = input("Enter the total square footage: ")
 
    DateLst = []
    PriceLst = []
    while True:
        while True:
            try:
                ListDate = input("Enter the listing date (yyyy-mm-dd): ")
                ListDate = datetime.datetime.strptime(ListDate, "%Y-%m-%d")
            except:
                print()
                print("    Data Entry Error - List date not a valid date.")
                print()
            else:
                if ListDate > CUR_DATE:
                    print()
                    print("   Data Entry Error - Lising date cannot be in the future.")
                    print()
                else:
                    break
 
        while True:
            try:
                ListPrice = input("Enter the list price: ")
                ListPrice = float(ListPrice)
            except:
                print()
                print("    Data Entry Error - list price is not a valid number.")
                print()
            else:
                break
 
        DateLst.append(ListDate)
        PriceLst.append(ListPrice)
 
        print()
        Continue = input("Enter another listing date and price (Y/N): ").upper()
        if Continue == "N":
            break
   
    # Placed the entire input and validation in a function in the Val.py library.
    Status = Val.GetStatus()
   
 
 
    # Perform required calculations.
 
 
 
    # Display results
    print()
    print(DateLst)
    print(PriceLst)
    print(Status)
    print()
 
    # Write the values to a data file for storage.
 
 
 
# Any housekeeping duties at the end of the program.
 
