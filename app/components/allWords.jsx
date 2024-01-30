'use client';

import { List, ListItem, Card } from "@material-tailwind/react";
import { useEffect, useState } from "react";
const AllWords = () => {

    const [words, setWords] = useState('');
    useEffect(() => {
      const fetchAllWords = async () => {
        const response = await fetch('/api/words');
        const dictionary = await response.json();

        setWords(dictionary.data);
          
      };
      fetchAllWords();
    })
  return (
    <div>
      {words && words.map((word) => (
        <Card key={word.id} className="mb-4"> 
          <List>
            <ListItem>
              {word.eng} = {word.ksw}
            </ListItem>
          </List>
       </Card>
     ))}
    </div>
  )
}

export default AllWords

