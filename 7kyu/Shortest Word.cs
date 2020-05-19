// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

using System;

public class Kata
{
  public static int FindShort(string s)
  {  
    int length = 100;
    string[] words = s.Split();
    foreach (string word in words) {
      int l = word.Length;
      if (l < length) length = l;
    }
    return length;
  }
}