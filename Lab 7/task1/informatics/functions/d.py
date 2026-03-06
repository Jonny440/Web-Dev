def election(a, b, c):
    if ((a + b + c) > 1):
        return 1
    else:
        return 0
    
x, y, z = (int, input().split)
print(election(x, y, z))