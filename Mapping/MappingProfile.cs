using AutoMapper;
using Copy.ClientApp.app.Models;

namespace BPO.Mapping
{
    //public class MappingProfile
    public class MappingProfile:Profile
    {
        public MappingProfile()
        {

            //Domain to API Resources 
             CreateMap<receipe,SaveRecipe>();


            // // //API Resource to Domain
              CreateMap<SaveRecipe,receipe>();
           
        }
    }
}
