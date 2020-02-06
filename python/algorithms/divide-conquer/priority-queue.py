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

def build_max_heap(A, heap_size):
  for i in range(math.floor(len(A) / 2), -1, -1):
    max_heapify(A, i, heap_size)
  return A

def heap_maximun(A):
  return A[0]

def heap_extract_max(A, heap_size):
  if heap_size < 1:
    print('Error')
  max = A[0]
  A[0] = A[heap_size - 1]
  heap_size -= 1
  max_heapify(A, 0, heap_size)
  return max

def heap_increase_key(A, i, key):
  if key < A[i]:
    return print('Error')
  A[i] = key
  parent_i = parent(i + 1) - 1
  while i > 0 and A[parent_i] < A[i]:
    aux = A[i]
    A[i] = A[parent_i]
    A[parent_i] = aux
    i = parent_i
    parent_i = parent(i + 1) - 1
  return A

def max_heap_insert(A, key):
  A.append(-math.inf)
  return heap_increase_key(A, len(A) - 1, key)

A = [6, 4, 2, 1, 3, 7, 0]
print("A", A)
heap = build_max_heap(A, len(A))
print("Heap", heap)
print("Increase Key", heap_increase_key(heap, 3, 8))
print("Insert key", max_heap_insert(heap, 10))
print("Extract max", heap_extract_max(A, len(A)), A)
