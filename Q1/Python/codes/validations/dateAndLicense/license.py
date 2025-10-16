# Practice with a license plate no (LLL000).
 
allowed_num = set("1234567890")
allowed_char = set("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
while True:
    PlateNum = input("Enter the plate number (XXX000): ").upper()
 
    if PlateNum == "":
        print()
        print("   Data Entry Error - Plate number must be entered ...")
        print()
    elif len(PlateNum) != 6:
        print()
        print("   Data Entry Error - Plate number must be 6 characters only ...")
        print()
    elif set(PlateNum[0:3]).issubset(allowed_char) == False:
        print()
        print("   Data Entry Error - Plate number must start with 3 letters ...")
        print()
    elif set(PlateNum[3:6]).issubset(allowed_num) == False:
        print()
        print("   Data Entry Error - Plate number must end with 3 numbers ...")
        print()
    else:
        break
 
print(PlateNum)

# Check for a strong password.
allowed_num = set("1234567890")
allowed_upper_char = set("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
allowed_lower_char = set("abcdefghijklmnopqrstuvwxyz")
 
while True:
    Password = input("Enter a strong password: ")
 
    UpperCtr = 0
    LowerCtr = 0
    NumCtr = 0
    SpecCtr = 0
 
    for Char in Password: # Loop through each character in the password from index 0 to the end.
        if set(Char).issubset(allowed_num) == True:
            NumCtr += 1
        elif set(Char).issubset(allowed_upper_char) == True:
            UpperCtr += 1
        elif set(Char).issubset(allowed_lower_char) == True:
            LowerCtr += 1
        else:
            SpecCtr += 1
 
    if len(Password) < 7:
        print("   Error - Password must be at least 7 characters.")
    elif UpperCtr == 0:
        print("   Error - Password must contain at least one uppercase character.")
    elif LowerCtr == 0:
        print("   Error - Password must contain at least one lowercase character.")
    elif NumCtr == 0:
        print("   Error - Password must contain at least one numeric character.")
    elif SpecCtr == 0:
        print("   Error - Password must contain at least one special character.")
    else:
        break
   
# Any housekeeping duties at the end of the program.
