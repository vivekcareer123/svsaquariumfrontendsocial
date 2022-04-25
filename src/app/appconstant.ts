export class Appconstant {
    private static API_BASE_URL = "http://localhost:8080/";
    private static OAUTH2_URL = Appconstant.API_BASE_URL + "oauth2/authorization/";
    private static REDIRECT_URL = "?redirect_uri=http://localhost:8081/login";
    public static API_URL = Appconstant.API_BASE_URL + "api/";
    public static AUTH_API = Appconstant.API_URL + "auth/";
    public static GOOGLE_AUTH_URL = Appconstant.OAUTH2_URL + "google" + Appconstant.REDIRECT_URL;
    public static FACEBOOK_AUTH_URL = Appconstant.OAUTH2_URL + "facebook" + Appconstant.REDIRECT_URL;
    public static GITHUB_AUTH_URL = Appconstant.OAUTH2_URL + "github" + Appconstant.REDIRECT_URL;
    public static LINKEDIN_AUTH_URL = Appconstant.OAUTH2_URL + "linkedin" + Appconstant.REDIRECT_URL;
}
