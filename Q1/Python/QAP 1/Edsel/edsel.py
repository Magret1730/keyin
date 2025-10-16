"""
Description: Determine the rental total cost at Edsel Car Rental Comapany
Author: Abiodun Magret Oyedele & SD 14
Dates: Jan 10 2025
"""

# Define Program Constants.
RENT_COST = 75 # $75 per day is the rent cost
KM_RATE = 0.16 # 16cents per kilometer is the kilometer rate
INSURANCE_RATE = 19 # insurance rate is $19 per day the car is rented
HST_RATE = 0.15 # HST Rate in NL presently
RENTAL_DISCOUNT = 0.10 # Discount rate on rental cost
MILEAGE_DISCOUNT = 0.25 # Discount rate on mileage cost

# Gather User Inputs.
custName = input("Enter the customer name: ")
phoneNum = input("Enter customer phone number: ")
daysRent = int(input("Enter the number of days the car was rented: "))
odoRent = int(input("Enter the odometer reading the day the car was rented: "))
odoReturn = int(input("Enter the odometer reading the day the car was returned: "))

# Perform Program Calculations.
totalKm = odoReturn - odoRent
rentCost = daysRent * RENT_COST
mileageCost = totalKm * KM_RATE
insuranceCost = daysRent * INSURANCE_RATE

discountRentCost = RENTAL_DISCOUNT * rentCost
discountMileageCost = MILEAGE_DISCOUNT * mileageCost
totalDiscount = discountRentCost + discountMileageCost

totalRentalCost = (rentCost + mileageCost + insuranceCost) - totalDiscount

HST = totalRentalCost * HST_RATE

finalTotal = totalRentalCost + HST

# Display User Results.
print()
print("Customer name:                                  ", custName)
print("Customer phone number:                          ", phoneNum)
print("Number of days the car was rented:              ", daysRent)
print("Odometer reading the day the car rented:        ", odoRent)
print("Odometer reading the day the car was returned:  ", odoReturn)

print()
print("Total number of kilometers travelled:           ", totalKm)
print("Rental cost:                                    ", rentCost)
print("Mileage cost:                                   ", mileageCost)
print("Insurance cost:                                 ", insuranceCost)

print()
print("Total Discount:                                 ", totalDiscount)
print("Total Rental Cost:                              ", totalRentalCost)
print("HST (Sales Tax):                                ", HST)

print()
print("Final Invoice Total:                            ", finalTotal)
