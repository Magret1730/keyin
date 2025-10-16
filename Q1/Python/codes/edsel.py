# Description: SDsdADadAD
# Author: Maurice & SD 14
# Date(s): Jan 21, 2025 -
 
 
# Define required libraries.
 
 
 
# Define program constants.
RENTAL_RATE = 35.00
KILO_RATE = .10
FREE_KM_PER_DAY = 100
HST_RATE = .15
 
 
# Define program functions.
 
 
 
# Main program starts here.
 
   
# Gather user inputs.
NumDays = input("Enter the number of days the car was rented: ")
NumDays = int(NumDays)
OdoRent = input("Enter the odometer reading when rented (99999): ")
OdoRent = int(OdoRent)
OdoReturn = input("Enter the odometer reading when returned (99999): ")
OdoReturn = int(OdoReturn)
 
 
# Perform required calculations.
 
# Odometer can roll over when it reaches 100000. Check to see if it rolled
# over and do the calculaations accordingly.
 
if OdoReturn > OdoRent: # This is the most common case.
    KmTrav = OdoReturn - OdoRent
else:
    KmTrav = (100000 - OdoRent) + OdoReturn
 
DailyCharge = NumDays * RENTAL_RATE
 
FreeMil = NumDays * FREE_KM_PER_DAY
if KmTrav <= FreeMil:
    KmCharge = 0
else:
    KmCharge = (KmTrav - FreeMil) * KILO_RATE
 
TotalCharges = DailyCharge + KmCharge
 
 
# Display results
print(f"Edsel Car Rental Company")
print(f"Customer Rental Receipt")
print()
print(f"Number of days rented:               {NumDays:>10d}")
print(":")
print(":")
print(f"Kilometers travelled:                {KmTrav:>10d}")
 
DailyChargeDsp = "${:,.2f}".format(DailyCharge)
print(f"Daily charge:                        {DailyChargeDsp:>10s}")
KmChargeDsp = "${:,.2f}".format(KmCharge)
print(f"Kilometer charge:                    {KmChargeDsp:>10s}")
print()
TotalChargesDsp = "${:,.2f}".format(TotalCharges)
print(f"Total charges:                       {TotalChargesDsp:>10s}")
print()
 
# Write the values to a data file for storage.
 
 
 
# Any housekeeping duties at the end of the program.
 