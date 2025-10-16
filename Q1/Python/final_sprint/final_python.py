## Authors: Robot Group 1
## Date: 2025-04-10
## ======================
## Description: Program to manage operations at HAB taxi service
## This program has complete functionality for menu options #1, #4, #5, #6, #7, and #8
## The following files will be created with default values if they don't exist:
## Defaults.dat, Revenue.dat, Employees.dat, and Rentals.dat
## Reports for Option 5-6 will be called and read from financialListingReport.py and companyProfitReport.py

# Import libraries
import datetime
import os
# import companyProfitReport as cPR      # Import companyProfitListing.py as cPR
# import financialListingReport as fLR   # Import financialListingReport.py as fLR

# Constants
CUR_DATE = datetime.datetime.now()
ALPHA_NUM = ("1234567890 .-'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz") # Characters allowes for validation

# Format date to YYYY-MM-DD
def getFormattedDate():
    return datetime.datetime.now().strftime("%Y-%m-%d")

# Open or create Defaults.dat 
def openDefaults():
    defaultValues = [143, 1922, 175.00, 60.00, 300.00, 0.15]
    if os.path.exists("Defaults.dat"):                        # Check if Default.dat exists
        try:
            with open("Defaults.dat", "r") as f:              # Open and read if exists
                parts = f.read().strip().split(",")          
                return (
                    int(parts[0].strip()),
                    int(parts[1].strip()),
                    float(parts[2].strip()),
                    float(parts[3].strip()),
                    float(parts[4].strip()),
                    float(parts[5].strip())
                )
        except:
            pass

    # Write default values to Default.dat
    with open("Defaults.dat", "w") as f: 
        f.write(", ".join(map(str, defaultValues)) + "\n")
    return defaultValues

# Open or create Revenue.dat 
def openRevenue():
    if os.path.exists("Revenue.dat"): # Check if Revenue.dat exists
        with open("Revenue.dat", "r") as f:
            lines = f.read().strip().split("\n")
        if lines and lines[-1] != "": # 

            # Parse the last record in the file
            parts = lines[-1].split(",")
            if len(parts) == 7:
                return (
                    int(parts[0].strip()),
                    datetime.datetime.strptime(parts[1].strip(), "%Y-%m-%d").date(),
                    parts[2].strip(),
                    int(parts[3].strip()),
                    float(parts[4].strip()),
                    float(parts[5].strip()),
                    float(parts[6].strip())
                )

    # If Revenue.dat doesn't exist or is empty, create a default revenue record.
    transactionNum, driverNum, monthlyStandFee, _, _, hstRate = openDefaults()
    transactionDate = CUR_DATE.date()
    revDescription = "Revenue description"
    transactionAmount = monthlyStandFee
    hst = round(hstRate * transactionAmount, 2)
    totalAmount = transactionAmount + hst

    # Write Revenue.dat with default values
    with open("Revenue.dat", "w") as f:
        f.write(f"{transactionNum}, {transactionDate}, {revDescription}, {driverNum}, {transactionAmount}, {hst}, {totalAmount}\n")
    return transactionNum, transactionDate, revDescription, driverNum, transactionAmount, hst, totalAmount

# Load defaults from Defaults.dat
transactionNum, driverNum, monthlyStandFee, dailyRentalFee, weeklyRentalFee, hstRate = openDefaults()
revenue = openRevenue()

# Record monthly stand fee on 1st of month
if CUR_DATE.day == 1:
    transactionNum += 1
    transactionDate = CUR_DATE.date()
    revDescription = "Monthly Stand Fee"
    transactionAmount = monthlyStandFee
    hst = round(hstRate * transactionAmount, 2)
    totalAmount = transactionAmount + hst

    # Update defaults.dat and Revenue.dat
    with open("Revenue.dat", "a") as f:
        f.write(f"{transactionNum}, {transactionDate}, {revDescription}, {driverNum}, {transactionAmount}, {hst}, {totalAmount}\n")
    with open("Defaults.dat", "w") as f:
        f.write(f"{transactionNum}, {driverNum}, {monthlyStandFee}, {dailyRentalFee}, {weeklyRentalFee}, {hstRate}\n")

# Menu Loop
while True:

    # Display menu options
    print("\n" + " " * 10 + "HAB Taxi Services")
    print(" " * 7 + "Company Services System\n")
    print("1. Enter a New Employee (driver).")
    print("2. Enter Company Revenues.")
    print("3. Enter Company Expenses.")
    print("4. Track Car Rentals.")
    print("5. Record Employee Payment.")
    print("6. Print Company Profit Listing.")
    print("7. Print Driver Financial Listing.")
    print("8. Quit Program.\n")

    # Input and validate choice #1-8
    choice = input(" " * 12 + "Enter choice (1-8): ")
    if not choice.isdigit() or not (1 <= int(choice) <= 8):
        print("Invalid choice. Please enter a number between 1 and 8.")
        continue

    # Option 1: Add a New Employee 
    if choice == "1":
        while True:

            # Input and validate driver name
            name = input("Enter driver name: ").title()
            if name == "" or not set(name).issubset(ALPHA_NUM):
                print("Invalid Name.")
                continue
            
            while True:
                # Enter and validate driver address
                address = input("Enter driver address: ").title()
                if address == "" or not set(address).issubset(ALPHA_NUM):
                    print("Invalid Address.")
                    # continue
                else:
                    break
            
            # Input and validate driver phone number
            phone = input("Enter driver phone number (##########): ")
            if not (phone.isdigit() and len(phone) == 10):
                print("Phone Number must be 10 digits.")
                continue
            
            # Input and validate driver license number
            licenseNum = input("Enter driver license number: ")
            if not licenseNum.isdigit():
                print("Invalid License Number.")
                continue
            
            # Input and validate driver license expiry date (YYY-MM-DD)
            licenseExpiry = input("Enter license expiry date (YYYY-MM-DD): ")
            try:
                licenseExpiryDate = datetime.datetime.strptime(licenseExpiry, "%Y-%m-%d").date()
                if licenseExpiryDate < CUR_DATE.date():
                    print("License is expired.")
            except:
                print("Date must be in YYYY-MM-DD format.")
                continue

            # Input and validate name of insurance company used by driver
            insuranceCompany = input("Enter insurance company name: ").title()
            if insuranceCompany == "" or not set(insuranceCompany).issubset(ALPHA_NUM):
                print("Invalid insurance company.")
                continue
            
            # Input and validate the insurance policy number
            policyNum = input("Enter insurance policy number: ")
            if not policyNum.isdigit():
                print("Policy number must be numeric.")
                continue
            
            # Input if driver uses own car (Y,N) and validate
            ownCar = input("Does the driver own a car? (Y/N): ").upper()
            if ownCar not in ["Y", "N"]:
                print("Invalid input. Must be Y or N.")
                continue

            # Increment driverNum for the new employee
            driverNum += 1
            with open("Employees.dat", "a") as f:
                f.write(f"{driverNum}, {name}, {address}, {phone}, {licenseNum}, {licenseExpiry}, {insuranceCompany}, {policyNum}, {ownCar}, 0.0\n")
            with open("Defaults.dat", "w") as f:
                f.write(f"{transactionNum}, {driverNum}, {monthlyStandFee}, {dailyRentalFee}, {weeklyRentalFee}, {hstRate}\n")
            print("\nEmployee successfully added!")

    # Print message stating choice #2 is not programmmed to function
    elif choice == "2":
        print("\nThe logic for choice #2 has yet to be implemented\n")
        continue

    # Print message stating choice #3 is not programmmed to function
    elif choice == "3":
        print("\nThe logic for choice #3 has yet to be implemented\n")
        continue
    
    # Enter driver rental information for choice #4
    elif choice == "4": 
        
        # Input rental ID
        rentalID = input("Enter Rental ID: ")
        if not set(rentalID).issubset(ALPHA_NUM):
            print("Invalid Rental ID.")
            continue

        # Validate driver number by checking if it exists in Employees.dat
        try:
            driverNumRental = int(input("Enter Driver Number: "))
            with open("Employees.dat", "r") as f:
                existingDriverNums = [int(line.split(",")[0]) for line in f if line.strip()]
            if driverNumRental not in existingDriverNums:
                print("Driver number does not exist.")
                continue
        except:
            print("Driver Number must be numeric.")
            continue

        # Get and validate start rental date
        try:
            startRentalDate = input("Enter start date of rental (YYYY-MM-DD): ")
            startRentalDate = datetime.datetime.strptime(startRentalDate, "%Y-%m-%d").date()
        except:
            print("Invalid date format.")
            continue
        
        # Input and validate car number
        carNumber = input("Enter car number: ")
        if not carNumber.isdigit() or carNumber == "":
            print("Car number must be digits.")
            continue

        # Enter d for daily or w for weekly, then validate
        rentalType = input("Enter rental type ('d' for daily/'w' for weekly): ").lower()
        if rentalType not in ["d", "w"]:
            print("Rental type must be 'd' or 'w'.")
            continue

        try:
            rentalCost = float(input("Enter rental cost: "))
        except:
            print("Rental cost must be numeric.")
            continue
        
        # Calculate hst and amount total
        rentalHst = round(rentalCost * hstRate, 2)
        rentalTotal = round(rentalCost + rentalHst, 2)

        # Append to Rentals.dat
        with open("Rentals.dat", "a") as f:
            f.write(f"{rentalID}, {driverNumRental}, {startRentalDate}, {carNumber}, {rentalType}, {rentalCost}, {rentalHst}, {rentalTotal}\n")
        print("Rental successfully recorded.")

    # Input driver payment            
    elif choice == "5":
        driverPayment = float(input("Enter payment amount: " ))
        if not float(driverPayment):
            ("Invalid payment.  Amount must be numerical. ")
        else:
            print("Driver balance has been updated.")
            continue

    # Print company profit listing from companyProfitListing.py
    elif choice == "6":
        cPR.getProfitListing() 
        continue
    
    # Print driver financial listing from financialListingReport.py
    elif choice == "7":
        fLR.getDriverFinancialListing()
        continue

    # Exit program and update Defaults.dat and Revenue.dat
    elif choice == "8":
        print("Updating files...")
        print("Exiting program ")
        with open("Defaults.dat", "w") as f:
            f.write(f"{transactionNum}, {driverNum}, {monthlyStandFee}, {dailyRentalFee}, {weeklyRentalFee}, {hstRate}\n")
        with open("Revenue.dat", "") as f:
            f.write(f"{transactionNum}, {transactionDate}, {revDescription}, {driverNum}, {transactionAmount}, {hst}, {totalAmount}\n")


        # Break loop and exit program
        break