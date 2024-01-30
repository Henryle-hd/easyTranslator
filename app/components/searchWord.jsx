import { Card, Button, List, ListItem,Input } from '@material-tailwind/react';
import { useState } from 'react';
const SearchWord = () => {
    const [ wordId, setWordId ] = useState("");
    const [ wordData, setWordData] = useState(null);

 


    const fetchWordData = async () => {
        const response = await fetch(`/api/words/${wordId}`);
        
        if (response.ok) {
            const res = await response.json();
            setWordData(res.word);
        } else {
            console.log('Error fetching word data');
            setWordData(null);
        }
    }
    return (
      <div>
      <div className='flex '>
          <div className='w-72'>
              <Input label='search word (Sw or Eng)' type='text' value={wordId} onChange={(e) => setWordId(e.target.value)} />
              
             
          </div>
          <Button onClick={fetchWordData} className='ml-5 h-10'>🔍 </Button>
          
         
      
            </div>
             {wordData ? (
              wordData.map((d) => (
                  <>
                      <Card className='w-96 mt-5'>
                      <List>
                              <ListItem>
                                  {d.eng} 
                                {d.ksw}
                          </ListItem>
                          </List>
                          </Card>
                  </>
              ))
          ) : (
                  <div>
                       <p className='ml-0'>🧾 Enter any word to search!</p> 
                  </div>
                 
                

          )}
            </div>
  )
}

export default SearchWord
