---
path: "/asp-net-core"
date: "2017-07-12T17:12:33.962Z"
title: "ASP.NET Core"
---

>ASP. NET Core is a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications.

## Features:
## MVC
The Model-View-Controller (MVC) pattern helps make your web APIs and web apps testable.

## Razor
Razor Pages is a page-based programming model that makes building web UI easier and more productive. Razor syntax provides a productive language for Razor Pages and MVC Views.

## Tag Helpers
Tag Helpers enable server-side code to participate in creating and rendering HTML elements in Razor files.

##  multiple data formats and content negotiation 
Built-in support for multiple data formats and content negotiation lets your web APIs reach a broad range of clients, including browsers and mobile devices.

# Model Binding
Model Binding automatically maps data from HTTP requests to action method parameters.

#Model Validation
Model Validation automatically performs client and server-side validation.

## Code sample
```CSharp
using Microsoft.AspNetCore.Mvc;
using System.Text.Encodings.Web;

namespace MvcMovie.Controllers
{
    public class HelloWorldController : Controller
    {
        // 
        // GET: /HelloWorld/

        public string Index()
        {
            return "This is my default action...";
        }

        // 
        // GET: /HelloWorld/Welcome/ 

        public string Welcome()
        {
            return "This is the Welcome action method...";
        }
    }
}
```
