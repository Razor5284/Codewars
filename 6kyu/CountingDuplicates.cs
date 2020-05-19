// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/

using System;

public class Kata
{
  public static int DuplicateCount(string str)
  {
    int count = 0;
    str = str.ToLower();
    for (int i = 0; i < str.Length; i++) {
      string s = str.Substring(i+1);
      if (s.Contains(str[i])) {
        str = str.Replace(str[i], ' ').Replace(" ", "");
        count++;
        i--;
      };
    };
    return count;
  }
}
