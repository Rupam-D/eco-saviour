"use client"
import { Message } from 'ai'
import { useChat } from 'ai/react'
import React, { ChangeEvent, ReactNode, createContext } from 'react'

interface chatContextTypes {
  allMessage: Message[],
  loading: boolean,
  typedInp: string;
  handleInpChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSmt: (e: React.FormEvent<HTMLFormElement>) => void;
}

// create context
export const chatContext = createContext<chatContextTypes>({
  allMessage: [],
  loading: false,
  typedInp: "",
  handleInpChange: () => { },
  handleSmt: () => { }

})

// store
const ChatStore = ({ children }: { children: ReactNode }) => {
  const { messages, isLoading, handleInputChange, handleSubmit, input } = useChat()
  const allMessage = messages
  const loading = isLoading
  const typedInp = input
  const handleInpChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(e)
  }
  const handleSmt = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e)
  }
  return (
    <chatContext.Provider value={{ allMessage, loading, typedInp, handleInpChange, handleSmt }}>
      {children}
    </chatContext.Provider>
  )
}

export default ChatStore
