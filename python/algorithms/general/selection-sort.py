#


list = [5, 2, 4, 6, 1, 3]

def selection_sort(list):               # Time
  for j in range(0, len(list) - 1):     # n - 1
    key = list[j]                       # n - 1
    min = j                             # n - 1
    for i in range(j + 1, len(list)):   # E(j+1 --> n) 2(n-j)
      if list[i] < list[min]:
        min = i
    aux = list[j]                       # n - 1
    list[j] = list[min]                 # n - 1
    list[min] = aux                     # n - 1
  return list
# Time: O(n^2)  Space: O(1)

print(selection_sort(list))
