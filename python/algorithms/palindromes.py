def expand(str, low, high, palindromesSet):
  print(str, low, high)
  while low >= 0 and high < len(str) and str[low] == str[high]:
    palindromesSet.add(str[low:high - 1]);
    low-=1;
    high+=1;

def allPalindromicSubStrings(str):
  palindromesSet = set()
  for i in range(0 , len(str)):
    expand(str, i, i, palindromesSet)
    expand(str, i, i + 1, palindromesSet)

  print(palindromesSet)

str = "google"
allPalindromicSubStrings(str)
