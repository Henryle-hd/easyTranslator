'use client';
import{Accordion, AccordionHeader, AccordionBody} from "@material-tailwind/react"
import { useState } from "react";
import AllWords from "./allWords";
import SearchWord from "./searchWord";

const AccordionUI = () => {
    const [open, setOpen] = useState(1);
    const handleOpen = (value) => setOpen(open===value? 0: value); 
  return (
      <section className="w-[40rem]">
          <Accordion open={open === 1}>
              <AccordionHeader onClick={()=>handleOpen(1)}>
                  all words
              </AccordionHeader>
              <AccordionBody>
                  
                  <AllWords />
                  
              </AccordionBody>
          </Accordion>
          
              <Accordion open={open===2}>
                  <AccordionHeader onClick={()=>handleOpen(2)}>
                  seach a word 
              </AccordionHeader>

              <AccordionBody>
                  <SearchWord />
              </AccordionBody>
              </Accordion>
          
          
    </section>
  )
}

export default AccordionUI
