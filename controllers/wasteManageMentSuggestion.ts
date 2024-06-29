import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export const generateSuggetion=async({input}:{input:any})=>{
  const {wasteType}=input
  console.log(wasteType,"suggest server")
  
    const { text }  = await generateText({
      model:openai("gpt-3.5-turbo"),
      system:'You are a professional assistent.You have to provide users with clear and concise suggestions on reducing specific types of waste and guiding them on proper recycling methods.You write simple, clear, and concise content.',
      prompt: `waste Type is ${wasteType}`
    })
    
    return text;
    
}