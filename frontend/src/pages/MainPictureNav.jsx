import { useState } from "react";

export default function Combined() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [path, setPath] = useState([]);

  // 🗺️ All routes inside the campus
  const directions = {
    "Main Gate-Dean of Student Affairs Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Electrical Utility Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-CSU Academic Council": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-RM-104/Chem Lab": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-SHS Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-President's Conference Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Chairman's Office, WIT Inc.": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-HM Dept Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Graduate School (219) RM-219": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-RM-220/Faculty Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-HM Mini Hotel, Restaurant, Bar, and Kitchen": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Cultural Affair Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Gate-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-Electrical Utility Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-CSU Academic Council": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-RM-104/Chem Lab": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-SHS Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-President's Conference Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-Chairman's Office, WIT Inc.": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-HM Dept Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-Graduate School (219) RM-219": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-RM-220/Faculty Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-HM Mini Hotel, Restaurant, Bar, and Kitchen": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-Cultural Affair Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Dean of Student Affairs Office-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-CSU Academic Council": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],"Electrical Utility Room-RM-104/Chem Lab": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],"Electrical Utility Room-SHS Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-President's Conference Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-Chairman's Office, WIT Inc.": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-HM Dept Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-Graduate School (219) RM-219": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-RM-220/Faculty Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-HM Mini Hotel, Restaurant, Bar, and Kitchen": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-Cultural Affair Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Electrical Utility Room-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-RM-104/Chem Lab": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-SHS Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-President's Conference Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-Chairman's Office, WIT Inc.": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-HM Dept Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-Graduate School (219) RM-219": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-RM-220/Faculty Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-HM Mini Hotel, Restaurant, Bar, and Kitchen": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-Cultural Affair Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CSU Academic Council-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-SHS Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-President's Conference Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-Chairman's Office, WIT Inc.": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-HM Dept Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-Graduate School (219) RM-219": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-RM-220/Faculty Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-HM Mini Hotel, Restaurant, Bar, and Kitchen": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-Cultural Affair Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-104/Chem Lab-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-President's Conference Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-Chairman's Office, WIT Inc.": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-HM Dept Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-Graduate School (219) RM-219": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-RM-220/Faculty Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-HM Mini Hotel, Restaurant, Bar, and Kitchen": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-Cultural Affair Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "SHS Office-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-Chairman's Office, WIT Inc.": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-HM Dept Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-Graduate School (219) RM-219": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-RM-220/Faculty Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-HM Mini Hotel, Restaurant, Bar, and Kitchen": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-Cultural Affair Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "President's Conference Room-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Chairman's Office, WIT Inc.-HM Dept Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Chairman's Office, WIT Inc.-Graduate School (219) RM-219": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],"Chairman's Office, WIT Inc.-RM-220/Faculty Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Chairman's Office, WIT Inc.-HM Mini Hotel, Restaurant, Bar, and Kitchen": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Chairman's Office, WIT Inc.-Cultural Affair Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Chairman's Office, WIT Inc.-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Chairman's Office, WIT Inc.-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Chairman's Office, WIT Inc.-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Chairman's Office, WIT Inc.-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Chairman's Office, WIT Inc.-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Chairman's Office, WIT Inc.-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Chairman's Office, WIT Inc.-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Chairman's Office, WIT Inc.-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Chairman's Office, WIT Inc.-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Dept Office-Graduate School (219) RM-219": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Dept Office-RM-220/Faculty Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Dept Office-HM Mini Hotel, Restaurant, Bar, and Kitchen": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Dept Office-Cultural Affair Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Dept Office-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Dept Office-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Dept Office-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Dept Office-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Dept Office-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Dept Office-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Dept Office-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Dept Office-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Dept Office-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Graduate School (219) RM-219-RM-220/Faculty Room": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Graduate School (219) RM-219-HM Mini Hotel, Restaurant, Bar, and Kitchen": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Graduate School (219) RM-219-Cultural Affair Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Graduate School (219) RM-219-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Graduate School (219) RM-219-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Graduate School (219) RM-219-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Graduate School (219) RM-219-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Graduate School (219) RM-219-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Graduate School (219) RM-219-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Graduate School (219) RM-219-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Graduate School (219) RM-219-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Graduate School (219) RM-219-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-220/Faculty Room-HM Mini Hotel, Restaurant, Bar, and Kitchen": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-220/Faculty Room-Cultural Affair Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-220/Faculty Room-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-220/Faculty Room-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-220/Faculty Room-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-220/Faculty Room-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-220/Faculty Room-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-220/Faculty Room-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-220/Faculty Room-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-220/Faculty Room-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "RM-220/Faculty Room-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Mini Hotel, Restaurant, Bar, and Kitchen-Cultural Affair Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Mini Hotel, Restaurant, Bar, and Kitchen-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Mini Hotel, Restaurant, Bar, and Kitchen-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Mini Hotel, Restaurant, Bar, and Kitchen-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Mini Hotel, Restaurant, Bar, and Kitchen-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Mini Hotel, Restaurant, Bar, and Kitchen-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Mini Hotel, Restaurant, Bar, and Kitchen-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Mini Hotel, Restaurant, Bar, and Kitchen-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Mini Hotel, Restaurant, Bar, and Kitchen-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "HM Mini Hotel, Restaurant, Bar, and Kitchen-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Cultural Affair Office-CBA Faculty Room/RM-314": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Cultural Affair Office-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Cultural Affair Office-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Cultural Affair Office-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Cultural Affair Office-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Cultural Affair Office-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Cultural Affair Office-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Cultural Affair Office-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Cultural Affair Office-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CBA Faculty Room/RM-314-Business and Accountancy Dean's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CBA Faculty Room/RM-314-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CBA Faculty Room/RM-314-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CBA Faculty Room/RM-314-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CBA Faculty Room/RM-314-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CBA Faculty Room/RM-314-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CBA Faculty Room/RM-314-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "CBA Faculty Room/RM-314-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Business and Accountancy Dean's Office-Computer Room Laboratory/RM 310": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Business and Accountancy Dean's Office-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Business and Accountancy Dean's Office-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Business and Accountancy Dean's Office-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Business and Accountancy Dean's Office-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Business and Accountancy Dean's Office-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Business and Accountancy Dean's Office-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Computer Room Laboratory/RM 310-Accountancy Department Head's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Computer Room Laboratory/RM 310-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Computer Room Laboratory/RM 310-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Computer Room Laboratory/RM 310-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Computer Room Laboratory/RM 310-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Computer Room Laboratory/RM 310-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Accountancy Department Head's Office-Terrace": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Accountancy Department Head's Office-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Accountancy Department Head's Office-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Accountancy Department Head's Office-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Accountancy Department Head's Office-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Terrace-Main Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Terrace-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Terrace-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Terrace-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Library-Library Supervisor's Office": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Library-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Main Library-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Library Supervisor's Office-Graduate School Library": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Library Supervisor's Office-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
    ],
    "Graduate School Library-Speech Laboratory/RM-400B": [
      { step: "Start at RTS Gate", img: "/rts-gate.jpg" },
      { step: "Walk straight along main pathway", img: "/rts pool.jpg" },
      { step: "Turn right at the Admin Office", img: "/new-building.jpg" },
      { step: "You have arrived at CB Building", img: "/library.jpg" },
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
          <option value="Main Gate">Main Gate</option>
          <option value="Dean of Student Affairs Office">Dean of Student Affairs Office</option>
          <option value="Electrical Utility Room">Electrical Utility Room</option>
          <option value="CSU Academic Council">CSU Academic Council</option>
          <option value="RM-104/Chem Lab">RM-104/Chem Lab</option>
          <option value="SHS Office">SHS Office</option>
          <option value="President's Conference Room">President's Conference Room</option>
          <option value="Chairman's Office, WIT Inc.">Chairman's Office, WIT Inc.</option>
          <option value="HM Dept Office">HM Dept Office</option>
          <option value="Graduate School (219) RM-219">Graduate School (219) RM-219</option>
          <option value="RM-220/Faculty Room">RM-220/Faculty Room</option>
          <option value="HM Mini Hotel, Restaurant, Bar, and Kitchen">HM Mini Hotel, Restaurant, Bar, and Kitchen</option>
          <option value="Cultural Affair Office">Cultural Affair Office</option>
          <option value="CBA Faculty Room/RM-314">CBA Faculty Room/RM-314</option>
          <option value="Business and Accountancy Dean's Office">Business and Accountancy Dean's Office</option>
          <option value="Computer Room Laboratory/RM 310">Computer Room Laboratory/RM 310</option>
          <option value="Accountancy Department Head's Office">Accountancy Department Head's Office</option>
          <option value="Terrace">Terrace</option>
          <option value="Main Library">Main Library</option>
          <option value="Library Supervisor's Office">Library Supervisor's Office</option>
          <option value="Graduate School Library">Graduate School Library</option>
          <option value="Speech Laboratory/RM-400B">Speech Laboratory/RM-400B</option>
        </select>

        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border rounded p-2 flex-1"
        >
          <option value="">From...</option>
          <option value="Main Gate">Main Gate</option>
          <option value="Dean of Student Affairs Office">Dean of Student Affairs Office</option>
          <option value="Electrical Utility Room">Electrical Utility Room</option>
          <option value="CSU Academic Council">CSU Academic Council</option>
          <option value="RM-104/Chem Lab">RM-104/Chem Lab</option>
          <option value="SHS Office">SHS Office</option>
          <option value="President's Conference Room">President's Conference Room</option>
          <option value="Chairman's Office, WIT Inc.">Chairman's Office, WIT Inc.</option>
          <option value="HM Dept Office">HM Dept Office</option>
          <option value="Graduate School (219) RM-219">Graduate School (219) RM-219</option>
          <option value="RM-220/Faculty Room">RM-220/Faculty Room</option>
          <option value="HM Mini Hotel, Restaurant, Bar, and Kitchen">HM Mini Hotel, Restaurant, Bar, and Kitchen</option>
          <option value="Cultural Affair Office">Cultural Affair Office</option>
          <option value="CBA Faculty Room/RM-314">CBA Faculty Room/RM-314</option>
          <option value="Business and Accountancy Dean's Office">Business and Accountancy Dean's Office</option>
          <option value="Computer Room Laboratory/RM 310">Computer Room Laboratory/RM 310</option>
          <option value="Accountancy Department Head's Office">Accountancy Department Head's Office</option>
          <option value="Terrace">Terrace</option>
          <option value="Main Library">Main Library</option>
          <option value="Library Supervisor's Office">Library Supervisor's Office</option>
          <option value="Graduate School Library">Graduate School Library</option>
          <option value="Speech Laboratory/RM-400B">Speech Laboratory/RM-400B</option>
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