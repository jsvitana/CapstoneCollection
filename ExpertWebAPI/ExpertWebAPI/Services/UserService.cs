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
        public static User GetUser(collectorEntities1 DB, string userName)
        {
            return DB.Users.Where(u => u.Username == userName).FirstOrDefault();
        }

        public static bool VerifyLogin(collectorEntities1 DB, string password, User user)
        {
            password = Utils.sha256(password + user.ID);
            if (password == user.Password)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public static void CreateUser(collectorEntities1 DB,string username, string password, string displayName)
        {
            User user = new User()
            {
                Username = username,
                DisplayName = displayName
            };

            DB.Users.Add(user);

            DB.SaveChanges();

            SetPassword(DB, password);
        }
        
        public static void SetPassword(collectorEntities1 DB, string password)
        {
            var user = DB.Users.OrderByDescending(u => u.ID).FirstOrDefault();
            password = Utils.sha256(password + user.ID);
            user.Password = password;
            DB.SaveChanges();
        }
    }
}