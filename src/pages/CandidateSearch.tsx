// import { useState, useEffect } from "react";
// import { searchGithub, searchGithubUser } from '../api/API';
import CandidateService from "../services/CandidateService";

const CandidateSearch = async () => {
  // SG: create an instance of CandidateService
  const candidateService = new CandidateService();
  // SG: test the fetch methods
  const candidates = await candidateService.fetchGithubUsers();
  const candidate = await candidateService.fetchGithubUser(candidates[0].login);
  // SG: add console log to check if methods fetched correctly
  console.log("candidates", candidates);
  console.log("candidate", candidate);
};

export default CandidateSearch;
