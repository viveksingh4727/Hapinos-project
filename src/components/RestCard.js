import { CDN_URL } from "../utils/constants";


export const RestCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
      resData?.info;
    const { deliveryTime } = resData?.info.sla;
  
    return (
      <div className="m-4 p-4 w-[250px] h-[450px] rounded-lg bg-gray-50 hover:bg-gray-200">
        <img
          className="rounded-md h-48 w-60"
          alt="reslogo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating} ⭐</h3>
        <h3>{costForTwo} </h3>
        <h3>{deliveryTime} minutes</h3>
      </div>
    );
  };

  //Hgher Order component (a normal js function)

  //input- RestCard => RestCardPromoted

  export const withPromotedLabel = (RestCard) => {
    return (props) =>{
      return (
        <div>
          <label>Promoted</label>
          <RestCard {...props} />
          
        </div>
      )
    }
  }


