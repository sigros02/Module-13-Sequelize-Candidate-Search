// TODO: Create an interface for the Candidate objects returned by the API
// SG: name, username = login, location, avatar = avatar_url, email, html_url, and company
// https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28

export interface Candidate {
  name: string;
  username: string;
  location: string;
  avatar: string;
  email: string;
  html_url: string;
  company: string;
}
