import React, { useState } from "react";
import { Link } from "react-router-dom";
import VectorSVG from "../assets/design1.svg";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function CampusPhotoNavigation() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [path, setPath] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🗺️ Directions with images and descriptions
  const directions = {
    "RTS Gate-RTS Canteen": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Once inside the entrance, continue walking until you reach the pathway to canteen.", img: "/Entrance-Hallway.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
      { step: "You have arrived! The canteen is now visible and it is in front of marine building.", img: "/canteen.jpg" },
    ],
    "RTS Gate-Marine Building": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "The canteen is now visible and it is in front of marine building.", img: "/canteen.jpg" },
      { step: "Destination Reached! The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
    ],
    "RTS Gate-Library": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "The canteen is now visible and it is in front of marine building.", img: "/canteen.jpg" },
      { step: " The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, take the main stairwell up to the third floor to reach the Library entrance.", img: "/LibraryEntrance.jpg" },
      { step: "You made it! The Library's main desk and reading area are located directly ahead.", img: "/library.jpg" },
    ],
    "RTS Gate-Clinic": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "The canteen is now visible and it is in front of marine building.", img: "/canteen.jpg" },
      { step: "The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, walk straight along the pathway and turn right leading you to the clinic.", img: "/marinehallway.jpg" },
      { step: "Welcome! The clinic is in front of you.", img: "/clinic.jpg" },
    ],
    "RTS Gate-WIT Meso": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: " The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, walk straight down the main pathway. Turn right at the first intersection and continue straight; you will then pass the Clinic.", img: "/marinehallway.jpg" },
      { step: "You’re here! The WIT MESO is located directly beside the clinic.", img: "/Witmeso.jpg" },
    ],
    "RTS Gate-Machine Shop Laboratory": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: " The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, walk straight down the main pathway. Turn right at the first intersection and continue straight; you will then pass the Clinic and WIT MESO.", img: "/marinehallway.jpg" },
      { step: "Destination Reached! The machine shop laboratory is beside the WIT MESO.", img: "/machineshop.jpg" },
    ],
    "RTS Gate-SHS Building": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: " The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, walk straight down the main pathway. Turn right at the first intersection and continue straight; you will then pass the Clinic, WIT MESO, and Machine shop.", img: "/marinehallway.jpg" },
      { step: "Proceed through this pathway to reach your destination.", img: "/shsentrance.jpg" },
      { step: "Success! You are now in the shs building.", img: "/ShsBuilding.jpg" },
    ],
    "RTS Gate-Pool": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. At the next corner, turn left; this path will lead directly to the Swimming Pool.", img: "/Hallway3.jpg" },
      { step: "The entrance of the pool is now directly in front of you.", img: "/PoolEntrance.jpg" },
      { step: "You've successfully completed the route! The Pool area is fully visible from this vantage point.", img: "/Pool.jpg" },
    ],
    "RTS Gate-New Building": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Welcome to the New Building! The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
    ],
    "RTS Gate-IT Department": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Upon entering the New Building, walk straight down the central NB Hallway and turn left to another hallway.", img: "/NBhallway.jpg" },
      { step: "Continue walking straight down this corridor. ", img: "/NBhallway2.jpg" },
      { step: "The IT Department Office will be the first door you encounter on your right-hand side.", img: "/ITdepartment.jpg" },
    ],
    "RTS Gate-Faculty Room": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Upon entering the New Building, walk straight down the central NB Hallway and turn left to another hallway.", img: "/NBhallway.jpg" },
      { step: "Continue walking straight down this corridor. ", img: "/NBhallway2.jpg" },
      { step: "The Faculty room will be the first door you encounter on your left-hand side.", img: "/facultyRoom.jpg" },
    ],
    "RTS Gate-Dean (COE)": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Upon entering the New Building, walk straight down the central NB Hallway and turn left to another hallway.", img: "/NBhallway.jpg" },
      { step: "Continue walking straight down this corridor. ", img: "/NBhallway2.jpg" },
      { step: "The IT Department Office will be the first door you encounter on your right-hand side.", img: "/ITdepartment.jpg" },
      { step: "Proceed through the first door on your right. The Dean of COE's office is located just inside that room.", img: "/DheanCoe.jpg" },
    ],
    "RTS Gate-Conference Hall": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Upon entering the New Building, walk straight down the central NB Hallway and turn left to another hallway.", img: "/NBhallway.jpg" },
      { step: "Take the elevator or stairs up to the Second Floor. ", img: "/NBhallway2.jpg" },
      { step: "The first door in your right-hand side is the conference room.", img: "/conferenceroom.jpg" },
    ],
    "RTS Gate-AVR": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Upon entering the New Building, walk straight down the central NB Hallway and turn left to another hallway.", img: "/NBhallway.jpg" },
      { step: "Take the elevator or stairs up to the third Floor.", img: "/NBhallway2.jpg" },
      { step: "You Made It! The AVR is the final large set of doors immediately in front of you.", img: "/AVR.jpg" },
    ],
    "RTS Gate-Field": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "The field is in between of new building and shs building.", img: "/field.jpg" },
    ],
    "RTS Gate-ROTC": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Walk straight and you will see the sgs.", img: "/Hallway4.jpg" },
      { step: "You are now on the small, paved pathway leading you to ROTC.", img: "/hallway5.jpg" },
      { step: "The ROTC will be immediately visible across this area.", img: "/ROTC.jpg" },
    ],
    "RTS Gate-Gym": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Walk straight and you will see the sgs.", img: "/Hallway4.jpg" },
      { step: "You are now on the small, paved pathway leading you to ROTC.", img: "/hallway5.jpg" },
      { step: "The gym will be immediately visible across this area.", img: "/Gym.jpg" },
    ],
    "RTS Gate-Function Hall": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Walk straight and you will see the sgs.", img: "/Hallway4.jpg" },
      { step: "You are now on the small, paved pathway leading you to ROTC.", img: "/hallway5.jpg" },
      { step: "Follow the hallway leading through the backstage area.", img: "/Gym1.jpg" },
      { step: "Walk straight a few meters; the Function Hall will be visible.", img: "/Functionhall.jpg" },
    ],
    "RTS Gate-Athlete Dorm": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Walk straight and you will see the sgs.", img: "/Hallway4.jpg" },
      { step: "You are now on the small, paved pathway leading you to ROTC.", img: "/hallway5.jpg" },
      { step: "Follow the hallway leading through the backstage area.", img: "/Gym1.jpg" },
      { step: "From the backstage turn left leading to athlete dorm.", img: "/AthleteDorm.jpg" },
    ],
    "RTS Gate-Tennis Court": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Walk straight and you will see the sgs.", img: "/Hallway4.jpg" },
      { step: "You are now on the small, paved pathway leading you to ROTC.", img: "/hallway5.jpg" },
      { step: "Walk straight a few meters; the Function Hall will be visible.", img: "/Functionhall.jpg" },
      { step: "After passing the Function Hall, walk straight down the hallway; the Tennis Court is beside it.", img: "/Functionhallway1.jpg" },
    ],
    "RTS Gate-Alumni Office": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Walk straight and you will see the sgs.", img: "/Hallway4.jpg" },
      { step: "You are now on the small, paved pathway leading you to ROTC.", img: "/hallway5.jpg" },
      { step: "Follow the hallway leading through the backstage area.", img: "/Gym1.jpg" },
      { step: "Walk straight a few meters; the Function Hall will be visible.", img: "/Functionhall.jpg" },
      { step: "After passing the Function Hall, walk straight down the hallway; the Tennis Court is beside it.", img: "/Functionhallway1.jpg" },
      { step: "Continue past the Tennis Court. The Alumni Office is the final door or suite located at the end of this hallway.", img: "/AlumniOffice.jpg" },
    ],
    "RTS Gate-Pathfit Office": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Walk straight and you will see the sgs.", img: "/Hallway4.jpg" },
      { step: "You are now on the small, paved pathway leading you to ROTC.", img: "/hallway5.jpg" },
      { step: "Follow the hallway leading through the backstage area.", img: "/Gym1.jpg" },
      { step: "Walk straight a few meters; the Function Hall will be visible.", img: "/Functionhall.jpg" },
      { step: "After passing the Function Hall, walk straight down the hallway; the Tennis Court is beside it.", img: "/Functionhallway1.jpg" },
      { step: "After passing the Tennis Court, look for the stairwell; it will guide you to the Pathfit Office.", img: "/PathfitOffice.jpg" },
    ],
    "RTS Gate-SHS Office": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, walk straight down the main pathway. Turn right at the first intersection and continue straight; you will then pass the Clinic, WIT MESO, and Machine shop.", img: "/marinehallway.jpg" },
      { step: "Proceed through this pathway to reach your destination.", img: "/shsentrance.jpg" },
      { step: "You are now in the shs building.", img: "/ShsBuilding.jpg" },
      { step: "Take the stairs up to the second Floor.", img: "/ShsOffice.jpg" },
    ],
    "RTS Gate-SHS Faculty": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, walk straight down the main pathway. Turn right at the first intersection and continue straight; you will then pass the Clinic, WIT MESO, and Machine shop.", img: "/marinehallway.jpg" },
      { step: "Proceed through this pathway to reach your destination.", img: "/shsentrance.jpg" },
      { step: "You are now in the shs building.", img: "/ShsBuilding.jpg" },
      { step: "Proceed through this pathway to reach your destination.", img: "/ShsEntrance2.jpg" },
      { step: "Walk straight then turn to your right hand side.", img: "/Shshallway2.jpg" },
      { step: "Proceed to Room HS 205, where you will find the SHS Faculty.", img: "/ShsFaculty.jpg" },
    ],
    "RTS Gate-SHS Lab": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, walk straight down the main pathway. Turn right at the first intersection and continue straight; you will then pass the Clinic, WIT MESO, and Machine shop.", img: "/marinehallway.jpg" },
      { step: "Proceed through this pathway to reach your destination.", img: "/shsentrance.jpg" },
      { step: "You are now in the shs building.", img: "/ShsBuilding.jpg" },
      { step: "Proceed through this pathway to reach your destination.", img: "/ShsEntrance2.jpg" },
      { step: "Walk straight then turn to your right hand side.", img: "/Shshallway2.jpg" },
      { step: "After passing some rooms, walk straight until you are at the end you will see the shs lab beside the elevator.", img: "/Shslab.jpg" },
    ],
    "RTS Gate-ME Laboratory": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "The ME Laboratory is the large room located near the end of this hallway.", img: "/MeLaboraty.jpg" },
    ],
    "RTS Gate-MS Laboratory": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "The MS lab is located beside the ME Laboratory.", img: "/MsLab.jpg" },
    ],
    "RTS Gate-EE Laboratory": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Upon entering the hallway, a door will be visible on your left.", img: "/EELab.jpg" },
    ],
    "RTS Gate-DCRD": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "Walk straight you will see another hallway.", img: "/Hallway10.jpg" },
      { step: "Enter the second door to find the office of the Director, Center for Research & Development.", img: "/DCRD.jpg" },
    ],
    "RTS Gate-IT Laboratory": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "Walk straight you will see another hallway.", img: "/Hallway10.jpg" },
      { step: "After passing the DCRD you will see the it lab in front of Computer Laboratory(cb13).", img: "/ITLAB.jpg" },
    ],
    "RTS Gate-Lab Custodian": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "Walk straight you will see another hallway.", img: "/Hallway10.jpg" },
      { step: "After passing the DCRD you will see the Laboratory custodian(cb13) in front of IT Laboratory.", img: "/ComLabCustodian.jpg" },
    ],
    "RTS Gate-Micro Laboratory": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "Walk straight you will see another hallway.", img: "/Hallway10.jpg" },
      { step: "The microlab laboratory is visible beside IT Laboratory.", img: "/MicroLab.jpg" },
    ],
    "RTS Gate-CE Building": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "When you see the wash area, turn right.", img: "/CE_Building.jpg" },
    ],
    "RTS Gate-CE Lab": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "When you see the wash area, turn right.", img: "/CE_Building.jpg" },
      { step: "You will see a stair and beside the stair is a hallway leading you to the CE Lab.", img: "/CElab.jpg" },
    ],
    "RTS Gate-CE Office": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "When you see the wash area, turn right.", img: "/CE_Building.jpg" },
      { step: "Take the stairs up to the second Floor and you will see a hallway.", img: "/CEhallway.jpg" },
       { step: "Walk straight the hallway leading you to CE Office.", img: "/CEOffice.jpg" },
    ],
    "RTS Gate-CB Building": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "The CB building is in front of CE Building.", img: "/CBbuilding.jpg" },
    ],
    "RTS Gate-IT Faculty": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "The CB building is in front of CE Building.", img: "/CBbuilding.jpg" },
      { step: "Take the stairs up to the second Floor and you will see the IT Faculty.", img: "/IMG_4535.jpg" },
    ],
    "RTS Gate-Head Compe": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "The CB building is in front of CE Building.", img: "/CBbuilding.jpg" },
      { step: "Take the stairs up to Second Floor turn right, walk straight the hallway  and you will see a sign states HEAD, COMPUTER ENGINEERING.", img: "/HeadCompE.jpg" },
    ],
    "RTS Gate-CB36": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/Hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "The CB building is in front of CE Building.", img: "/CBbuilding.jpg" },
      { step: "Take the stairs up to Second Floor turn right, enter CB 36 you will find the draft room.", img: "/DraftRoom.jpg" },
    ],
  };


  // 🔍 Handle search
  const handleSearch = () => {
    const key = `${from}-${to}`;
    const reverseKey = `${to}-${from}`;
    if (directions[key]) {
      setPath(directions[key]);
      setCurrentIndex(0);
    } else if (directions[reverseKey]) {
      setPath([...directions[reverseKey]].reverse());
      setCurrentIndex(0);
    } else {
      setPath([]);
      alert("Sorry, route not found yet.");
    }
  };

  // ⬅️➡️ Navigation
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };
  const handleNext = () => {
    if (currentIndex < path.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] overflow-hidden z-0 mt-11">
        <img
          src={VectorSVG}
          alt="Decorative Vector"
          className="absolute -bottom-19 left-0 w-full opacity-100"
        />
        <div className="absolute -bottom-4 right-0 w-full opacity-80">
          <svg viewBox="0 0 1440 320" className="w-full h-auto" preserveAspectRatio="none">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,300 C100,500 1080,-400 1440,240 L1440,320 L0,320 Z"
            />
          </svg>
        </div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-20 bg-gradient-to-r from-[#6F35A6] to-[#CE94FA] flex justify-between items-center px-10 py-2">
        <Link to="/picnav" className="hover:text-[#8D21E1] text-[#D297FF] text-3xl">
          <AiOutlineArrowLeft />
        </Link>
        <div className="flex space-x-5 text-sm font-normal">
          <Link to="/how-to-use" className="hover:text-[#D297FF] text-[#FBF6FF]">How to Use MapaWIT</Link>
          <Link to="/about" className="hover:text-[#D297FF] text-[#FBF6FF]">About</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex -mt-30 flex-col items-center justify-start pt-24 pb-32 px-6 text-center min-h-screen overflow-y-auto">
        <h1 className="text-4xl md:text-5xl font-semibold text-white drop-shadow-md mb-8">
          Campus Photo Navigation
        </h1>

        {/* Dropdowns */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 -mt-6">
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="px-4 py-2 rounded shadow bg-white border border-black text-gray-800"
          >
            <option value="">From...</option>
            <option value="RTS Gate">RTS Gate</option>
          </select>

          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="px-4 py-2 rounded shadow bg-white border border-black text-gray-800 w-[160px] truncate"
          >
            <option value="">To...</option>
            <option value="RTS Gate">RTS Gate</option>
            <option value="RTS Canteen">RTS Canteen</option>
            <option value="Marine Building">Marine Building</option>
            <option value="Library">Library</option>
            <option value="Clinic">Clinic</option>
            <option value="WIT Meso">WIT Meso</option>
            <option value="Machine Shop Laboratory">Machine Shop Laboratory</option>
            <option value="SHS Building">SHS Building</option>
            <option value="Pool">Pool</option>
            <option value="New Building">New Building</option>
            <option value="IT Department">IT Department</option>
            <option value="Faculty Room">Faculty Room</option>
            <option value="Dean (COE)">Dean (COE)</option>
            <option value="Conference Hall">Conference Hall</option>
            <option value="AVR">AVR</option>
            <option value="Field">Field</option>
            <option value="ROTC">ROTC</option>
            <option value="Gym">Gym</option>
            <option value="Function Hall">Function Hall</option>
            <option value="Athlete Dorm">Athlete Dorm</option>
            <option value="Tennis Court">Tennis Court</option>
            <option value="Alumni Office">Alumni Office</option>
            <option value="Pathfit Office">Pathfit Office</option>
            <option value="SHS Office">SHS Office</option>
            <option value="SHS Faculty">SHS Faculty</option>
            <option value="SHS Lab">SHS Lab</option>
            <option value="ME Laboratory">ME Laboratory</option>
            <option value="MS Laboratory">MS Laboratory</option>
            <option value="EE Laboratory">EE Laboratory</option>
            <option value="DCRD">Director Center Research Development</option>
            <option value="IT Laboratory">IT Laboratory</option>
            <option value="Lab Custodian">Laboratory Custodian</option>
            <option value="Micro Laboratory">Micro Laboratory</option>
            <option value="CE Building">CE Building</option>
            <option value="CE Lab">CE Laboratory</option>
            <option value="CE Office">CE Office</option>
            <option value="CB Building">CB Building</option>
            <option value="IT Faculty">IT Faculty</option>
            <option value="Head Compe">Computer Engineering Head</option>
            <option value="CB36">CB36/Draft Room</option>
          </select>

          <button
            onClick={handleSearch}
            className="bg-purple-700 text-white px-6 py-2 rounded shadow hover:bg-purple-800 transition"
          >
            Show Directions
          </button>
        </div>

        {/* Photo Card Navigation */}
        {path.length > 0 ? (
          <div className="w-full max-w-3xl -mt-3">
            <div className="bg-white rounded-2xl shadow-lg p-4 text-center">
              {/* ✅ Description ABOVE the image */}
              <h2 className="text-lg md:text-l font-medium text-gray-800 mb-4 px-3 leading-relaxed">
                {path[currentIndex].step}
              </h2>

              {/* 🖼️ Image BELOW the description */}
              <img
                src={path[currentIndex].img}
                alt="Campus Path"
                className="rounded-lg shadow-md object-cover w-full max-h-[400px] mb-4"
              />

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-120 -mt-2">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-purple-700 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === path.length - 1}
                  className="bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-purple-700 transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>

              <p className="text-gray-500 mt-3 text-sm">
                Step {currentIndex + 1} of {path.length}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-white text-lg mt-10">
            Select your starting and destination points to view directions.
          </p>
        )}
      </div>
    </div>
  );
}

