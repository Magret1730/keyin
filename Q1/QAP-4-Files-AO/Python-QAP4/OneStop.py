# Description: Code calculate new insurance policy information
# for One Stop Insurance Company Customers.
# Author: Abiodun Magret Oyedele & SD 14
# Date(s): March 16 2025 - March 25 2025

# Define required libraries.
import FormatValues as FV
import OneStopFunc as OF
import datetime

# Define program constants.
NEXT_POLICY_NUM = 1944
BASIC_PREMIUM = 869.00
ADD_CARS_DISCOUNT = 0.25
EXTRA_LIABILITY_COV = 130.00
GLASS_COV = 86.00
LOANER_CAR_COV = 58.00
HST = 0.15
PROCESSING_FEE = 39.99
VALID_PROVINCES = ["NL", "PE", "NS", "NB", "QC", "ON", "MB", "SK", "AB", "BC", "YT", "NT", "NU"]
PAYMENT_METHODS = ["Full", "Monthly", "Down Pay"]
OPTIONALS = ["Y", "N"]

CUR_DATE = datetime.datetime.now()

# Main program starts here.
while True:
    # Gather user inputs
    while True:
        custFirstName = input("Enter customer first name: ").title()
        custLastName = input("Enter customer last name: ").title()
        custAddress = input("Enter customer address: ")
        custCity = input("Enter customer city: ").title()

        while True:
            custProvince = input("Enter customer province (XX): ").upper()
            if(custProvince not in VALID_PROVINCES):
                print("\n     Data Entry Error - Customer Province is not in valid provinces in Canada\n")
            else:
                break

        custPostalCode = input("Enter customer postal code: ")
        custPhoneNum = input("Enter customer phone number (XXXXXXXXXX): ")
        custNumCars = int(input("Enter customer number of Cars: "))

        while True:
            custExtraLiability = input("Do you want extra liability coverage up to $1,000,000? (Y/N): ").upper()
            if (custExtraLiability not in OPTIONALS):
                print("\n     Data Entry Error - Enter 'Y' for Yes or 'N' for No\n")
            else:
                break

        while True:
            custGlassCov = input("Do you want glass coverage? (Y/N): ").upper()
            if (custGlassCov not in OPTIONALS):
                print("\n     Data Entry Error - Enter 'Y' for Yes or 'N' for No\n")
            else:
                break

        while True:
            custLoanerCar = input("Do you want a loaner car? (Y/N): ").upper()
            if (custLoanerCar not in OPTIONALS):
                print("\n     Data Entry Error - Enter 'Y' for Yes or 'N' for No\n")
            else:
                break

        while True:
            custPaymentMethod = input("Enter payment method (Full, Monthly, Down Pay): ").title()
            if (custPaymentMethod not in PAYMENT_METHODS):
                print("\n     Invalid payment method. Please enter 'Full', 'Monthly', or 'Down Pay'.\n")
            else:
                break

        custDownPayment = 0
        if custPaymentMethod == "Down Pay":
            while True:
                try:
                    custDownPayment = float(input("Enter down payment amount: "))
                    if custDownPayment <= 0:
                        print("\n     Down payment must be greater than 0.\n")
                        continue
                    break
                except:
                    print("\n     Invalid amount. Please enter a numeric value.\n")

        claims = []
        while True:
            claimNumber = input("Enter claim number: ")
            claimDate = input("Enter claim date (YYYY-MM-DD): ")
            claimAmount = input("Enter claim amount: ")
            
            claims.append({
                "Claim Number": claimNumber,
                "Claim Date": claimDate,
                "Claim Amount": claimAmount
            })
            
            moreClaims = input("Do you want to enter another claim? (Y/N): ").upper()
            if moreClaims == "N" and len(claims) >= 2:
                break
            elif moreClaims == "N":
                print("You must enter at least 2 claims.")

        # Perform required calculations.

        # Base premium and discounts for extra cars
        basePremium = BASIC_PREMIUM
        if custNumCars > 1:
            basePremium += (custNumCars - 1) * (BASIC_PREMIUM * (1 - ADD_CARS_DISCOUNT))

        # Extra coverage costs
        extraCosts = OF.calculate_extra_coverage(custNumCars, custExtraLiability, custGlassCov, custLoanerCar)

        # Total premium and HST
        totalPremium = basePremium + extraCosts
        totalPremiumWithHST = totalPremium * (1 + HST)

        # Total cost
        totalCost = totalPremiumWithHST + PROCESSING_FEE

        # Monthly payment if selected 'Monthly' or 'Down Pay' with down payment
        if custPaymentMethod == "Full":
            monthlyPayment = 0
        elif custPaymentMethod == "Monthly":
            monthlyPayment = (totalCost) / 8
        elif custPaymentMethod == "Down Pay":
            totalCostAfterDownPay = totalCost - custDownPayment
            monthlyPayment = (totalCostAfterDownPay + PROCESSING_FEE) / 8

        # Calculate the payment date
        payment_date = OF.calculate_payment_dates(CUR_DATE)

        # Display results
        print("\nPolicy Details for:", custFirstName, custLastName)
        print("-" * 40)

        print(f"Customer First Name: {custFirstName:>19s}")
        print(f"Customer Last Name: {custLastName:>20s}")
        print(f"Customer Address: {custAddress:>22s}")
        print(f"Customer City: {custCity:>25s}")
        print(f"Customer Province: {custProvince:>21s}")
        print(f"Customer Postal Code: {custPostalCode:>18s}")
        print(f"Customer Phone: {custPhoneNum:>24s}")
        print(f"Number of Cars: {custNumCars:>24d}")
        print(f"Payment Method: {custPaymentMethod:>24s}")

        print(f"Down Payment: {FV.FDollar2(custDownPayment):>26s}"
              if custPaymentMethod == "Down Pay"
                else f"Down Payment: {'N/A':>26s}")

        print(f"Base Premium: {FV.FDollar2(basePremium):>26s}")

        if custExtraLiability == 'Y':
            print(f"Extra Liability Coverage: {FV.FDollar2(EXTRA_LIABILITY_COV * custNumCars):>14s}")
        else:
            print(f"Extra Liability Coverage: {'N/A':>14s}")

        if custGlassCov == 'Y':
            print(f"Glass Coverage: {FV.FDollar2(GLASS_COV * custNumCars):>24s}")
        else:
            print(f"Glass Coverage: {'N/A':>24s}")

        if custLoanerCar == 'Y':
            print(f"Loaner Car Coverage: {FV.FDollar2(LOANER_CAR_COV * custNumCars):>19s}")
        else:
            print(f"Loaner Car Coverage: {'N/A':>19s}")

        print(f"Total Premium: {FV.FDollar2(totalPremium):>25s}")
        print(f"Total Premium with HST: {FV.FDollar2(totalPremiumWithHST):>16s}")
        print(f"Processing Fee: {FV.FDollar2(PROCESSING_FEE):>24s}")
        print(f"Total Cost: {FV.FDollar2(totalCost):>28s}")
        print(f"Monthly Payment: {FV.FDollar2(monthlyPayment):>23s}")

        print("\nPrevious Claims:")
        print("Claim           Claim Date        Amount")
        print("----------------------------------------")
        for claim in claims:
            print(f"{claim['Claim Number']} {claim['Claim Date']:>22s} {FV.FDollar2(float(claim['Claim Amount'])):>15s}")

