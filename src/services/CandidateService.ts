import Candidate from "../models/Candidate";
import { searchGithub, searchGithubUser } from "../api/API";

export default class CandidateService {
  // SG: class variable to store saved candidates
  savedCandidates: Candidate[] = [];
  // SG: constructor method to initialize class variable with saved candidates from local storage
  constructor() {
    const savedCandidates = localStorage.getItem("savedCandidates");
    if (savedCandidates) {
      this.savedCandidates = JSON.parse(savedCandidates);
    } else {
      this.savedCandidates = [];
    }
  }
  // SG: instance method to fetch Github users
  async fetchGithubUsers() {
    try {
      const users = await searchGithub();
      return users.map((user: Candidate) => {
        return {
          login: user.login, // username
          avatar_url: user.avatar_url,
          html_url: user.html_url,
        };
      });
    } catch (error) {
      console.error("Error fetching Github users:", error);
      return [];
    }
  }
  // SG: instance method to fetch github user by username (login property)
  async fetchGithubUser(username: string) {
    try {
      const user: Candidate = await searchGithubUser(username);
      return {
        name: user.name,
        login: user.login, // username
        location: user.location,
        avatar_url: user.avatar_url,
        email: user.email,
        html_url: user.html_url,
        company: user.company,
      };
    } catch (error) {
      console.error("Error fetching Github user:", error);
      return null;
    }
  }
  // SG: instance method to add candidate to saved candidates
  // SG: instance method to check if candidate aleady exists in saved candidates
  // SG: instance method to remove candidate from saved candidates
  // SG: instance method to save candidate to local storage
  // SG: instance method to remove candidate from local storage
}
