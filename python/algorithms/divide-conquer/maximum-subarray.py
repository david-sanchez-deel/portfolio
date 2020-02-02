import math
from timeit import default_timer as timer
import numpy as np


def find_max_crossing_subarray(A, p, q, r):
  left_sum = -math.inf
  sum = 0
  max_left = 0
  for i in range(q, p - 1, -1):
    sum = sum + A[i]
    if sum > left_sum:
      left_sum = sum
      max_left = i

  right_sum = -math.inf
  sum = 0
  max_right = 0
  for j in range(q + 1, r):
    sum = sum + A[j]
    if sum > right_sum:
      right_sum = sum
      max_right = j
  return max_left, max_right, left_sum + right_sum

def find_maximum_subarray(A, p, r):
  if p == r:
    return p, r, A[p]
  middle = p + math.floor((r-p) / 2)
  lp, lq, ls = find_maximum_subarray(A, p, middle)
  rp, rq, rs = find_maximum_subarray(A, middle + 1, r)
  mp, mq, ms = find_max_crossing_subarray(A, p, middle, r)
  maxs = max(ls, rs, ms)
  if maxs == ls:
    return lp, lq, ls
  if maxs == rs:
    return rp, rq, rs
  return mp, mq, ms

def find_maximum_subarray_lineal_time(A):
  result  = []
  sum = 0
  max = 0
  r = 0
  p  = 0
  for i in range(0, len(A)):
    result.append(0)
    sum += A[i]
    if sum > 0:
      result[i] = sum
      if sum > max:
        max = sum
        r = i
        if i > 0 and result[i - 1] == 0:
          p = i
    else:
      sum = 0

  return p, r, result[r]
A = [13, -3, -25, -20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]
print(find_maximum_subarray(A, 0, len(A) - 1))
A = [-1, -1, -1]
print(find_maximum_subarray(A, 0, len(A) - 1))
print('Lineal mode')
A = [13, -3, -25, -20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]
print(find_maximum_subarray_lineal_time(A))
A = [-1, -1, -1]
print(find_maximum_subarray_lineal_time(A))
print('-----Testing-----')
print('Scenarios\tLineal\tDivide&Conquer')
for i in range(4, 10):
  tests = 10**i
  print(tests)
  A = np.random.randint(-1000, 1000,tests)
  start = timer()
  find_maximum_subarray_lineal_time(A)
  end = timer()
  lineal = end - start
  print('\t\t', int(lineal))

  start = timer()
  find_maximum_subarray(A, 0, len(A) - 1)
  end = timer()
  divide = end - start

  print('\t\t\t', int(divide))
