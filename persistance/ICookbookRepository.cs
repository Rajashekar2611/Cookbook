using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Copy.ClientApp.app.Models;
using System.Collections.Generic;

namespace BPO.persistance
{
    public interface ICookbookRepository
    {
     Task<IEnumerable<receipe>> Getallreceipes();

          Task<receipe> Getreceipes(int id);
        //   Task<plant_information> DriverLogin([FromBody] plant_information plant_information);
         void Createreceipe([FromBody] receipe plant_information);
         void Updatereceipe(int id, [FromBody] receipe plant_information);
    }
}