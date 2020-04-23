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

namespace ExpertWebAPI.Controllers
{
    [EnableCors(origins: "https://expertcollector.azurewebsites.net", headers: "*", methods: "*")]
    public class APIController : ApiController
    {
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
