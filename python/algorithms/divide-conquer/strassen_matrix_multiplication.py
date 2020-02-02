def brute_force(A, B):
  n = len(A)
  C = []
  for i in range(n):
    C.append([])
    for j in range(n):
      C[i].append(0)
      for k in range(n):
        C[i][j] = C[i][j] + A[i][k] * B[i][k]
  return C

print(brute_force([[2, 2], [2, 2]], [[2, 2], [2, 2]]))
