# You will have a A[0 ... j-1] sorted elements at the time
# 1. Find wheres the place of the j item into the sorted array from right to left

def insertion_sort(list):                     # Time cost
  for j in range(1, len(list)):               # n
    key = list[j]                             # n - 1
    i = j - 1                                 # n - 1
    while i >= 0 and list[i] > key:           # E(0 --> n-1) tj
      list[i + 1] = list[i]                   # E(0 --> n-1) (tj - 1)
      i = i - 1                               # E(0 --> n-1) (tj - 1)
    list[i + 1] = key                         # n - 1
  return list
# T(n) = n + 3(n-1) + E(0 --> n-1) tj + 2(E(0 --> n-1) (tj - 1))
# T(n) = an^2 + bn + c --> O(n^2) (Theta of n-squared)

def insertion_sort_reversed(list):
  for j in range(1, len(list)):
    key = list[j]
    # Insert key into the sorted sequence list[1... j - 1]
    i = j - 1
    while i >= 0 and list[i] < key:
      list[i + 1] = list[i]
      i = i - 1
    list[i + 1] = key
  return list


def insertion_sort_divide_conquer(list, p):
  if p > 0:
    insertion_sort_divide_conquer(list, p -1)
    key = list[p]
    i = p - 1
    while i >= 0 and list[i] > key:
      list[i + 1] = list[i]
      i = i - 1
    list[i + 1] = key
    return list

# Time: O(n^2)  Space: O(1)
list = [5, 2, 4, 6, 1, 3]
print(insertion_sort(list))
list = [5, 2, 4, 6, 1, 3]
print(insertion_sort_reversed(list))
list = [5, 2, 4, 6, 1, 3]
print(insertion_sort_divide_conquer(list, len(list) - 1))
