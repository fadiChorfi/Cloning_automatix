import React from 'react'

interface CardType {
    title: string;
    description: string;
    logo: any;
  }
  
type CardProps= {
    cards: CardType[]
}
const ExpertiseCard = ({cards}: CardProps) => {
  return (
    <div className="flex justify-around ">
          {cards.map((item, index) => (
            <div key={index} className="bg-[#141414] w-[23rem] rounded-3xl py-12 px-2">
              <div className="w-[75%] bg-black place-items-center m-auto py-8 rounded-3xl ">
                {item.logo}
              </div>
              <div className="w-[75%] m-auto ">
                <h2 className="text-white font-medium text-[1.7rem] text-center py-6" >{item.title}</h2>
                <p className="text-white font-light text-lg text-center w-[90%] m-auto" >{item.description}</p>
              </div>
            </div>
          ))}
        </div>
  )
}

export default ExpertiseCard