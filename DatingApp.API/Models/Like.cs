namespace DatingApp.API.Models
{
    public class Like
    {
        public int LikerId { get; set; }
        public int LikeeId { get; set; }
        public User Liker { get; set; }     // User likes other user
        public User Likee { get; set; }     // User is liked by other user
    }
}