# Here is the code for date processing.
 
import datetime
 
# Define the current date and print with different formats
 
CurDate = datetime.datetime.now() # Grabs the current system date as a date object.
 
 
print()
print("Current date based on the system date")
print("Note how it prints the date and time")
print(CurDate)
print()
print("Different formats when printing out a date")
print(CurDate.strftime("%A %a %Y %y %m %B %b %d"))
print("Line 17",CurDate.strftime("%Y-%m-%d")) # General format for a short date.
print(CurDate.strftime("%B %d, %Y"))
print(CurDate.strftime("%A, %B %d, %Y")) # General format for a long date.
print("Line 20", CurDate.strftime("%d-%b-%y")) # General format of a medium date.
# Also use %h %m %s to work with times.
 
 
# Add 4 days and 30 days to the Current date
CurDatePlus4 = CurDate + datetime.timedelta(days = 4) # Also use weeks.
print()
print("Current date plus 4 days")
print(CurDatePlus4)
 
CurDatePlus30 = CurDate + datetime.timedelta(days = 30)
print()
print("Current date plus 30 days")
print(CurDatePlus30)
 
CurDatePlus90 = CurDate + datetime.timedelta(days = -90)
print()
print("Current date plus 90 days")
print(CurDatePlus90)
# You can also subtract days by using a -.
 
 
# Define two dates as strings - same as if these were input
arrivalstr = input("Enter the arrival date (YYYY-MM-DD): ")
arrivaldate = datetime.datetime.strptime(arrivalstr, "%Y-%m-%d")
 
departurestr = "2025-2-9"
departuredate = datetime.datetime.strptime(departurestr, "%Y-%m-%d")
# Any dates assigned or input as a string must be converted to a date.
 
 
# Convert the arrival and departure from string objects to datetime objects
 
print()
print("Arrival date converted from string object to datetime object")
print(arrivaldate)
 
 
print()
print("Departure date converted from string object to datetime object")
print(departuredate)
 
 
 
 
# Calculate the number of days between the two dates
days = (departuredate - arrivaldate).days
print()
print("Difference between arrival and departure date in days")
print(days)
 
 
 
# Pull out the different parts of a date and create a new date
CurYear = CurDate.year
print()
print("Parts of a date including the Year, Month and Day from CurDate")
print(CurYear)
CurMonth = CurDate.month
print(CurMonth)
CurDay = CurDate.day
print(CurDay)
 
 
# Create a new date using the year, month and day components
New = datetime.datetime(CurYear, CurMonth, CurDay)
print(New)
 
# New date one month earlier
NewLessAMonth = datetime.datetime(CurYear, CurMonth - 1, CurDay)
print(NewLessAMonth)
 
# New date one year, 2 months, and 4 days in the future
NewFuture = datetime.datetime(CurYear + 1, CurMonth + 2, CurDay + 4)
print(NewFuture)
