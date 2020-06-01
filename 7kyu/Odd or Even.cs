// https://www.codewars.com/kata/5949481f86420f59480000e7/

using System.Linq;

public class Kata
{
  public static string OddOrEven(int[] array) {
    return array.Sum() % 2 == 0 ? "even" : "odd";
  }
}
