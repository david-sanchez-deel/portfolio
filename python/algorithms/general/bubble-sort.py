def bubble_sort(list):                     # Time cost
  for i in range(0, len(list)):
    for j in range(len(list) - 1, i, -1):
      if list[j] < list[j-1]:
        aux = list[j]
        list[j] = list[j - 1]
        list[j - 1] = aux
  return list

list = [5, 2, 4, 6, 1, 3]
print(bubble_sort(list))
