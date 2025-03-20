import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);



  
  

  useEffect(() => {
    if (doctors.length >= 1) {
      if (speciality) {
        setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
      } else {
        setFilterDoc(doctors);
      }
    }
  

  }, [doctors, speciality]);

  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <p>General Physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
  
        <div>
          { filterDoc && filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt={item.name} />
              <div className="py-4 px-2">
                <div className="flex items-center gap-2 text-sm text-center text-green-400">
                  <p className="h-2 w-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
