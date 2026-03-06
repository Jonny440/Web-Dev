def power(a, b):
    num = a

    for i in range(b):
        num *= a

    return num
a = int(input())
b = int(input())

print(power(a, b))