using Microsoft.AspNetCore.Mvc;

namespace Epic.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Portfolio()
        {
            return View();
        }
    }
}
