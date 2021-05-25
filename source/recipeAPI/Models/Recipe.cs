using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace recipeAPI.Models
{
    public class Recipe
    {
        public string Name { get; set; }
        public int CookingTime { get; set; }
        public string Description { get; set; }
    }
}
