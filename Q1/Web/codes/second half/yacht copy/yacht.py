# Description: A program to help St. John’s Marina & Yacht Club enter the appropriate
# information of their customers and prepare a receipt.
# Author: Abiodun Magret Oyedele & SD 14
# Date: Jan 26, 2025
 
# Define program constants.
NO_OF_SITES = 100
EVEN_NO_SITES_MONTHLY = 80
ODD_NO_SITES_MONTHLY = 120
ALTERNATE_MEMBER = 5
TAX_RATE = 0.15
MONTHLY_DUES_STANDARD = 75 
MONTHLY_DUES_EXECUTIVE = 150 
YEARLY_RATE = 12 
PROCESSING_FEE = 59.99 
CANCELLATION_RATE = 0.6
WEEKLY_SITE_CLEANING_RATE = 50
VIDEO_SURV_RATE = 35

# Gather user inputs.
entryDate = str(input("Enter date ((YYYY-MM-DD):  "))
siteNum = int(input("Enter site number (1-100): "))
memberName = str(input("Enter the customer name: "))
address = str(input("Enter the customer street address: "))
city = str(input("Enter the customer city: "))
province = str(input("Enter the customer povince: ").upper())
postalcode = str(input("Enter customer postal code: ").upper())
phoneNum = str(input("Enter the customer phone number: "))
cellNumber = str(input("Enter the customer cell number: "))
membershipType = str(input("Enter the customer membership type (S or E): ").upper())
alternateMem = int(input("Enter the number of customer alternate member: "))
weeklySiteClean = str(input("Weekly site cleaning option of customer (Y or N): ").upper())
videoSurv = str(input("Enter video surveillance option of customer (Y or N): ").upper())

# Perform required calculations.
if (siteNum % 2 == 1):
    siteCharges = ODD_NO_SITES_MONTHLY + (alternateMem * ALTERNATE_MEMBER)
else:
    siteCharges = EVEN_NO_SITES_MONTHLY + (alternateMem * ALTERNATE_MEMBER)

if (weeklySiteClean == "Y"):
    siteExtraCharge = WEEKLY_SITE_CLEANING_RATE
else: 
    siteExtraCharge = 0

if (videoSurv == "Y"): 
    videoExtraCharge = VIDEO_SURV_RATE
else: 
    videoExtraCharge = 0

extraCharges = siteExtraCharge  + videoExtraCharge
subTotal = siteCharges + extraCharges
tax = TAX_RATE * subTotal
totalMonthlyCharge = subTotal + tax

if (membershipType == "S"):
    totalMonthlyFees = totalMonthlyCharge + MONTHLY_DUES_STANDARD 
else: 
    totalMonthlyFees = totalMonthlyCharge + MONTHLY_DUES_EXECUTIVE

totalYearlyFees = totalMonthlyFees * YEARLY_RATE

monthlyPayment = (totalYearlyFees + PROCESSING_FEE) / YEARLY_RATE
cancellationFee = totalYearlyFees * CANCELLATION_RATE

# Display results
print()
print(f"       St. John’s Marina & Yacht Club")
print(f"            Yearly Member Receipt")
print()
print(f"____________________________________________")

print()
print(f" Client Name and Address:")
print(f" {memberName}")
print(f" {address}")
print(f" {city}, {province} {postalcode}")

print()
print(f" Phone:  {phoneNum} (H)")
print(f"         {cellNumber} (C)")

print()
if (membershipType == "S"):
    memberType = "Standard"
else:
    memberType = "Executive"

siteNumberDsp = "{:03d}".format(siteNum)
# print(f" Site #: {siteNumberDsp} Member type: {memberType:>9s}")
print(f" Site #: {siteNumberDsp}      Member type: {memberType:>13s}")

print()
# print(f" Alternate members: {alternateMem:>15d}")
print(f" Alternate members: {alternateMem:>24d}")

if (weeklySiteClean == "Y"):
    answer = "YES"
else:
    answer = "NO"
print(f" Weekly site cleaning: {answer:>21s}")

if (videoSurv == "Y"):
    answer1 = "YES"
else:
    answer1 = "NO"
print(f" Video surveillance: {answer1:>23s}")

print()
siteChargesDsp = "${:,.2f}".format(siteCharges)
print(f" Site charges: {siteChargesDsp:>29s}")

extraChargesDsp = "${:,.2f}".format(extraCharges)
print(f" Extra charges: {extraChargesDsp:>28s}")
print(f"                                    ________")

subTotalDsp = "${:,.2f}".format(subTotal)
print(f" Subtotal: {subTotalDsp:>33s}")

taxDsp = "${:,.2f}".format(tax)
print(f" Sales tax (HST): {taxDsp:>26s}")
print(f"                                    ________")

totalMonthlyChargeDsp = "${:,.2f}".format(totalMonthlyCharge)
print(f" Total monthly charges: {totalMonthlyChargeDsp:>20s}")

if (membershipType == "S"):
    monthlyDues = MONTHLY_DUES_STANDARD
else:
    monthlyDues = MONTHLY_DUES_EXECUTIVE
monthlyDuesDsp = "${:,.2f}".format(monthlyDues)
print(f" Monthly dues: {monthlyDuesDsp:>29s}")
print(f"                                    ________")

totalMonthlyFeesDsp = "${:,.2f}".format(totalMonthlyFees)
print(f" Total monthly fees: {totalMonthlyFeesDsp:>23s}")

totalYearlyFeesDsp = "${:,.2f}".format(totalYearlyFees)
print(f" Total yearly fees: {totalYearlyFeesDsp:>24s}")

print()
monthlyPaymentDsp = "${:,.2f}".format(monthlyPayment)
print(f" Monthly payment: {monthlyPaymentDsp:>26s}")

print()
print(f"                                    ________")

print()
print(f" Issued: {entryDate}")
print(f" HST Reg No: 549-33-5849-4720-9885")

print()
cancellationFeeDsp = "${:,.2f}".format(cancellationFee)
print(f" Cancellation fee: {cancellationFeeDsp:>25s}")

# Any housekeeping duties at the end of the program.
