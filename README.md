# Welcome to Roman-numerals!

This project was an exercise in algorithmics found on https://exercism.org. The idea was to create a program that translates any number into its Roman numeral equivalent.

# How does it work?

## First step: How many digits?

Roman numerals have different characters for the same digit, depending on whether it's a unit, ten, hundred, etc. For example:

- 5 => V
- 50 => L
- 500 => D

The first step is to determine the position of each digit to know which set of characters to refer to.

## Second step: Digits one by one

Next, the program works on each digit individually and determines its position relative to 5.

- If the difference with 5 is between ]-2 and +3], the Roman numeral will be linked to 5. For example, 4 will be equivalent to IV (5 minus 1), and 8 will be equivalent to VIII (5 plus 3).
- If the difference is outside this interval, the Roman numeral will be linked to the nearest ten, either above or below. For example, 9 will be equivalent to IX (10 minus 1), and 12 will be equivalent to XII (10 plus 2).

# How to run this project

## Run the file

There is no online server for this project. The file can be run via node, and the digit is set directly in the document.

# Self-reflection and future improvements

## Quick fixes

1. Activate the function that prompts the user to type the number itself.
2. Maybe add a frontend for a user interface?
