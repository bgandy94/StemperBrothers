using System.ComponentModel.DataAnnotations;


namespace StempBros.Models
{
    public class Email
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string EmailAddress { get; set; }

        [Required]
        public string Question { get; set; }
    }
}