import React, { useState } from "react";
import Affiliation from "../components/Affiliation";
import Recepient from "../components/Recepient";
import User from "../components/User";
import { GoChevronLeft } from "react-icons/go";
import Location from "../components/Location";
import { MapContainer } from "react-leaflet";
import "../components/map.css";
import NewMap from "../components/NewMap";
import Connect from "../components/Connect";
import UploadFiles from "../components/UploadFiles";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [ctr, setCtr] = useState(0);
  const [user, setUser] = useState();
  const [affiliation, setAffiliation] = useState();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState([]);

  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [prsnl, setPrsnl] = useState("");
  const [mail, setMail] = useState("");
  const [linkedin, setLinkedin] = useState("");

  return (
    <div>
      <div className="max-w-md m-auto mt-6 relative">
        {user === 1 && ctr > 2 ? (
          <button
            onClick={() => ctr!==5?setCtr(ctr + 1):navigate('/user')}
            className="absolute top-8 right-2 bg-gray-400 rounded py-1 px-3"
          >
            Skip
          </button>
        ) : (
          <></>
        )}
        {ctr !== 0 ? (
          <GoChevronLeft
            onClick={() => setCtr(ctr - 1)}
            className="absolute top-10 cursor-pointer left-6 text-xl"
          />
        ) : (
          <></>
        )}

        {ctr === 0 ? (
          <User setUser={setUser} setCtr={setCtr} />
        ) : ctr === 1 ? (
          <Affiliation setAffiliation={setAffiliation} setCtr={setCtr} />
        ) : ctr === 2 ? (
          affiliation === 0 ? (
            <Recepient
              setCtr={setCtr}
              setName={setName}
              setContact={setContact}
              setDob={setDob}
              name={name}
              dob={dob}
              contact={contact}
            />
          ) : (
            <></>
          )
        ) : ctr === 3 ? (
          <div>
            <Location
              name={name}
              setCtr={setCtr}
              setLocation={setLocation}
              location={location}
            />
          </div>
        ) : (
          <></>
        )}
        {ctr === 4 ? (
          <Connect
            setTwitter={setTwitter}
            twitter={twitter}
            setInstagram={setInstagram}
            instagram={instagram}
            setLinkedin={setLinkedin}
            linkedin={linkedin}
            setMail={setMail}
            mail={mail}
            setPrsnl={setPrsnl}
            prsnl={prsnl}
            setCtr={setCtr}
            name={name}
          />
        ) : (
          <></>
        )}
        {ctr === 5 ? <UploadFiles /> : <></>}
      </div>
      {location.length === 2 ? (
        <div className="w-full h-[400px]">
          <MapContainer center={location} zoom={11} scrollWheelZoom={true}>
            <NewMap location={location} user={user} setLocation={setLocation} />
          </MapContainer>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SignUp;
