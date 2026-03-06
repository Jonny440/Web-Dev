import math

def isPrime(a):
    for i in range(0, math.sqrt(a)):
        if a % i:
            return "Composite"
    return "Prime"

a = int(input())
print(isPrime(a))