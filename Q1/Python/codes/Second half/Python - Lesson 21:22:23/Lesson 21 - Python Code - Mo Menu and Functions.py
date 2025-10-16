# Comment like a pro.

# Add any required libraries.
import datetime
import random

def CelcToFahr():

    Celc = int(input("Enter the temperature in Celcius: "))

    Fahr = 9 / 5 * Celc + 32

    print()
    print("The temperature of " + str(Celc) + " Celcius is " + str(Fahr) + " Fahrenheit.")
    print()

    Anykey = input("Press the Enter key to continue.")



def DaysToChristmas():
    # CurDate = datetime.datetime.today()

    CurDate = datetime.datetime(2021, 4, 12)
    ChrDate = datetime.datetime(CurDate.year, 12, 25)
    if CurDate.month == 12 and CurDate.day > 25:
        ChrDate = datetime.datetime(CurDate.year + 1, 12, 25)
    DaysToChr = (ChrDate - CurDate).days

    print()
    print("The current date is " + CurDate.strftime("%Y/%m/%d"))
    print("The next Christmas day is on " + ChrDate.strftime("%Y/%m/%d"))
    print(str(DaysToChr) + " days to Christmas")
    print()

    Anykey = input("Press the Enter key to continue.")



def CalcInvAge():

    Company = input("Enter the name of the company: ")
    InvDate = input("Enter the date of the invoice (YYYY/MM/DD): ")
    InvAmt = float(input("Enter the amount of the invoice: "))

    CurDate = datetime.datetime.now()
    InvDate = datetime.datetime.strptime(InvDate, "%Y/%m/%d")
    Age = (CurDate - InvDate).days

    print()
    print("The current date is " + CurDate.strftime("%Y/%m/%d"))
    print("The Invoice Date is " + InvDate.strftime("%Y/%m/%d"))
    print("The invoice is " + str(Age) + " days old.")
    print()
    if Age <= 30:
        print("Advice: OK for now")
    elif Age >= 31 and Age <= 60:
        print("Advice: Better think about paying.")
    elif Age > 60:
        print("Advice: This one could be in trouble.")

    Anykey = input("Press the Enter key to continue.")



def MoGuessGame():

    Number = random.randint(1, 101)

    GuessCtr = 0
    while True:
        Guess = int(input("Enter your guess: "))
        GuessCtr += 1
        if Guess == Number:
            print()
            print("You are correct.  The number was " + str(Number) + ".")
            break
        elif Guess < Number:
            print()
            print("The number is higher than your current guess.")
        else:
            print()
            print("The number is lower than your current guess.")

    print("You had "  + str(GuessCtr) + " guesses.")
    print()
    print("Thanks for playing our little game.")

    Anykey = input("Press the Enter key to continue.")



def ChangeReturn():
    # Determine the number of each denomination required to make change for a customer.

    # Comment like a pro.

    TotalDue = input("Enter the total amount due: ")
    TotalDue = float(TotalDue)
    AmtTend = input("Enter the amount tendered: ")
    AmtTend = float(AmtTend)

    Change = AmtTend - TotalDue
    print(f"Change: {Change}")


    # Convert the total total change left to cents (* 100).
    left = Change * 100

    # Use integer division to get the number of bills.
    # Then use modulus to get how much is left.
    Twenty = left // 2000
    left = left % 2000
    print(f"x 20:      {Twenty}")


    Ten = left // 1000
    left = left % 1000
    print(f"x 10:      {Ten}")

    Five = left // 500
    left = left % 500
    print(f"x 5:       {Five}")

    Toonie = left // 200
    left = left % 200
    print(f"x 2:       {Toonie}")

    Loonie = left // 100
    left = left % 100
    print(f"x 1:       {Loonie}")

    Quarter = left // 25
    left = left % 25
    print(f"x .25:     {Quarter}")

    Dime = left // 10
    left = left % 10
    print(f"x .10:     {Dime}")

    Nickel = left // 5
    left = left % 5
    if left >= 3:
        Nickel += 1
    print(f"x .05:     {Nickel}")
