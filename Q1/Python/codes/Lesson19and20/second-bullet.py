# Here is the code for the Invoice Analysis from Monday.  Look the the Hotel Reservation Program for Tuesday.
 
# Description:
# Author:
# Date(s):
 
 
# Define required libraries.
import datetime
 
 
# Define program constants.
CUR_DATE = datetime.datetime.now()
DIS_RATE = .02
 
# Define program functions.
 
 
 
# Main program starts here.
while True:
   
    # Gather user inputs.
    # When entering a date - validate like a numeric value.
    while True:
        try:
            InvDate = input("Enter the invoice date (YYYY-MM-DD): ")
            InvDate = datetime.datetime.strptime(InvDate, "%Y-%m-%d")
        except:
            print("    Error - date is invalid.  Use YYYY-MM-DD format.")
        else:
            # Validate to ensure it is not a future date.
            if InvDate > CUR_DATE:
                print("    Error - cannot enter a date in the future.")
            else:
                break
 
    while True:
        try:
            InvAmt = input("Enter the invoice amount: ")
            InvAmt = float(InvAmt)
        except:
            print("    Error - invoice amount must be a valid number.")
        else:
            break
   
 
    # Perform required calculations.
    # The discount date is 10 days from the invoice date.
    DisDate = InvDate + datetime.timedelta(days=10)
 
    # The discount amount is 2% off the original invoice amount.
    DisAmt = InvAmt - (InvAmt * DIS_RATE)  # DisAmt = InvAmt * .98
 
    # The due date is 30 days from the invoice date.
    DueDate = InvDate + datetime.timedelta(days=30)
 
    # The age of the invoice is the time from the current date.
    InvAge = (CUR_DATE - InvDate).days
 
    # Display results
    print()
    print(f"ABC Company")
    print(f"Invoice Analysis Program")
    print()
 
    InvAmtDsp = "${:,.2f}".format(InvAmt)
    print(f"   Original invoice amount:         {InvAmtDsp:>10s}")
 
    InvDateDsp = datetime.datetime.strftime(InvDate, "%d-%b-%y")
    print(f"   Original invoice date:           {InvDateDsp:>10s}")
 
    print()
    DisDateDsp = datetime.datetime.strftime(DisDate, "%d-%b-%y")
    print(f"   Discount date:                   {DisDateDsp:>10s}")
   
    DisAmtDsp = "${:,.2f}".format(DisAmt)
    print(f"   Discount amount:                 {DisAmtDsp:>10s}")
 
    print()
    DueDateDsp = datetime.datetime.strftime(DueDate, "%d-%b-%y")
    print(f"   Due date:                        {DueDateDsp:>10s}")
    print(f"   Invoice age:                      {InvAge:>3d} days.")
 
 
    # Write the values to a data file for storage.
 
 
    while True:
        print()
        Continue = input("Would you like to analyse another invoice (Y/N): ").upper()
 
        if Continue != "Y" and Continue != "N":
            print("   Error - Continue option must be a Y or N only.")
        else:
            break
 
    if Continue == "N":
        break # Jump out of the main loop and do the housekeeping.
 
 
# Any housekeeping duties at the end of the program.