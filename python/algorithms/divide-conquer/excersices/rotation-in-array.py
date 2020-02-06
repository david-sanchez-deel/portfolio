import math

list = [ 5, 6, 7, 8, 9, 2]

def binary_search(list, a, b):
  if b-a == 0:
    return -1
  if b-a == 1:
    if list[b] < list[a]:
      return b
    else:
      return -1
  middle = a + math.floor((b - a) / 2)
  if list[a] < list[middle]:
    return binary_search(list, middle + 1, b)
  return binary_search(list, a, middle)

def rotations_in_array(list):
  rotations = binary_search(list, 0, len(list) - 1)
  if (rotations == -1):
    return 0
  return len(list) - rotations
print(list, rotations_in_array(list))
