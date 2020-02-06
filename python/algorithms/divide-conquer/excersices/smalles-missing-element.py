#!/usr/local/bin/python
# -*- coding: utf-8 -*-
import math


def binary_search(list, a, b):
    if b < 0:
      return 0
    middle = a + math.floor((b - a) / 2)
    if b - a == 0:
      return a + 1
    if middle == list[middle]:
      return binary_search(list, middle + 1, b)
    if middle < list[middle]:
      return binary_search(list, a, middle - 1)
    else:
      return a


for i in [
  [0, 1, 2, 6, 9, 11, 15],
  [0, 1, 2, 3, 4, 5, 6],
  [1, 2, 3, 4, 5, 6],
  [0, 1, 2, 3, 4, 5, 6, 7, 8]
]:
  print(i, binary_search(i, 0, len(i) - 1))
