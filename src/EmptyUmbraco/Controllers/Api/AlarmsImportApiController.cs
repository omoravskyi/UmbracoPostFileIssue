using System;
using System.Net;
using System.Web;
using System.Web.Http;
using Umbraco.Web.WebApi;

namespace MyDrivePortfolio.Server.Umbraco.Controllers.Api
{
    public sealed class AlarmsImportApiController : UmbracoApiController
    {
        public AlarmsImportApiController() { }

        [HttpPost]
        public IHttpActionResult ImportAlarms(String culture)
        {
            HttpRequestBase httpRequest = UmbracoContext.HttpContext.Request;
            if (httpRequest.Files.Count == 0)
            {
                return StatusCode(HttpStatusCode.BadRequest);
            }
            return StatusCode(HttpStatusCode.OK);
        }
    }
}