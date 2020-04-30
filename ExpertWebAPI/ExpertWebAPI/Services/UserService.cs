using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ExpertWebAPI.Classes;
using ExpertWebAPI.Models;

namespace ExpertWebAPI.Services
{
    public class UserService
    {
        public static User GetUser(collectorEntities1 DB,string userName)
        {
            return DB.Users.Where(u => u.Username == userName).FirstOrDefault();
        }

        public static bool VerifyLogin(collectorEntities1 DB, string password, User user)
        {
            password = Utils.sha256(password + user.ID);
            if(password == user.Password)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}