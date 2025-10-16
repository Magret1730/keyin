import datetime

# Define program constants.
EXTRA_LIABILITY_COV = 130.00
GLASS_COV = 86.00
LOANER_CAR_COV = 58.00

# Function to calculate extra coverage costs based on customer choices
def calculate_extra_coverage(custNumCars, custExtraLiability, custGlassCov, custLoanerCar):
    extra_costs = 0
    if custExtraLiability == "Y":
        extra_costs += EXTRA_LIABILITY_COV * custNumCars
    if custGlassCov == "Y":
        extra_costs += GLASS_COV * custNumCars
    if custLoanerCar == "Y":
        extra_costs += LOANER_CAR_COV * custNumCars
    return extra_costs

# Function to calculate invoice and payment dates
def calculate_payment_dates(CUR_DATE):
    # Calculate the first day of the next month
    if CUR_DATE.month == 12:
        first_of_next_month = CUR_DATE.replace(year=CUR_DATE.year + 1, month=1, day=1)
    else:
        first_of_next_month = CUR_DATE.replace(month=CUR_DATE.month + 1, day=1)

    # Calculate 20 days from the invoice date
    payment_date = CUR_DATE + datetime.timedelta(days=20)

    # Compare to the first day of the next month
    if payment_date > first_of_next_month:
        payment_date = first_of_next_month

    return payment_date

