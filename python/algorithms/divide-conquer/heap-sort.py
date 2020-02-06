import math

def left(i):
  return i * 2

def parent(i):
  return math.floor(i/2)

def right(i):
  return (i * 2) + 1

def max_heapify(A, i, heap_size):
  l = left(i + 1) - 1
  r = right(i + 1) - 1
  if l < heap_size and A[l] > A[i]:
    largest = l
  else:
    largest = i
  if r < heap_size and A[r] > A[largest]:
    largest = r
  if largest != i:
    aux = A[i]
    A[i] = A[largest]
    A[largest] = aux
    max_heapify(A, largest, heap_size)

def min_heapify(A, i, heap_size):
  l = left(i+ 1) - 1
  r = right(i + 1) - 1
  if l < heap_size and A[l] < A[i]:
    lowest = l
  else:
    lowest = i
  if r < heap_size and A[r] < A[lowest]:
    lowest = r
  if lowest != i:
    aux = A[i]
    A[i] = A[lowest]
    A[lowest] = aux
    min_heapify(A, lowest, heap_size)

def build_max_heap(A, heap_size):
  for i in range(math.floor(len(A) / 2), -1, -1):
    max_heapify(A, i, heap_size)
  return A

def build_min_heap(A):
  heap_size = len(A)
  for i in range(math.floor(len(A) / 2), -1, -1):
    min_heapify(A, i, heap_size)
  return A

def heapsort(A):
  heap_size = len(A)
  build_max_heap(A,heap_size)
  for i in range(len(A) - 1, 0, -1):
    aux = A[i]
    A[i] = A[0]
    A[0] = aux
    heap_size -= 1
    max_heapify(A, 0, heap_size)
  return A

for i in [
  [1, 2, 3, 4],
  [4, 3, 2, 1],
  [6, 4, 2, 1, 3, 7, 0]
]:
  print(i, build_max_heap(i, len(i)), build_min_heap(i), heapsort(i))
