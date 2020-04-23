using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ExpertWebAPI.Models;
using ExpertWebAPI.Services;

namespace ExpertWebAPI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            using(var DB = new collectorEntities1())
            {
                ViewBag.Items = ItemService.GetItems(DB);
            }

            return View();
        }
    }
}
