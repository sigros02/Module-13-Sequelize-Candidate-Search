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
      this.savedCandidates = [] as Candidate[];
    }
  }
  // SG: instance method to fetch Github users
  async fetchGithubUsers() {
    const users = await searchGithub();
    return users.map((user: Candidate) => {
      return {
        login: user.login, // username
        avatar_url: user.avatar_url,
        html_url: user.html_url,
      };
    });
  }
  // SG: instance method to fetch github user by username (login property)
  async fetchGithubUser(username: string) {
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
  }
  // SG: instance method to check if candidate aleady exists in saved candidates
  isCandidate(login: string): boolean {
    return this.savedCandidates.some((candidate) => candidate.login === login);
  }

  // SG: instance method to add candidate to saved candidates
  addCandidate(candidate: Candidate) {
    this.savedCandidates.unshift(candidate);
  }
  // SG: instance method to remove candidate from saved candidates
  removeCandidate(username: string) {
    let savedIndex = this.savedCandidates.findIndex((candidate) => {
      return candidate.login === username;
    });
    this.savedCandidates.splice(savedIndex, 1);
  }
  // SG: instance method to save candidates to local storage
  saveCandidates() {
    localStorage.setItem(
      "savedCandidates",
      JSON.stringify(this.savedCandidates)
    );
  }
}
