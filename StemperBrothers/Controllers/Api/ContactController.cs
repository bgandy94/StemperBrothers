using StempBros.Models;
using System;
using System.Collections.Generic;
using System.Web.Configuration;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;

namespace StemperBrothers.Controllers.Api
{
    [RoutePrefix("api/contact")]
    public class ContactController : ApiController
    {
        [Route("sendmail")]
       public IHttpActionResult SendMail(Email mail)
        {
            var context = new ValidationContext(mail, serviceProvider: null, items: null);
            var results = new List<ValidationResult>();
            var fromEmail = new MailAddress(WebConfigurationManager.AppSettings["emailFromUsername"]);
            var toEmail = new MailAddress(WebConfigurationManager.AppSettings["emailToUsername"]);
            var isValid = Validator.TryValidateObject(mail, context, results);
            if (isValid)
            {
                MailMessage email = new MailMessage();
                email.Subject = "Website Contact Form Submission";
                email.From = fromEmail;
                email.To.Add(toEmail);
                email.IsBodyHtml = true;
                email.Body =
                    "Sender Name: " + mail.Name + "<br />" +
                    "Sender Email: " + mail.EmailAddress + "<br />" +
                    "Sender Question: " + mail.Question + "<br /> <br />" +
                    "This message was submitted via the website.";
                SmtpClient smtp = new SmtpClient
                {
                    Host = "smtp.gmail.com",
                    UseDefaultCredentials = false,
                    Credentials = new NetworkCredential(fromEmail.ToString(), WebConfigurationManager.AppSettings["emailPassword"]),
                    EnableSsl = true,
                    Port = 587
                };
                try
                {
                    smtp.Send(email);
                }
                catch (Exception ex)
                {
                    return Ok(new List<ValidationResult> { new ValidationResult("An error occurred. Try again later.") });
                }

            return Ok("Success");
            }

            return Ok(results);
        }
    }
}