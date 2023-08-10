import { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=> {
    const notesIntial = [
        {
          "_id": "64d3845e78596203922f766f2",
          "user": "64d377fe88058bc5b34735d1",
          "title": "First Note",
          "description": "I need to make a call tomorrow",
          "tag": "personal",
          "date": "2023-08-09T12:19:42.470Z",
          "__v": 0
        },
        {
          "_id": "64d3ab72219aeafdaa57d7496",
          "user": "64d377fe88058bc5b34735d1",
          "title": "First Note2",
          "description": "I need to make a call tomorrow22",
          "tag": "personal",
          "date": "2023-08-09T15:06:26.365Z",
          "__v": 0
        },
        {
          "_id": "64d3ab72219atefdaa57d7496",
          "user": "64d377fe88058bc5b34735d1",
          "title": "First Note2",
          "description": "I need to make a call tomorrow22",
          "tag": "personal",
          "date": "2023-08-09T15:06:26.365Z",
          "__v": 0
        },
        {
          "_id": "64d3ab72219ae5fdaa57d7496",
          "user": "64d377fe88058bc5b34735d1",
          "title": "First Note2",
          "description": "I need to make a call tomorrow22",
          "tag": "personal",
          "date": "2023-08-09T15:06:26.365Z",
          "__v": 0
        },
        {
            "_id": "64d3ab72219aef7daa57d7496",
            "user": "64d377fe88058bc5b34735d1",
            "title": "First Note2",
            "description": "I need to make a call tomorrow22",
            "tag": "personal",
            "date": "2023-08-09T15:06:26.365Z",
            "__v": 0
          },
          {
            "_id": "64d3ab72219aefduaa57d7496",
            "user": "64d377fe88058bc5b34735d1",
            "title": "First Note2",
            "description": "I need to make a call tomorrow22",
            "tag": "personal",
            "date": "2023-08-09T15:06:26.365Z",
            "__v": 0
          },
          {
            "_id": "64d3ab72219aefdnaa57d7496",
            "user": "64d377fe88058bc5b34735d1",
            "title": "First Note2",
            "description": "I need to make a call tomorrow22",
            "tag": "personal",
            "date": "2023-08-09T15:06:26.365Z",
            "__v": 0
          },
          {
            "_id": "64d3ab72219aefdaaj57d7496",
            "user": "64d377fe88058bc5b34735d1",
            "title": "First Note2",
            "description": "I need to make a call tomorrow22",
            "tag": "personal",
            "date": "2023-08-09T15:06:26.365Z",
            "__v": 0
          }
      ]

      const [notes, setNotes] = useState(notesIntial);

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;