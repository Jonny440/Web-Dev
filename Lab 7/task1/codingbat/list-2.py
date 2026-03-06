def count_evens(nums):
  count = 0
  for num in nums:
    if num % 2 == 0:
      count += 1
  return count

def sum13(nums):
  count = 0
  skip = False
  for num in nums:
    if num == 13:
      skip = True
      continue
    if skip:
      skip = False
      continue
    count += num
      
      
  return count

def big_diff(nums):
    min, max = nums[0]
    for num in nums:
        if num < min:
            min = num
        if num > max:
           max = num
    return max - min