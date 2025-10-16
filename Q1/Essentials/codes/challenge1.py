# import math
 
# ItemCost = float(input("Enter the item cost: "))
# RetailCost = ItemCost + (ItemCost * .75)  # Add the markup to the item cost
# RetailCost = round(RetailCost,2)
# RetailCost = math.ceil(RetailCost) - 0.05 #go to the next highest value with ceil() and subtract 5 cents
# print(RetailCost)


# Tendered = float(input("Enter the item cost: "))
# Change = Tendered - RetailCost
# Change = Change * 100
# ChangeDsp = "${:,.2f}".format(Change)
# print("Change at 100: ", ChangeDsp)
 
# #floored qoutient // remainder %
# Num20 = Change // 2000
# Change = Change % 2000
# ChangeDsp = "${:,.2f}".format(Change)
# print("Change at 20: ", ChangeDsp)
 
# Num10 = Change // 1000
# Change = Change % 1000
# ChangeDsp = "${:,.2f}".format(Change)
# print("Change at 10: ", ChangeDsp)
 
# Num5 = Change // 500
# Change = Change % 500
# ChangeDsp = "${:,.2f}".format(Change)
# print("Change at 5: ", ChangeDsp)

# Num2 = Change // 200
# Change = Change % 200
# ChangeDsp = "${:,.2f}".format(Change)
# print("Change at 2: ", ChangeDsp)

# Num1 = Change // 100
# Change = Change % 100
# ChangeDsp = "${:,.2f}".format(Change)
# print("Change at 1: ", ChangeDsp)

import math
 
ItemCost = float(input("Enter the item cost: "))
RetailCost = ItemCost + (ItemCost * .75)  # Add the markup to the item cost
RetailCost = round(RetailCost,2)
RetailCost = math.ceil(RetailCost) - 0.05 #go to the next highest value with ceil() and subtract 5 cents
print(RetailCost)
 
Tendered = float(input("Enter the customer's tendred amount: "))
Change = Tendered - RetailCost
Change = Change * 100
 
#floored qoutient // remainder %
Num20 = Change//2000
Change = Change %2000
print("$20.00    ->  {:.0f}".format(Num20))
 
Num10 = Change//1000
Change = Change %1000
print("$10.00    ->  {:.0f}".format(Num10))
 
Num5 = Change//500
Change = Change %500
print("$5.00     ->  {:.0f}".format(Num5))
 
Num2 = Change // 200
Change = Change % 200
print("$2.00     ->  {:.0f}".format(Num2))
 
Num1 = Change // 100
Change = Change % 100
print("$1.00     ->  {:.0f}".format(Num1))
 
NumQ = Change // 25
Change = Change % 25
print("Quarters  ->  {:.0f}".format(NumQ))
 
NumD = Change // 10
Change = Change % 10
print("Dimes     ->  {:.0f}".format(NumD))
 
NumN = Change // 5
Change = Change % 5
NumP = Change
if NumP >=3:
    NumN += 1
print("Nickels   ->  {:.0f}".format(NumN))
 
print()
print("Thanks for using the Retail Price and Change Finder")
