// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

using System; 
namespace Solution
{
  class Kata
    {
      public static int binaryArrayToNumber(int[] BinaryArray)
        {
          return Convert.ToInt32(string.Join("", BinaryArray), 2);
        }
    }
}