# And here is the code for the functions in the library.
 
# Define any constants or libraries that are needed in this library.
 
 
def GetComm(WeeklySales):
    # Find and return the commissioned earned by an employee.
 
    Comm = 0
    if WeeklySales > 10000.00:
        Comm = WeeklySales * .02
    elif WeeklySales > 5000.00:
        Comm = WeeklySales * .01
 
    return Comm
 
def FindGrossPay(WeeklySales, Comm, BaseSalary):
    # Find the GrossPay using a draw against commission.
 
    if WeeklySales < 5000.00:
        Ded = (5000.00 - WeeklySales) * .10
        BaseSalary -= Ded
    GrossPay = BaseSalary + Comm
   
    return GrossPay