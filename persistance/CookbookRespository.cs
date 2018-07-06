using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Copy.ClientApp.app.Models;
using BPO.persistance;
using System;
using System.Collections.Generic;

namespace BPO.persistance
{
    public class CookbookRepository : ICookbookRepository
    {
        private readonly BpoDbcontext context;

        public CookbookRepository(BpoDbcontext context)
        {
            this.context = context;

        }

        public void Createreceipe([FromBody] receipe receipe)
        {
             context.receipe.Add(receipe);
        }

        public async Task<IEnumerable<receipe>> Getallreceipes()
        {
            return await context.receipe.ToListAsync();
        }

        public async Task<receipe> Getreceipes(int id)
        {
          return await context.receipe.FindAsync(id);
        }

        public void Updatereceipe(int id, [FromBody] receipe receipe)
        {
           context.Entry(receipe).State=EntityState.Modified;
        }


        
    }
}