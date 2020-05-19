// https://www.codewars.com/kata/55b42574ff091733d900002f

using System.Linq;
using System.Collections.Generic;

public static class Kata {
  public static IEnumerable<string> FriendOrFoe (string[] names) {
    return names.Where(name => name.Length == 4);
  }
}