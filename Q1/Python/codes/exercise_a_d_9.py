# Program for exercises a - d on Lesson 9.  Complete exercise e and question 2 for next class.
 
# Comment like a pro.
 
'''
if Criteria:  # Test of a condition that returns True or False.
    Statement(s) if the criteria is True.
    Jump out of the if statement and continue the program.
else:
    Statement(s) if the criteria is False
    Ignore the statements in the True blcok.
    Again, jump out of the if when complete.
'''
 
'''
Age = input("Enter the persons age: ")
Age = int(Age)
 
if Age >= 19:  # Other operators are >, <, >=, <=, ==, !=
    print("Allowed to vote.")
else:
    print("Too young to vote.")
'''
 
'''
PayRate = input("Enter the hourly pay rate: ")
PayRate = float(PayRate)
Hours = input("Enter the hours worked: ")
Hours = float(Hours)
 
if Hours <= 40:  # The most common alternative is done first.
    GrossPay = PayRate * Hours
else:
    RegPay = PayRate * 40
    OTPay = (Hours - 40) * (PayRate * 1.5)
    GrossPay = RegPay + OTPay
 
print(GrossPay)
'''
'''
Status = input("Enter the marital status (S, M, W, O): ").upper()
# Status = Status.upper()
# The Status will now always be upper case.
 
if Status == "S":
    print("Single")
elif Status == "M":
    print("Married")
elif Status == "W":
    print("Widowed")
else:
    print("Other")
'''
 
BalDue = input("Enter the balance due: ")
BalDue = float(BalDue)
CredLim = input("Enter the credit limit: ")
CredLim = float(CredLim)
 
if BalDue <= CredLim:
    PayDue = BalDue * .10
 
else:
    PayDue = (BalDue * .10) + (BalDue - CredLim)
 
print(PayDue)
