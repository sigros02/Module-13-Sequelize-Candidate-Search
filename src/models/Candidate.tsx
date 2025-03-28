// TODO: Create an interface for the Candidate objects returned by the API
// SG: name, username = login, location, avatar = avatar_url, email, html_url, and company
// https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28

export default interface Candidate {
  name?: string;
  login: string;
  location?: string;
  avatar_url: string;
  email?: string;
  html_url: string;
  company?: string;
}
