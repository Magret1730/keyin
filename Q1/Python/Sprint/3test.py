# Created: by 
# Date:
# Description: Program to populate employee's information profile

# Import Libraries
import datetime
import string
import random

# Constants
CURRENT_DATE = datetime.datetime.now()  # Get the current date and time
PASS_REQUIRED = string.ascii_letters + string.digits + string.punctuation # Characters allowed for password
PASS_LENGTH = 8 # Length for password
EMPLOYEE_PASS =  ''.join(random.choice(PASS_REQUIRED) for _ in range(PASS_LENGTH)) # Calculation for password generation
RETIREMENT_AGE = 65 # Retirement age

# Employee first name validation
while True:
    employeeFirstName = input("Enter employee's first name: ").title()
    if employeeFirstName == "":
        print("Enter a valid first name.")
    elif set(employeeFirstName).issubset(string.ascii_letters + ".'-") ==  False:
        print("Enter a valid first name.")
    else:
        break

# Employee last name validation
while True:
    employeeLastName = input("Enter employee's last name: ").title()
    if employeeLastName == "":
        print("Enter a valid last name.")
    elif set(employeeLastName).issubset(string.ascii_letters + ".'-") == False:
        print("Enter a valid last name.")
    else:
        break    

# Employee phone number validation
while True:
    employeePhone = input("Enter employee phone number (xxxxxxxxxx): ")
    if employeePhone == "":
        print("Enter a valid phone number.")
    elif not employeePhone.isdigit():
        print("Please enter a valid phone number.")
    elif len(employeePhone) != 10:
        print("Phone number requires 10 digits.")
    else:
        break

# Employee start date validation
while True:
    employeeStart = input("Enter employee start date (DD/MM/YYYY): ")
    if employeeStart == "":
        print("Enter a valid date.")
    try:
        startDate = datetime.datetime.strptime(employeeStart, "%d/%m/%Y")
        if startDate > CURRENT_DATE:
            print("Enter a valid start date (cannot be in the future).")
        else:
            break
    except ValueError:
        print("Invalid date format. Please use DD/MM/YYYY.")
    
# Employee birth date validation
while True:
    employeeBirth = input("Enter employee birthday (DD/MM/YYYY): ")
    if employeeBirth == "":
        print("Enter a valid date.")
    try:
        birthDate = datetime.datetime.strptime(employeeBirth, "%d/%m/%Y")
        if birthDate > CURRENT_DATE:
            print("Date cannot be in the future.")
        else:
            break
    except ValueError:
        print("Invalid date format. Please use DD/MM/YYYY.")
        
# Employee full name
employeeFullName = employeeFirstName + " " + employeeLastName

# Creating employee username
employeeUserName = employeeFirstName[0:1].lower() + employeeLastName.lower()

# Calculates time until employee's next birthday
nextBirthday = birthDate.replace(year=CURRENT_DATE.year)
if nextBirthday < CURRENT_DATE:
    nextBirthday = nextBirthday.replace(year=CURRENT_DATE.year + 1)
timeUntilBirthday = nextBirthday - CURRENT_DATE
monthsUntilBirthday = (timeUntilBirthday.days % 365) // 30
daysUntilBirthday = (timeUntilBirthday.days % 365) % 30

# Calculate length of employment
delta = CURRENT_DATE - startDate
yearsEmployed = delta.days // 365  
monthsEmployed = (delta.days % 365) // 30  
daysEmployed = delta.days % 30  

# Calculate the employee's 65th birthdate (retirement date)
retirementDate = birthDate.replace(year=birthDate.year + RETIREMENT_AGE)
timeUntilRetirement = retirementDate - CURRENT_DATE

# Calculate time until retirement
yearsUntilRetirement = timeUntilRetirement.days // 365
monthsUntilRetirement = (timeUntilRetirement.days % 365) // 30
daysUntilRetirement = (timeUntilRetirement.days % 365) % 30

# Generate employee number
employeeNum = employeePhone[0:2] + employeeBirth[0:2] + str(random.randint(100, 999))

# Output
print("\n\n")
print("         Employee Information Profile")
print()
print("Name:                                ", employeeFullName)
print("Phone Number:                        ", employeePhone)
print("Birthday:                            ", birthDate.strftime("%d/%m/%Y"))
print("Time Until Employee's Next Birthday: ", f"{monthsUntilBirthday} months, {daysUntilBirthday} days")
print("Start Date:                          ", startDate.strftime("%d/%m/%Y"))
print("Length of Employment:                ", f"{yearsEmployed} years, {monthsEmployed} months, {daysEmployed} days")
print("Date Of Retirement Eligibility (65): ", retirementDate.strftime("%d/%m/%Y"))
print("Time Until Retirement Eligibility:   ", f"{yearsUntilRetirement} years, {monthsUntilRetirement} months, {daysUntilRetirement} days")
print("Employee Number:                     ", employeeNum)
print("Username:                            ", employeeUserName)
print("Password:                            ", EMPLOYEE_PASS)
print("\n\n")
