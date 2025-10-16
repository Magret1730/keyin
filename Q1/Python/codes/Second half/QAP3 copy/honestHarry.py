# Description: Program that keeps track of Honest Harry used car lot sales.
# Author: Abiodun Magret Oyedele & SD 14
# Date(s): Feb 08, 2025 - Feb 09, 2025
 
 
# Define required libraries.
import datetime
 
 
 
# Define program constants.
allowed_char = set("ABCDEFGHIJKLMONPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz.-'")
allowed_num = set("0123456789")
generalPrice = float(99999)
MONTHLY_RATE = 12
FINANCING_RATE = 39.99


# Define program functions.
 
 
 
# Main program starts here.
while True:

    # Gather user inputs.

    # A set of allowable character can be validated against the input.
    while True:
        userInput = input("Enter customer first name: ")

        custFirstName = userInput.title()

        if (userInput == "END"):
            exit()

        if (custFirstName == ""):
            print()
            print("     Data Entry Error - Customer First Name must be entered")
            print()

        else:
            break


    # A set of allowable character can be validated against the input.
    while True:
        custLastName = input("Enter customer last name: ").title()

        if (custLastName == ""):
            print()
            print("     Data Entry Error - Customer Last Name must be entered")
            print()
        else:
            break

    # A set of allowable character can be validated against the input.
    while True:
        custPhoneNum = input("Enter customer phone number (XXXXXXXXXX): ")

        if (custPhoneNum == ""):
            print()
            print("     Data Entry Error - Customer phone number must be entered")
            print()
        elif (len(custPhoneNum) != 10):
            print()
            print("     Data Entry Error - Customer phone number is less than 10 digits")
            print()
        else:
            break

    while True:
        plateNum = input("Enter the plate number (XXX###): ").upper()

        if plateNum == "":
            print()
            print("   Data Entry Error - Plate number must be entered")
            print()
        elif len(plateNum) != 6:
            print()
            print("   Data Entry Error - Plate number must be 6 characters only")
            print()
        elif set(plateNum[0:3]).issubset(allowed_char) == False:
            print()
            print("   Data Entry Error - Plate number must start with 3 letters")
            print()
        elif set(plateNum[3:6]).issubset(allowed_num) == False:
            print()
            print("   Data Entry Error - Plate number must end with 3 numbers")
            print()
        else:
            break

    # A set of allowable character can be validated same with empty input
    carMake = input("Enter customer car make: ")

    # A set of allowable character can be validated same with empty input
    carModel = input("Enter customer car model: ")

    # A set of allowable numbers can be validated same with empty input
    # The length of the input can also be validated.
    # The year entered must not be more than the current year         
    carYear = input("Enter car year (####): ")

    # A set of allowable number can be validated same with empty input
    # The input can also be checked against negative values
    while True:
        sellingPrice = int(input("Enter selling price: "))

        if (sellingPrice >= 50000):
            print()
            print("     Data Entry Error - Selling price cannot exceed 50,000")
            print()
        else:
            break

    # Empty input can be validated.
    # The input can also be checked against negative values
    while True:
        amountTrade = int(input("Enter amount of trade: "))

        if (amountTrade >= sellingPrice):
            print()
            print("     Data Entry Error - Amount of trade cannot exceed selling price")
            print()
        else:
            break

    # A set of allowable characters can be be validated.
    while True:
        salespersonName = input("Enter sales person name: ")

        if (salespersonName == ""):
            print()
            print("     Data Entry Error - Sales person must be entered")
            print()
        else:
            break


    # Perform required calculations.

    # Display results
    print()
    print("                                                                                ")

    curDate = datetime.datetime.now()
    curDateDSP = curDate.strftime("%B %d, %Y")
    print(f"Honest Harry Car Sales                           Invoice Date: {curDateDSP:>15s}")
    print(f"Used Car Sale and Receipt                        Receipt No: {custFirstName[0]:>9s}{custLastName[0]:>1s}-{plateNum[3:6]:>3s}-{custPhoneNum[6:10]:>4s}")
    print()

    generalPriceDsp = "${:,.02f}".format(generalPrice)
    print(f"                                         Sale price: {generalPriceDsp:>27s}")
    print(f"Sold to:                                 Trade Allowance: {generalPriceDsp:>22s}")
    print(f"                                         _______________________________________")

    print(f"     1. {custFirstName:>13s} {custLastName:<13s}      Price after Trade: {generalPriceDsp:>20s}")
    print(f"     ({custPhoneNum[0:3]:<3s}) {custPhoneNum[3:6]:<3s}-{custPhoneNum[6:9]:<3s}                       License Fee: {generalPriceDsp:>26s}")
    print(f"                                         Transfer Fee: {generalPriceDsp:>25s}")
    print(f"                                         _______________________________________")
    print(f"Car Details:                             Subtotal: {generalPriceDsp:>29s}")
    print(f"                                         HST: {generalPriceDsp:>34s}")
    print(f"     {carYear:>4s} {carMake:>13s} {carModel:<10s}       _______________________________________")
    print()
    print(f"________________________________________________________________________________")
    print()

    print(f"                                    Financing      Total           Monthly")
    print(f"     # Years      # Payments           Fee         Price           Payment")
    print(f"     _____________________________________________________________________")

    for years in range(1, 4):
        year = years
        payments = year * MONTHLY_RATE
        financingFee = float(FINANCING_RATE * year)
        totalSales = float(sellingPrice + financingFee)
        monthlyPayment = float(totalSales / payments)

        financingFeeDsp = "${:,.02f}".format(financingFee)
        totalSalesDsp = "${:,.02f}".format(totalSales)
        monthlyPaymentDsp = "${:,.02f}".format(monthlyPayment)

        print(f"        {year:>1d}             {payments:>2d}            {financingFeeDsp:>7s}     {totalSalesDsp:>10s}       {monthlyPaymentDsp:>9s}")
        
    print(f"     _____________________________________________________________________")
    print()

    invoiceDSP = curDate.strftime("%d-%b-%y")

    firstPaymentDate = curDate + datetime.timedelta(days=30)
    firstPaymentDateDsp = curDate.strftime("%d-%b-%y")
    print(f"     Invoice date: {invoiceDSP:9>s}        First payment date: {firstPaymentDateDsp:9>s}")

    print(f"________________________________________________________________________________")
    print(f"                    Best used cars at the best prices!")

# Write the values to a data file for storage.  
 
# Any housekeeping duties at the end of the program.