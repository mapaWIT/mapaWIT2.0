import { useState } from "react";

export default function Combined() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [path, setPath] = useState([]);

  // 🗺️ All routes inside the campus
  const directions = {
    "RTS Gate-RTS Canteen": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Once inside the entrance, continue walking until you reach the pathway to canteen.", img: "/Entrance-Hallway.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
      { step: "You have arrived! The canteen is now visible and it is in front of marine building.", img: "/canteen.jpg" },
    ],
    "RTS Gate-Marine Building": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "The canteen is now visible and it is in front of marine building.", img: "/canteen.jpg" },
      { step: "Destination Reached! The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
    ],
    "RTS Gate-Library": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
      { step: "The canteen is now visible and it is in front of marine building.", img: "/canteen.jpg" },
      { step: " The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, take the main stairwell up to the third floor to reach the Library entrance.", img: "/LibraryEntrance.jpg" },
      { step: "You made it! The Library's main desk and reading area are located directly ahead.", img: "/library.jpg" },
    ],
    "RTS Gate-Clinic": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "The canteen is now visible and it is in front of marine building.", img: "/canteen.jpg" },
      { step: "The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, walk straight along the pathway and turn right leading you to the clinic.", img: "/marinehallway.jpg" },
      { step: "Welcome! The clinic is in front of you.", img: "/clinic.jpg" },
    ],
    "RTS Gate-WIT Meso": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: " The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, walk straight down the main pathway. Turn right at the first intersection and continue straight; you will then pass the Clinic.", img: "/marinehallway.jpg" },
      { step: "You’re here! The WIT MESO is located directly beside the clinic.", img: "/Witmeso.jpg" },
    ],
    "RTS Gate-Machine Shop Laboratory": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: " The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, walk straight down the main pathway. Turn right at the first intersection and continue straight; you will then pass the Clinic and WIT MESO.", img: "/marinehallway.jpg" },
      { step: "Destination Reached! The machine shop laboratory is beside the WIT MESO.", img: "/machineshop.jpg" },
    ],
    "RTS Gate-SHS Building": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: " The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, walk straight down the main pathway. Turn right at the first intersection and continue straight; you will then pass the Clinic, WIT MESO, and Machine shop.", img: "/marinehallway.jpg" },
      { step: "Proceed through this pathway to reach your destination.", img: "/shsentrance.jpg" },
      { step: "Success! You are now in the shs building.", img: "/ShsBuilding.jpg" },
    ],
    "RTS Gate-Pool": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. At the next corner, turn left; this path will lead directly to the Swimming Pool.", img: "/Hallway3.jpg" },
      { step: "The entrance of the pool is now directly in front of you.", img: "/PoolEntrance.jpg" },
      { step: "You've successfully completed the route! The Pool area is fully visible from this vantage point.", img: "/Pool.jpg" },
    ],
    "RTS Gate-New Building": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Welcome to the New Building! The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
    ],
    "RTS Gate-IT Department": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Upon entering the New Building, walk straight down the central NB Hallway and turn left to another hallway.", img: "/NBhallway.jpg" },
      { step: "Continue walking straight down this corridor. ", img: "/NBhallway2.jpg" },
      { step: "The IT Department Office will be the first door you encounter on your right-hand side.", img: "/ITdepartment.jpg" },
    ],
    "RTS Gate-Faculty Room": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Upon entering the New Building, walk straight down the central NB Hallway and turn left to another hallway.", img: "/NBhallway.jpg" },
      { step: "Continue walking straight down this corridor. ", img: "/NBhallway2.jpg" },
      { step: "The Faculty room will be the first door you encounter on your left-hand side.", img: "/facultyRoom.jpg" },
    ],
    "RTS Gate-Dean (COE)": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Upon entering the New Building, walk straight down the central NB Hallway and turn left to another hallway.", img: "/NBhallway.jpg" },
      { step: "Continue walking straight down this corridor. ", img: "/NBhallway2.jpg" },
      { step: "The IT Department Office will be the first door you encounter on your right-hand side.", img: "/ITdepartment.jpg" },
      { step: "Proceed through the first door on your right. The Dean of COE's office is located just inside that room.", img: "/DheanCoe.jpg" },
    ],
    "RTS Gate-Conference Hall": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Upon entering the New Building, walk straight down the central NB Hallway and turn left to another hallway.", img: "/NBhallway.jpg" },
      { step: "Take the elevator or stairs up to the Second Floor. ", img: "/NBhallway2.jpg" },
      { step: "The first door in your right-hand side is the conference room.", img: "/conferenceroom.jpg" },
    ],
    "RTS Gate-AVR": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Upon entering the New Building, walk straight down the central NB Hallway and turn left to another hallway.", img: "/NBhallway.jpg" },
      { step: "Take the elevator or stairs up to the third Floor.", img: "/NBhallway2.jpg" },
      { step: "You Made It! The AVR is the final large set of doors immediately in front of you.", img: "/AVR.jpg" },
    ],
    "RTS Gate-Field": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "The field is in between of new building and shs building.", img: "/field.jpg" },
    ],
    "RTS Gate-ROTC": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Walk straight and you will see the sgs.", img: "/Hallway4.jpg" },
      { step: "You are now on the small, paved pathway leading you to ROTC.", img: "/hallway5.jpg" },
      { step: "The ROTC will be immediately visible across this area.", img: "/ROTC.jpg" },
    ],
    "RTS Gate-Gym": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Walk straight and you will see the sgs.", img: "/Hallway4.jpg" },
      { step: "You are now on the small, paved pathway leading you to ROTC.", img: "/hallway5.jpg" },
      { step: "The gym will be immediately visible across this area.", img: "/Gym.jpg" },
    ],
    "RTS Gate-Function Hall": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Walk straight and you will see the sgs.", img: "/Hallway4.jpg" },
      { step: "You are now on the small, paved pathway leading you to ROTC.", img: "/hallway5.jpg" },
      { step: "Follow the hallway leading through the backstage area.", img: "/Gym1.jpg" },
      { step: "Walk straight a few meters; the Function Hall will be visible.", img: "/Functionhall.jpg" },
    ],
    "RTS Gate-Athlete Dorm": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "The new building is the modern structure directly in front of you.", img: "/newbuilding.jpg" },
      { step: "Walk straight and you will see the sgs.", img: "/Hallway4.jpg" },
      { step: "You are now on the small, paved pathway leading you to ROTC.", img: "/hallway5.jpg" },
      { step: "Follow the hallway leading through the backstage area.", img: "/Gym1.jpg" },
      { step: "From the backstage turn left leading to athlete dorm.", img: "/AthleteDorm.jpg" },
    ],
    "RTS Gate-Tennis Court": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Walk straight and you will see the sgs.", img: "/Hallway4.jpg" },
      { step: "You are now on the small, paved pathway leading you to ROTC.", img: "/hallway5.jpg" },
      { step: "Walk straight a few meters; the Function Hall will be visible.", img: "/Functionhall.jpg" },
      { step: "After passing the Function Hall, walk straight down the hallway; the Tennis Court is beside it.", img: "/Functionhallway1.jpg" },
    ],
    "RTS Gate-Alumni Office": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
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
      { step: "Walk straight along this pathway you will pass the RTS canteen", img: "/hallway2.jpg" },
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
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
      { step: "The marine building is directly across from the canteen which is in your right side.", img: "/MarineBuilding.jpg" },
      { step: "Once inside the Marine Building, walk straight down the main pathway. Turn right at the first intersection and continue straight; you will then pass the Clinic, WIT MESO, and Machine shop.", img: "/marinehallway.jpg" },
      { step: "Proceed through this pathway to reach your destination.", img: "/shsentrance.jpg" },
      { step: "You are now in the shs building.", img: "/ShsBuilding.jpg" },
      { step: "Take the stairs up to the second Floor.", img: "/ShsOffice.jpg" },
    ],
    "RTS Gate-SHS Faculty": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
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
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
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
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "The ME Laboratory is the large room located near the end of this hallway.", img: "/MeLaboraty.jpg" },
    ],
    "RTS Gate-MS Laboratory": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "The MS lab is located beside the ME Laboratory.", img: "/MsLab.jpg" },
    ],
    "RTS Gate-EE Laboratory": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Upon entering the hallway, a door will be visible on your left.", img: "/EELab.jpg" },
    ],
    "RTS Gate-DCRD": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
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
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
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
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
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
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
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
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "When you see the wash area, turn right.", img: "/CE_Building.jpg" },
    ],
    "RTS Gate-CE Lab": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
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
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
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
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "The CB building is in front of CE Building.", img: "/CBbuilding.jpg" },
    ],
    "RTS Gate-IT Faculty": [
      { step: "Proceed straight ahead from the gate and enter the primary gate directly in front of you.", img: "/rts-gate.jpg" },
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
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
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
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
      { step: "Walk straight along this pathway you will pass the RTS canteen.", img: "/hallway2.jpg" },
      { step: "Continue walking straight past the Canteen. Walk until this hallway ends.", img: "/Hallway3.jpg" },
      { step: "Continue straight until you reach the next corridor.", img: "/hallway6.jpg" },
      { step: "Walk until you reach the shed and parking lot.", img: "/hallway7.jpg" },
      { step: "After passing the parking lot, walk straight to the hallway.", img: "/Hallway8.jpg" },
      { step: "Walk to the end of the hallway. When you see the wash area, turn left.", img: "/Hallway9.jpg" },
      { step: "The CB building is in front of CE Building.", img: "/CBbuilding.jpg" },
      { step: "Take the stairs up to Second Floor turn right, enter CB 36 you will find the draft room.", img: "/DraftRoom.jpg" },
    ],
  };

  // 🔍 Handle Route Search
  const handleSearch = () => {
    const key = `${from}-${to}`;
    const reverseKey = `${to}-${from}`;

    if (directions[key]) {
      setPath(directions[key]);
    } else if (directions[reverseKey]) {
      setPath([...directions[reverseKey]].reverse());
    } else {
      setPath([]);
      alert("Sorry, route not found yet.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Campus Photo Navigation</h1>

      {/* Dropdown Selection Section */}
      <div className="flex flex-col md:flex-row gap-3 mb-6 w-full max-w-md">
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border rounded p-2 flex-1"
        >
          <option value="">From...</option>
          <option value="RTS Gate">RTS Gate</option>
        </select>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border rounded p-2 flex-1"
        >
          <option value="">To...</option>
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
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Show Directions
        </button>
      </div>

      {/* Scrollable Directions Display */}
      <div className="w-full max-w-lg">
        {path.length > 0 ? (
          <div className="space-y-6 max-h-[600px] overflow-y-auto p-2 bg-white rounded shadow-inner">
            {path.map((step, index) => (
              <div key={index} className="bg-white shadow rounded p-3">
                <p className="font-semibold mb-2">{step.step}</p>

                {/* Scrollable image box */}
                <div className="overflow-auto h-60 rounded border">
                  <img
                    src={step.img}
                    alt={step.step}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">
            Enter your starting and destination points to view directions.
          </p>
        )}
      </div>
    </div>
  );
}
