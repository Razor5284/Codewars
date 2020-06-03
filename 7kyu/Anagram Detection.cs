// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/

using System;

public class Kata
{
  public static bool IsAnagram(string test, string original)
  {
    test = test.ToLower();
    for (int i = 0; i < original.Length; i++) {
      var o = Char.ToLower(original[i]);
      if (test.Contains(o)) {
        test = test.Remove(test.IndexOf(o), 1);
        if (test.Length == 0) return true;
      }
      else return false;
    }
    return false;
  }
}
