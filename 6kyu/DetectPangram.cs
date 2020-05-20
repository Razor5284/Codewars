// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/

using System;
using System.Linq;

public static class Kata
{
  public static bool IsPangram(string str) {
    if (str.Length < 25) return false;
    
    string alphabet = "abcdefghijklmnopqrstuvwxyz";

    foreach (char c in alphabet) {
      if (str.ToLower().Contains(c)) continue;
      else return false;
    };
    return true;
  }
}
