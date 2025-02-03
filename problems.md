Problem 1: Caesar Cipher Encoding and Decoding

Description: Implement a Caesar cipher where each letter in the plaintext is shifted by a fixed number of positions down or up the alphabet.

Solution Approach:
1.Encoding: Shift each letter in the plaintext by the given shift value.
2. Decoding: Shift each letter in the ciphertext backwards by the given shift value to retrieve the original plaintext.

 pseudocode for encoding in python:

def caesar_cipher_encrypt(text, shift):
    encrypted_text = ""
    for char in text:
        if char.isalpha():
            if char.islower():
                encrypted_text += chr((ord(char) - ord('a') + shift) % 26 + ord('a'))
            else:
                encrypted_text += chr((ord(char) - ord('A') + shift) % 26 + ord('A'))
        else:
            encrypted_text += char
    return encrypted_text

Problem 2: Convert Number into Comma Separated Indian Currency Format

Description: Convert a floating point number into a string representation using Indian numbering system with commas separating the digits.

Solution Approach:
1. Convert the number to a string.
2. Split the number into integer and fractional parts.
3. Format the integer part by inserting commas every two digits from the right.
4. Combine the formatted integer part and the fractional part with the decimal point.

 Python code:

def indian_number_format(number):
    integer_part, fractional_part = f"{number:.4f}".split(".")
    integer_part = integer_part[::-1]  # reverse the string
    formatted = ",".join([integer_part[i:i+2][::-1] for i in range(0, len(integer_part), 2)][::-1])
    return formatted + "." + fractional_part

 Problem 3: Combining Two Lists Based on Position

Description: Merge two lists of elements sorted by their left positions, combining values where appropriate.

Solution Approach:
1. Iterate through both lists simultaneously.
2. Compare the positions of elements from both lists.
3. Merge values if an element from one list overlaps more than half of another element from the other list.

Python code:

def combine_lists(list1, list2):
    result = []
    i, j = 0, 0
    while i < len(list1) and j < len(list2):
        # Compare left positions
        if list1[i]['positions'][0] < list2[j]['positions'][0]:
            result.append(list1[i])
            i += 1
        else:
            result.append(list2[j])
            j += 1
    # Append remaining elements
    result.extend(list1[i:])
    result.extend(list2[j:])
    return result

 Problem 4: Minimizing Loss

Description: Find the minimal loss incurred by buying and selling a house over several years.

Solution Approach:
1. Track the minimum loss while iterating through the prices.
2. Use a set or dictionary to efficiently look up previous prices for calculating potential losses.

 Python code:

def minimize_loss(prices):
    min_loss = float('inf')
    price_set = set(prices)
    for i in range(len(prices)):
        for j in range(i + 1, len(prices)):
            if prices[j] < prices[i]:
                loss = prices[i] - prices[j]
                if loss < min_loss:
                    min_loss = loss
    return min_loss
