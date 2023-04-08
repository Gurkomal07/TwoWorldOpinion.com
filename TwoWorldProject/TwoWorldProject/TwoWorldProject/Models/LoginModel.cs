
using System.ComponentModel.DataAnnotations;

namespace TwoWorldProject.Models
{
    public class LoginModel
    {
		public string Username { get; set; }
		[Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
		
		public string ConfirmPassword { get; set; }
		public string FullName { get; set; }
		public int Age { get; set; }
		public string City { get; set; }
		public string PostalCode { get; set; }
		public string Gender { get; set; }
	}
}