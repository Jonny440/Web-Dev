def sleep_in(weekday, vacation):
  if not weekday or vacation:
    return True
  else:
    return False
  
def diff21(n):
  if n > 21:
    return (n - 21) * 2
  else:
    return 21 - n
  
def near_hundred(n):
  if n in range(90, 111) or n in range(190, 211):
    return True
  return False

def missing_char(str, n):
  return str[:n] + str[n + 1:]

def monkey_trouble(a_smile, b_smile):
  return not a_smile ^ b_smile
