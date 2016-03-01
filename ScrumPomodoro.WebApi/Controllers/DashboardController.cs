using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ScrumPomodoro.WebApi.Models;

namespace ScrumPomodoro.WebApi.Controllers
{
    [RoutePrefix("api/dashboard")]
    public class DashboardController : ApiController
    {
        [Authorize]
        [Route("")]
        public IHttpActionResult Get()
        {
            return Ok(new List<Pomodoro> { new Pomodoro { Title = "Implement your app."} });
        }
    }
}
