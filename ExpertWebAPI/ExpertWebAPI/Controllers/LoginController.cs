using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ExpertWebAPI.Services;
using ExpertWebAPI.Models;

namespace ExpertWebAPI.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Register()
        {
            return View();
        }

        public ActionResult AddUser(string username, string password, string displayName)
        {
            User user = new User();
            using(var DB = new collectorEntities1())
            {
                user = UserService.GetUser(DB, username);
                if(user != null)
                {
                    return RedirectToAction("RegisterConfirm", new { nameTaken = true});
                }
                UserService.CreateUser(DB, username, password, displayName);
            }

            return RedirectToAction("RegisterConfirm");
        }

        public ActionResult RegisterConfirm(bool nameTaken = false)
        {
            ViewBag.NameTaken = nameTaken;
            return View();
        }
    }
}