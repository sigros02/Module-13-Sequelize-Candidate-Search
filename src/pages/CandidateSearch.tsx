// import { useState, useEffect } from "react";
// import { searchGithub, searchGithubUser } from '../api/API';
import CandidateService from "../services/CandidateService";

const CandidateSearch = async () => {
  // SG: create an instance of CandidateService
  const candidateService = new CandidateService();
  // SG: test the fetch methods
  let users = await candidateService.fetchGithubUsers();

  try {
    let user = await candidateService.fetchGithubUser(users[0].login);
    // SG test adding a candidate to saved candidates
    candidateService.addCandidate(user);
    console.log("saved Candidates:", candidateService.savedCandidates);
    // SG: test the isCandidate method
    console.log("User login: ", user.login);
    console.log("test", candidateService.isCandidate(user.login));
  } catch (error) {
    console.error("Error fetching user:", error);
  }

  // SG: test the removeCandidate method
  candidateService.removeCandidate(
    candidateService.savedCandidates[
      candidateService.savedCandidates.length - 1
    ].login
  );

  console.log("saved Candidates:", candidateService.savedCandidates);
  // SG: test save candidates
  candidateService.saveCandidates();
};

export default CandidateSearch;
