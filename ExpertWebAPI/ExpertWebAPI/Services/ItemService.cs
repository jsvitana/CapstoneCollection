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
            item.UserID = jsonItem.userID;

            DB.CollectionItems.Add(item);
            DB.SaveChanges();
        }

        public static List<CollectionItem> GetUserItems(collectorEntities1 DB, int userID)
        {
            return DB.CollectionItems.Where(i => i.UserID == userID).ToList();
        }
    }
}