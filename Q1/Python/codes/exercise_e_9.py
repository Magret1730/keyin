IntValue1 = input("Enter the first integer value: ")
IntValue1 = int(IntValue1)
IntValue2 = input("Enter the second integer value: ")
IntValue2 = int(IntValue2)
 
Sum = IntValue1 + IntValue2
Diff = IntValue1 - IntValue2
Prod = IntValue1 * IntValue2
 
# Can only calculate the quotient if IntValue2 is not 0.
 
# If the if contains different variables in the true/false statemets,
# the variables must be initialized before the if. Varaible Scope
# describes the visibility of a variable.  Any valriable used in a
# code block (ie: in an if) are only visible inside the code block.
# Varaibles need to be initialized before the loop to make them visible
# to the rest of the program.
 
Quot = 0
QuotMsg = "" # An empty string is known as a null string.
if IntValue2 != 0:
    Quot = IntValue1 / IntValue2
else:
    QuotMsg = "Division by 0."
 
# Determine if a value is even or odd by dividing by 2 and checking the remainder.
# A remainder is 1 it is odd, if the remainder is 0 it is even.
 
# I do not need to initialize since the value is being defined in both
# the if and the else code blocks.
 
if IntValue1 % 2 == 0: # % is the mod operator, and returns the remainder.
    EvenOdd1 = "Even Number"
else:
    EvenOdd1 = "Odd Number"
 
if IntValue2 % 2 == 0:
    EvenOdd2 = "Even Number"
else:
    EvenOdd2 = "Odd Number"
 
print(Sum)
print(Diff)
print(Prod)
if IntValue2 != 0:
    print(Quot)
else:
    print(QuotMsg)
print(EvenOdd1)
print(EvenOdd2)
