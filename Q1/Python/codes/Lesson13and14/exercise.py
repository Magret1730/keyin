'''print(1)
print(2)
print(3)
# and so on.
 
# for loop - if you know exactly how many iterations are needed.
for Num in range(1, 11):
    Square = Num ** 2 # the ** is used to raise to the power of.
    Cube = Num ** 3
    print(Num, Square, Cube)
 
# When it reaches the top value - the program jumps out of the loop.
# If you want to use that last value, set it to the top value + 1.
 
# Now create a loop with a while.  This loop is executed as long as a criteria is met.
# Always initialize the starting value before the loop.
Num = 1
while Num <= 10:
    print(Num)
    # In a whie loop, you need to increment the value inside the loop.
    Num += 1
 
 
LoopCtr = input("Enter a number between 1 and 10: ")
LoopCtr = int(LoopCtr)
 
for Graph in range(1, LoopCtr+1):
    # How do I get this to print on one line.  Print statements by defualt will put
    # a line break at the end.
    print("*", end="") # Keeps the print on the same line.
 
# For multiple lines in the graph, need multiple inputs and multiple loops.
 
 
# When printing a table, the headings are printed before the loop, the values are
# calculated and printed inside the loop, the line at the end is printed after the loop.
 
print(f" Celsius   Fahrenheit")
print(f" --------------------")
 
for CelTemp in range(-20, 31):
 
    FahTemp = (9 / 5 * CelTemp) + 32
    FahTempDsp = "{:.1f}".format(FahTemp)
    print(f" {CelTemp:>3d}          {FahTempDsp:>4s}")
   
print(f" --------------------")
'''
