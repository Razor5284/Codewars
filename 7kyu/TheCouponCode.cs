// https://www.codewars.com/kata/539de388a540db7fec000642/

using System;

public static class Kata
{
  public static bool CheckCoupon(string enteredCode, string correctCode, string currentDate, string expirationDate) {    
    if (enteredCode == correctCode) {
      DateTime cDate = Convert.ToDateTime(currentDate);
      DateTime eDate = Convert.ToDateTime(expirationDate);
      if (DateTime.Compare(cDate, eDate) <= 0) return true;
    }
    return false;
  }
}
