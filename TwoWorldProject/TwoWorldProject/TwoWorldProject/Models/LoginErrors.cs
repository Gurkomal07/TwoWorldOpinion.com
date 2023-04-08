namespace TwoWorldProject.Models
{
    public class LoginErrors
    {
        public Error error { get; set; }
    }

    public class Error
    {
        public int code { get; set; }
        public string message { get; set; }
        public object Message { get; internal set; }
        public List<Error> errors { get; set; }
    }
}