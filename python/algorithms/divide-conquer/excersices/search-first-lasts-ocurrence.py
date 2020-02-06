#!/usr/local/bin/python
# -*- coding: utf-8 -*-
import math

list = [2, 5, 5, 5, 6, 6, 8, 9, 9, 9]

def first_ocurrence(list, query, a, b):
  middle = a + math.floor((b - a) / 2)
  if b - a == 0:
    return a if query == list[middle] else math.inf
  if query == list[middle]:
    return min(middle, first_ocurrence(list, query, a, middle - 1))
  if query < list[middle]:
    return first_ocurrence(list, query, a, middle - 1)
  if query > list[middle]:
    return first_ocurrence(list, query, middle + 1, b)


def last_ocurrence(list, query, a, b):
  middle = a + math.floor((b - a) / 2)
  if b - a == 0:
    return a if query == list[middle] else -1
  if query == list[middle]:
    return max(middle, last_ocurrence(list, query, middle + 1, b))
  if query < list[middle]:
    return last_ocurrence(list, query, a, middle - 1)
  if query > list[middle]:
    return last_ocurrence(list, query, middle + 1, b)

def occurrences(list, query):
  first = first_ocurrence(list, i, 0, len(list) - 1)
  last = last_ocurrence(list, i, 0, len(list) - 1)
  return last - first + 1
print('First ocurrence')
for i in list:
  print(i, first_ocurrence(list, i, 0, len(list) - 1))
print('Last ocurrence')
for i in list:
  print(i, last_ocurrence(list, i, 0, len(list) - 1))
print('ocurrences')
for i in list:
  print(i, occurrences(list, i))
