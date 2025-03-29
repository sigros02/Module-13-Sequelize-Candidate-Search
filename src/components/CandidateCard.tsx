// import CandidateService from "../services/CandidateService";
import Candidate from "../models/Candidate";

// SG: destructuring candidate to allow passing in candidate as a prop
interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard = ({ candidate }: CandidateCardProps) => {
  return (
    console.log(candidate),
    (
      <div className="card">
        <img src={candidate.avatar_url} alt={candidate.login} />
        <h2>
          {candidate.login} ({candidate.name})
        </h2>
        <p>Location: {candidate.location}</p>
        <p>Email: {candidate.email}</p>
        <p>Company: {candidate.company}</p>
        <a href={candidate.html_url}>View Profile</a>
      </div>
    )
  );
};

export default CandidateCard;
