using System.ComponentModel.DataAnnotations;

// Add validation inside Dto and not in the model

namespace DatingApp.API.Dtos
{
	public class UserForRegisterDto
	{
		[Required]
		public string Username { get; set; }

		[Required]
		[StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 8 characters")]
		public string Password { get; set; }
	}
}