'use client';
import{Accordion, AccordionHeader, AccordionBody} from "@material-tailwind/react"
import { useState } from "react";
import AllWords from "./allWords";

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
          
    </section>
  )
}

export default AccordionUI
