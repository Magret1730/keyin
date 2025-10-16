# Here is the code for Billy Bob and his numbers.
 
# Description:
# Author:
# Date(s):
 
 
# Define required libraries.
 
 
 
# Define program constants.
 
 
 
# Define program functions.
 
 
 
# Main program starts here.
while True:
   
    # Gather user inputs.
    '''
    # Allow the user to enter multiple numbers and store them in a list.
    NumLst = []
    while True:
 
        Number = input("Enter a number (-1 to end): ")
        Number = int(Number)
 
        if Number == -1:
            break
 
        NumLst.append(Number)
    '''
    NumLst = [2, 5, 6, 4, 8, 2, 7, 4, 8, 9, 1]
 
    # Perform required calculations and display results.
   
    # Print the list as entered.
    print()
    for Number in NumLst:
        print(Number)
    print()
 
    # Sort the list and print it again. Ascending order.
    NumLst.sort()
    print()
    for Number in NumLst:
        print(Number)
    print()
 
    # Can I sort the list in descending order
    NumLst.sort(reverse=True)
    print()
    for Number in NumLst:
        print(Number)
    print()    
   
 
    # Find the total of all the numbers.
    ListTotal = sum(NumLst)
    print()
    print(f"The total of all numbers in the list is {ListTotal}")
 
    # What is a language does not have a sum function???
    ListTotal = 0
    for Number in NumLst:
        ListTotal += Number
   
    print()
    print(f"The total of all numbers in the list is {ListTotal}")
 
 
    # To determine an average, I need a total & the number of items.
    Total = sum(NumLst)
    NumNums = len(NumLst)
 
    Average = Total / NumNums
    print()
    print(f"The average of all numbers in the list is {Average:.2f}")
 
 
    Continue = input("Do you want to do another number set (Y/N): ").upper()
    if Continue == "N":
        break
    # Write the values to a data file for storage.
 
 
 
# Any housekeeping duties at the end of the program.