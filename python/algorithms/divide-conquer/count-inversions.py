#!/usr/local/bin/python
# -*- coding: utf-8 -*-
import math

list = [2, 3, 8, 6, 1]

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
  inversions = 0
  for k in range(p, r + 1):
    if L[i] <= R[j]:
      list[k] = L[i]
      i += 1
    else:
      list[k] = R[j]
      j += 1
      inversions += 1
  return inversions

def count_inversions(list, p, r):
  if p < r:
    q =  math.floor((p + r) / 2)
    return count_inversions(list, p, q) + count_inversions(list, q + 1, r) + merge(list, p, q, r)
  return 0

print(count_inversions(list, 0, len(list) - 1))
