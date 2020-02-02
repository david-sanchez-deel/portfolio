import math

list = [1, 2, 3, 4, 5, 6]

def binary_search(list, query, a, b):
  middle = a + math.floor((b - a) / 2)
  if list[middle] == query:
    return middle
  if b - a == 0:
    return -1
  if query > list[middle]:
    return binary_search(list, query, middle + 1, b)
  else:
    return binary_search(list, query, a, middle - 1)

for i in list:
  print(i, binary_search(list, i, 0, len(list) - 1))
