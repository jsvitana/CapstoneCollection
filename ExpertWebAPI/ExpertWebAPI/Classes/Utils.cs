using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;

namespace ExpertWebAPI.Classes
{
    public class Utils
    {
        public static string sha256(string password)
        {
            var crypt = new System.Security.Cryptography.SHA256Managed();
            var hash = new StringBuilder();
            byte[] crypto = crypt.ComputeHash(Encoding.UTF8.GetBytes(password));
            foreach(byte theByte in crypto)
            {
                hash.Append(theByte.ToString("x2"));
            }
            return hash.ToString();
        }
    }
}