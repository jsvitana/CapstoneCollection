using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;
using ExpertWebAPI.Models;


namespace ExpertWebAPI.Services
{
    public class ItemService
    {
        public static List<CollectionItem> GetItems(collectorEntities1 DB)
        {
            return DB.CollectionItems.ToList();
        }

        public static void PostItem(collectorEntities1 DB, dynamic jsonItem)
        {
            CollectionItem item = new CollectionItem();

            item.ItemName = jsonItem.itemName;
            item.UPC = jsonItem.upcCode;

            DB.CollectionItems.Add(item);
            DB.SaveChanges();
        }
    }
}