# List options as displayed i the menu.
 
# Description:
# Author:
# Date(s):
 
import datetime
CUR_DATE = datetime.datetime.now()
 
'''
ToDoLst = ["Take out the garbage", "Study Esssentials", "Write a Python program"]
NumLst = [3, 6, 3, 7, 9, 2]
MixedLst = [15, 38.54, "Text too", CUR_DATE, 58.2, True, 3.14159]
EmptyLst = []
 
print(ToDoLst) # prints the list in [].
 
Password = "Betsy"
for Letter in Password:  # processes each letter in the name from the first to the last.
    print(Letter)
 
# Also use a loop to process the elements in a list.
for Task in ToDoLst:
    print(Task)
 
TaskNum = 1
for Task in ToDoLst:
    print(f" {TaskNum:>2d}. {Task:<30s}")
 
    TaskNum += 1 # Add 1 to the TaskNum to increment it in the list.
 
# Also print individual items in a list.
print(ToDoLst[1])
 
# Add items to a list.  Append adds to the end of the list.
ToDoLst.append("Buy da wife some flowers")
 
NewItem = input("Enter a new task for your ToDo list: ")
ToDoLst.append(NewItem)
 
# print the list again with the new items added.
TaskNum = 1
for Task in ToDoLst:
    print(f" {TaskNum:>2d}. {Task:<30s}")
 
    TaskNum += 1 # Add 1 to the TaskNum to increment it in the list.
 
# Delete an item from the list.
DelItem = input("Enter the item number to remove: ")
DelItem = int(DelItem)
ToDoLst.__delitem__(DelItem - 1)
 
# if you are removing the last item in a list.
ToDoLst.pop()
 
 
# print the list again with the new items added.
TaskNum = 1
for Task in ToDoLst:
    print(f" {TaskNum:>2d}. {Task:<30s}")
 
    TaskNum += 1 # Add 1 to the TaskNum to increment it in the list.
 
 
# Allow the user to enter multiple numbers and store them in a list.
NumLst = []
while True:
 
    Number = input("Enter a number (-1 to end): ")
    Number = int(Number)
 
    if Number == -1:
        break
 
    NumLst.append(Number)
 
# Print the list of numbers entered.
for Number in NumLst:
    print(Number)
'''
 
ProvLst = ["NL", "NS", "PE", "NB"] # Often added as a constant.
while True:
    Prov = input("Enter the province (XX): ").upper()
 
    if Prov == "":
        print()
        print("   Data Entry Error - province cannot be blank.")
        print()
    elif len(Prov) != 2:
        print()
        print("   Data Entry Error - province must contain only 2 characters.")
        print()
    elif Prov not in ProvLst:
        print()
        print("   Data Entry Error - invalid province.")
        print()
    else:
        break
 
print(Prov)
 
 
# ***Complete exercise 3 & 4 from the lesson. ***