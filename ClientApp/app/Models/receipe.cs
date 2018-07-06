using System;

namespace Copy.ClientApp.app.Models
{
    public class receipe
    {
         public int id { get; set; }
         public string title { get; set; }
         public string description { get; set; }
        public Nullable<System.DateTime> CreateDate { get; set; }
    }
}