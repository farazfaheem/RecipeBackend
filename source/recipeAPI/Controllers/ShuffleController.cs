using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using recipeAPI.Models;

namespace recipeAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ShuffleController : ControllerBase
    {        
        private readonly ILogger<ShuffleController> _logger;
        public ShuffleController(ILogger<ShuffleController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Recipe> Get()
        {
            var list = GetRecipes();
            return ReservoirSampler(list, 5);
        }

        private static IList<Recipe> GetRecipes()
        {
            var list = new List<Recipe>();
            for (int i = 0; i < 6; i++)
            {
                list.Add(new Recipe() { Name = $"Recipe{i}" });
            }            
            return list;
        }

        public static IList<T> ReservoirSampler<T>(IEnumerable<T> arr, int k)
        {
            if (arr == null)
            {
                throw new ArgumentNullException();
            }
            if (k <= 1 || k > arr.Count())
            {
                throw new ArgumentOutOfRangeException();
            }
            var list = arr.ToList();
            var samples = new List<T>();
            int n = 0;

            var random = new Random();

            foreach (var item in list)
            {
                n++;
                if (samples.Count < k)
                {
                    samples.Add(item);
                }
                else
                {
                    var s = random.Next(n);
                    if (s < k)
                    {
                        samples[s] = item;
                    }
                }
            }

            return samples;
        }
    }
}
