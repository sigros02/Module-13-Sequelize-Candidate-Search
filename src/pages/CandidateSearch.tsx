import { useEffect, useState } from "react";
import CandidateService from "../services/CandidateService";
import Candidate from "../models/Candidate";
import CandidateCard from "../components/CandidateCard";

const CandidateSearch = () => {
  const [_candidates, setCandidates] = useState([] as Candidate[]);
  const [candidate, setCandidate] = useState({} as Candidate);
  const candidateService = new CandidateService();
  

  // SG: fetch candidates from github one time when the component mounts
  useEffect(() => {
    const fetchCandidates = async () => {
      const users = await candidateService.fetchGithubUsers();
      setCandidates(users);
      const user = await candidateService.fetchGithubUser(users[0].login);
      setCandidate(user);
    };
    fetchCandidates();
  }, []);

  return (
    <div>
      <h1>Candidate Search</h1>
      <CandidateCard candidate={candidate} />
    </div>
  );
};

export default CandidateSearch;
