// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/

public class DnaStrand 
    {
        public static string MakeComplement(string dna)
        {
          string result = "";
          for (int i = 0; i < dna.Length; i++) {
            switch (dna[i]) {
              case 'T':
                result += 'A';
                break;
              case 'A':
                result += 'T';
                break;
              case 'G':
                result += 'C';
                break;
              case 'C':
                result += 'G';
                break;
            }
          }
          return result;
        }
    }
