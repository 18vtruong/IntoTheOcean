
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.IO;

class Program
{
    static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

       

        var app = builder.Build();

        // Configure middleware to serve static files (HTML, CSS, JavaScript).
        app.UseStaticFiles();

        // Configure the default route to serve your HTML file.
        app.MapGet("/", async context =>
        {
            // Read the HTML file from the wwwroot folder.
            var htmlContent = await File.ReadAllTextAsync("wwwroot/index.html");

            // Send the HTML content as the response.
            context.Response.ContentType = "text/html";
            await context.Response.WriteAsync(htmlContent);
        });

        app.Run();
    }
}

