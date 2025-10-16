# Description:
# Author:
# Date(s):
 
 
# Define required libraries.
 
 
 
# Define program constants.
 
 
 
# Define program functions.
 
 
 
# Main program starts here.
while True:
   
    # Gather user inputs.
    allowed_char = set("ABCDEFGHIJKLMONPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz.-'")
    AllowedCharNum = set("ABCDEFGHIJKLMONPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz.-'0123456789")
    AllowedUpperCharNum = set("ABCDEFGHIJKLMONPQRSTUVWXYZ0123456789")
    AllowedUpperChar = set("ABCDEFGHIJKLMONPQRSTUVWXYZ")
    AllowedNum = set("0123456789")
 
 
    while True:
        CustName = input("Enter the customer name: ")
        if CustName == "":
            print()
            print("    Data Entry Error - Customer name must be entered.")
            print()
        elif set(CustName).issubset(allowed_char) == False:
            # Every character in the name must be in the set of allowed characters.
            print()
            print("    Data Entry Error - Customer name contains invalid characters.")
            print()
        else:
            break
   
    while True:
        StAdd = input ("Enter the customer street address: ")
        if StAdd == "":
            print()
            print("    Data Entry Error - Street address must be entered.")
            print()
        elif set(StAdd).issubset(AllowedCharNum) == False:
            # Every character in the name must be in the set of allowed characters.
            print()
            print("    Data Entry Error - Street address contains invalid characters.")
            print()
        else:
            break
 
    while True:
        City = input("Enter the customer city: ")
        if City == "":
            print()
            print("    Data Entry Error - Customer city must be entered.")
            print()
        elif set(City).issubset(allowed_char) == False:
            # Every character in the name must be in the set of allowed characters.
            print()
            print("    Data Entry Error - Customer city contains invalid characters.")
            print()
        else:
            break
 
 
    while True:
        Prov = input("Enter the customer province (XX): ").upper()
        if Prov== "":
            print()
            print("    Data Entry Error - Customer province must be entered.")
            print()
        elif len(Prov) != 2:
            print()
            print("    Data Entry Error - Province must contain 2 characters only.")
            print()
        elif set(Prov).issubset(AllowedUpperChar) == False:
            # Every character in the name must be in the set of allowed characters.
            print()
            print("    Data Entry Error - Customer province contains invalid characters.")
            print()
        elif Prov != "NL" and Prov != "NS" and Prov != "PE" and Prov != "NB":
            print()
            print("    Data Entry Error - Customer province is not valid.")
            print()
        else:
            break
 
    while True:
        PostCode = input("Enter the customer postal code (X0X0X0): ").upper()
        if PostCode == "":
            print()
            print("    Data Entry Error - Customer postal code must be entered.")
            print()
        elif len(PostCode) != 6:
            print()
            print("    Data Entry Error - Postal code  must contain 6 characters only.")
            print()
        elif set(PostCode).issubset(AllowedUpperCharNum) == False:
            # Every character in the name must be in the set of allowed characters.
            print()
            print("    Data Entry Error - Customer postal code contains invalid characters.")
            print()
        else:
            break
 
    while True:
        Phone = input("Enter the customer phone number (000000000): ")
        if Phone == "":
            print()
            print("    Data Entry Error - Customer phone number must be entered.")
            print()
        # Use the len() function to count the number of characters in a string.
        elif len(Phone) != 10:
            print()
            print("    Data Entry Error - Phone number must contain 10 digits only.")
            print()
        elif set(Phone).issubset(AllowedNum) == False:
            # Every character in the name must be in the set of allowed characters.
            print()
            print("    Data Entry Error - Customer phone number contains invalid characters.")
            print()
        else:
            break
   
    while True:
        try:
            NumSnug = input("Enter the number of Snugglys ordered (1-20): ")
            NumSnug = int(NumSnug) #If this line causes an error - it goes to the except:
        except:
            print()
            print("    Data Entry Error - Number of Snugglys not a valid integer.")
            print()
        else:
            # Value is valid, now check for the range.
            if NumSnug < 1 or NumSnug > 20:
                print()
                print("    Data Entry Error - Number of Snugglys must be bewteen 1 and 20.")
                print()
            else:
                break
       
    while True:
        MethPay = input("Enter the method of payment (C)redit card or (P)ay later: ").upper()
        if MethPay == "":
            print()
            print("   Data Entry Error - Payment method cannot be blank.")
            print()
        elif len(MethPay) != 1:
            print()
            print("    Data Entry Error - Method of payment contains only 1 character, C or P.")
            print()
        elif MethPay != "C" and MethPay != "P":
            # Every character in the name must be in the set of allowed characters.
            print()
            print("    Data Entry Error - Method of payment must be a C or P only.")
            print()
        else:
            break
 
 
    # Perform required calculations.
 
 
    # Display results
 
 
    # Write the values to a data file for storage.
  
 
    # Any housekeeping duties at the end of the program.