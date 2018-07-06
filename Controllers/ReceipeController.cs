using Microsoft.AspNetCore.Mvc;
using BPO.persistance;
using AutoMapper;
using Copy.ClientApp.app.Models;
using System.Threading.Tasks;
using System;

namespace BPO.Controllers
{
    [Route("/api/cookbook")]
    public class ReceipeController : Controller
    {
        private readonly BpoDbcontext context;
        private readonly IUnitofWork unitofWork;
        private readonly IMapper mapper;
        private readonly ICookbookRepository CookbookRepository;

        public ReceipeController(IMapper mapper, BpoDbcontext context, ICookbookRepository CookbookRepository, IUnitofWork unitofWork)
        {
            this.CookbookRepository = CookbookRepository;
            this.mapper = mapper;
            this.context = context;
            this.unitofWork = unitofWork;
        }

          [HttpGet("getrecipes")]
        public async Task<IActionResult> Getallreceipes()
        {
            var recipes = await CookbookRepository.Getallreceipes();
            if (recipes == null)
                return NotFound();
            return Ok(recipes);
        }


        [HttpGet("{Id}")]
        public async Task<IActionResult> Getreceipes(int id)
        {
            var receipe = await CookbookRepository.Getreceipes(id);
            if (receipe == null)
                return NotFound();
            return Ok(receipe);
        }


        [HttpPost("CreateRecipe")]
        public async Task<IActionResult> Createreceipe([FromBody] SaveRecipe saveRecipe)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest();
                var receipe = mapper.Map<SaveRecipe, receipe>(saveRecipe);
                receipe.CreateDate = DateTime.Now;
                CookbookRepository.Createreceipe(receipe);
                await unitofWork.Complete();
                return Ok();

            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }


        [HttpPut("{Id}")]
        public async Task<IActionResult> Updatereceipe(int id, [FromBody] SaveRecipe saveRecipe)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
            var recipe = await CookbookRepository.Getreceipes(id);
            if (recipe == null)
                return NotFound();
            mapper.Map<SaveRecipe, receipe>(saveRecipe,recipe);
            recipe.CreateDate = DateTime.Now;
            await unitofWork.Complete();
            recipe = await CookbookRepository.Getreceipes(recipe.id);
            var result = mapper.Map<receipe,SaveRecipe>(recipe);
            return Ok(result);
        }


        // [HttpDelete("{Id}")]
        // public async Task<IActionResult> DeleteplantInformation(int id, [FromBody] plant_information plant_information)
        // {
        //     if (!ModelState.IsValid)
        //         return BadRequest(ModelState);
        //     plant_information = await CookbookRepository.GetplantInformation(id);
        //     if (plant_information == null)
        //         return NotFound();
        //     CookbookRepository.DeleteplantInformation(plant_information);
        //     await unitofWork.Complete();
        //     return Ok(id);
        // }

    }
}