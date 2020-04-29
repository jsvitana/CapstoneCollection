﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Http.Cors;
using ExpertWebAPI.Models;
using ExpertWebAPI.Services;

namespace ExpertWebAPI.Controllers
{
    [EnableCors(origins: "https://xpertcollector.azurewebsites.net", headers: "*", methods: "*")]
    public class APIController : ApiController
    {
        [HttpGet]
        [ActionName("login")]
        public IHttpActionResult GetLogin(string username, string password)
        {
            User user = new User();
            bool validLogin = false;

            using (var DB = new collectorEntities1())
            {
                user = UserService.GetUser(DB, username);
                validLogin = UserService.VerifyLogin(DB, password, user);
            }

            if (validLogin)
            {
                return Json(new { login = validLogin, userID = user.ID, username = user.Username, userDisplayName = user.DisplayName });
            }
            else
            {
                return Json(new { login = validLogin });
            }
        }

        // /api/api/GetItems
        [HttpGet]
        [ActionName("GetItems")]
        public IHttpActionResult GetItems()
        {
            List<CollectionItem> allItems = new List<CollectionItem>();

            using (var DB = new collectorEntities1())
            {
                allItems = ItemService.GetItems(DB);
            }

            return Json(new { item = allItems });
        }

        [HttpGet]
        [ActionName("GetUserItems")]
        public IHttpActionResult GetUserItems(int userID)
        {
            List<CollectionItem> userItems = new List<CollectionItem>();

            using(var DB = new collectorEntities1())
            {
                userItems = ItemService.GetUserItems(DB, userID);
            }

            return Json(new { userItems });
        }

        [HttpPost]
        [ActionName("PostItem")]
        public IHttpActionResult PostItem([FromBody] dynamic jsonObject )
        {

            using (var DB = new collectorEntities1())
            {
                ItemService.PostItem(DB,jsonObject);
            }
            return Json(new { success = true });
        }
    }
}
