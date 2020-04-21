using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ExpertWebAPI.Models;


namespace ExpertWebAPI.Services
{
    public class ItemService
    {
        public static List<CollectionItem> GetItems(collectorEntities DB)
        {
            return DB.CollectionItems.ToList();
        }
    }
}