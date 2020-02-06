import math

list = [8, 9, 10, 1, 2]

def binary_search(list, query, a, b):
  middle = a + math.floor((b - a) / 2)
  if list[middle] == query:
    return middle
  if b - a == 0:
    return -1
  if list[a] < list[middle] and query >= list[a]:
    return binary_search(list, query, a, middle - 1)
  return binary_search(list, query, middle + 1, b)

for i in list:
  print(i, binary_search(list, i, 0, len(list) - 1))
