import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardBlock = (props) => {
  const { icon } = props;
  return (
    <div className="card-inner">
      <div className="card-front rounded-full"></div>
      <div className="card-back flex items-center justify-center rounded-full">
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
};
export default CardBlock;
