// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/

public static class Kata
{
  public static string RemoveUrlAnchor(string url)
  {
    for (int i = 0; i < url.Length; i++) {
      if (url[i] == '#') return url.Substring(0, i);
    }
    return url;
  }
}
