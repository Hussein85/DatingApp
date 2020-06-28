using System.ComponentModel.DataAnnotations;

// Add validation inside Dto and not in the model

namespace DatingApp.API.Dtos
{
	public class UserForLoginDto
	{

		public string Username { get; set; }

		public string Password { get; set; }
	}
}