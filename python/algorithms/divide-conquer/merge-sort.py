#!/usr/local/bin/python
# -*- coding: utf-8 -*-
import math

list = [5, 2, 4, 6, 1, 3]

# p <= q < r
def merge(list, p, q, r):
  # Prepare lists
  n1  = q - p # First element of the first list
  n2 = r - q # First element of the second list
  L = list[p: q+1]
  L.append(math.inf)
  R = list[q+1: r+1]
  R.append(math.inf)

  # Let's merge!
  i = 0
  j = 0
  for k in range(p, r + 1):
    if L[i] <= R[j]:
      list[k] = L[i]
      i += 1
    else:
      list[k] = R[j]
      j += 1

def merge_without_sentinel(list, p, q, r):
  # Prepare lists
  n1  = q - p # First element of the first list
  n2 = r - q # First element of the second list
  L = list[p: q+1]
  R = list[q+1: r+1]

  # Let's merge!
  i = 0
  j = 0
  for k in range(p, r):
    if L[i] <= R[j]:
      list[k] = L[i]
      i += 1
      if i == len(L):
        break;
    else:
      list[k] = R[j]
      j += 1
      if j == len(R):
        break;
  for i in L[i:] + R[j:]:
    list[k + 1] = i
    k += 1

def merge_sort(list, p, r):
  if p < r:
    q =  math.floor((p + r) / 2)
    merge_sort(list, p, q)
    merge_sort(list, q + 1, r)
    merge_without_sentinel(list, p, q, r)

merge_sort(list, 0, len(list) - 1)
print(list)
