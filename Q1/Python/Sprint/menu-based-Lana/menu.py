# Description: A menu-based program.
# Date: 25th Feb, 2024
# description
 
while True:
    print()
    print("Midterm Sprint - Main Menu")
    print()
    print(f"    1. Complete a travel claim.")
    print(f"    2. Fun interview question.")
    print(f"    3. Cool stuff with strings and dates.")
    print(f"    4. A little bit of everything.")
    print(f"    5. Something old, something new.")
    print(f"    6. Quit.")
    print()
    
    choice = input("Enter choice (1-6): ")

    if choice == '1':
        print()
        print("This is option 1 from the menu.")
        print()
    elif choice == '2':
        print("This is option 2 from the menu.")
    elif choice == '3':
        print("This is option 3 from the menu.")
        print()
    elif choice == '4':
        print("This is option 4 from the menu.")
        print()
    elif choice == '5':
        print("This is option 5 from the menu.")
        print()
    elif choice == '6':
        print("Exiting program. Goodbye!")
        print()
        break
    else:
        print("Invalid choice. Please enter a number between 1 and 6.")
        print()
