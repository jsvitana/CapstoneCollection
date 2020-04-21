using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ExpertWebAPI.Models;
using ExpertWebAPI.Services;

namespace ExpertWebAPI.Controllers
{
    public class APIController : ApiController
    {
        // /api/api/GetItems
        [ActionName("GetItems")]
        public IHttpActionResult GetItems()
        {
            List<CollectionItem> allItems = new List<CollectionItem>();

            using (var DB = new collectorEntities())
            {
                allItems = ItemService.GetItems(DB);
            }

            return Json(new { item = allItems });
        }
    }
}
