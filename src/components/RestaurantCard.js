import { IMG_CDN } from "../config";
const RestrauntCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN + cloudinaryImageId} />
      <h2>{name}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <h4>{lastMileTravelString} Mins Stars</h4>
    </div>
  );
};

export default RestrauntCard;
