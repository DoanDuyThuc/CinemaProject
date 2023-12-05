
using System.Net;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace CinemaProject.ExtendMethods
{
    public static class AppExtend
    {
        public static void AddStatusCodePage(this IApplicationBuilder app){
            app.UseStatusCodePages(appError => {
            appError.Run(async context => {
                var respone = context.Response;
                var code = respone.StatusCode;

                var content = @$"<html>
                    <head>
                        <meta charset='UTF-8' />
                        <title>Lỗi {code}</title>
                        <body>
                            <p>
                                có lỗi xảy ra {code} - {(HttpStatusCode)code}
                            </p>
                        </body>
                    </head>
                </html>";

                await respone.WriteAsync(content);
            });
        });
        }

         public static string IsActive(this IHtmlHelper htmlHelper, string controller, string action)
            {
                var routeData = htmlHelper.ViewContext.RouteData;

                var routeAction = routeData.Values["action"].ToString();
                var routeController = routeData.Values["controller"].ToString();

                var returnActive = (controller == routeController && action == routeAction);

                return returnActive ? "active" : "";
            }
        
    }
    
}