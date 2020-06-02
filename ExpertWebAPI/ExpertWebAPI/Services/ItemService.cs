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

        public static void PostBarcodeItem(collectorEntities1 DB, dynamic jsonItem)   // Needs checked because barcodes add a 13 char
        {
            BarcodeItem item = new BarcodeItem()
            {
                Upc = jsonItem.upc,
                Ean = jsonItem.ean,
                Category = jsonItem.category,
                Brand = jsonItem.brand,
                Model = jsonItem.model,
                Manufacturer = jsonItem.manufacturer,
                Description = jsonItem.description,
                Title = jsonItem.title
            };

            DB.BarcodeItems.Add(item);
            DB.SaveChanges();
        }

        public static BarcodeItem GetBarcodeItem(collectorEntities1 DB, string barcode)
        {
            return DB.BarcodeItems.Where(b => b.Upc == barcode).FirstOrDefault();
        }

        public static CollectionItem GetItemByBarcodeAndUser(collectorEntities1 DB, string barcode, int userID)
        {
            var userItems = DB.CollectionItems.Where(i => i.UserID == userID).ToList();
            return userItems.Where(b => b.UPC == barcode).FirstOrDefault();
        }
    }
}