using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Http.Cors;
using ExpertWebAPI.Models;
using ExpertWebAPI.Services;
using Newtonsoft.Json.Linq;

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
                var item = ItemService.GetItemByBarcodeAndUser(DB, jsonObject.upcCode.ToString(), (int)jsonObject.userID);
                if (item == null)
                {
                    ItemService.PostItem(DB, jsonObject);
                }
                else
                {
                    return Json(new { success = false });
                }
            }
            return Json(new { success = true });
        }

        [HttpPost]
        [ActionName("PostBarcode")]
        [Route("api/api/PostBarcode")]
        public IHttpActionResult PostBarcode([FromBody] dynamic jsonObject)
        {
            using(var DB = new collectorEntities1())
            {
                ItemService.PostBarcodeItem(DB, jsonObject);
            }
            return Json(new { success = true });
        }

        [HttpGet]
        [ActionName("GetBarcodeItem")]
        public IHttpActionResult GetBarcodeItem(string barcode)
        {
            BarcodeItem item = new BarcodeItem();
            dynamic item_attributes = new JObject();
            dynamic item_response = new JObject();

            using (var DB = new collectorEntities1())
            {
                item = ItemService.GetBarcodeItem(DB, barcode);
            }

            if(item != null)
            {
                item_attributes.title = item.Title;
                item_attributes.upc = item.Upc;
                item_attributes.ean = item.Ean;
                item_attributes.category = item.Category;
                item_attributes.model = item.Model;
                item_attributes.manufacturer = item.Manufacturer;
                item_attributes.description = item.Description;

                item_response.code = 200;

                return Json(new {item_response, item_attributes, success = true });
            }
            else
            {
                item_response = new JObject();
                item_response.code = 404;
                return Json(new { success = false });
            }
        }
    }
}
