# Description: SDsdADadAD
# Author: Magret & SD 14
# Date(s): Jan 22, 2025
 
 
# Define required libraries.
 
# Define program constants.
firstSnuggleOrder = 29.99
twoAndNineSnugglesOrder = 24.99
aboveTenOrder = 21.99

aboveSixShipping = 3.99
lessSixShipping = 5.99

salesTaxRate = 0.15
serviceChargeRate = 0.03

# Define program functions.
 
# Main program starts here.
 
   
# Gather user inputs.
cusName = str(input("Enter the customer's name: "))
street = str(input("Enter the customer's street address: "))
city = str(input("Enter the customer's city address: "))
province = str(input("Enter the customer's province address: "))
postalCode = str(input("Enter the customer's postal code: "))
phoneNum = int(input("Enter the customer's phoneNum: "))
creditCard = int(input("Enter the customer's credit card details: "))
numSnuggly = int(input("Enter the number of Snuggly the customer wants: "))

snuggleOrder = 0
# Perform required calculations.
if (snuggleOrder == 1):
    if 





subTotal = costSnuggles + shipping
salesTax = salesTaxRate * subTotal
totalOrder = subTotal + salesTax
serviceCharge = serviceChargeRate * totalOrder

# Display results

# Write the values to a data file for storage.  
 
# Any housekeeping duties at the end of the program.