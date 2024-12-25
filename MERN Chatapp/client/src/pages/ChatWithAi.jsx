import toast from 'react-hot-toast';
import Header from '../components/layout/Header'
import React, { useState } from 'react'
import axios from 'axios';

const ChatWithAi = () => {
    const [input, setInput]=useState("")
    const [answer, setAnswer]=useState("")
    const [isLoading, setIsLoading] = useState(false);

    const handleInput=(e)=>{

    }

    const generateAnswer = async (e) => {
        e.preventDefault();

        const question = input

        const toastId = toast.loading("Sending ...");
        setIsLoading(true);
        
        try {
          const data  = await axios({
            url:`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAAeWKaYHFh-I61JFtUi4cCieFK1_q7Ii0`,
            method:"post",
            data:{
                contents:[
                    {parts:[{text:input}]}
                ]
            }
          });
          setAnswer(data.data.candidates[0].content.parts[0].text)
          toast.success(data.message, {
            id: toastId,
          });


        } catch (error) {
            console.log(error)
          toast.error(error?.response?.data?.message || "Something Went Wrong", {
            id: toastId,
          });
        }
      };

  return (
    <div className='dark:bg-[url(https://www.shutterstock.com/image-illustration/polygonal-human-face-3d-illustration-600nw-1200990472.jpg)] bg-[#e7e8e9b3] bg-cover min-h-[100vh]'>
        <Header></Header>
        <div className='w-[80%] h-full dark:backdrop-blur-sm mx-auto border-2 my-7 py-7 rounded-[30px] overflow-hidden'>
            <div className='w-full px-8 my-6 h-[calc(100vh-100px)] overflow-y-scroll scroll-w-2 dark:text-white'>
                <div className='relative'>
                    <p className='dark:bg-[#333333ac] bg-slate-200  max-w-[30%] relative left-[70%] rounded-lg p-4'>{input}</p>
                    <p className='dark:bg-[#333333ac] bg-slate-200 rounded-lg p-4 w-[60%]'>{answer}</p>
                </div>
            </div>
            <div>
                <form onSubmit={generateAnswer} className='w-full flex justify-between px-8'>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='bg-transparent w-[80%] px-3 py-2 border-2 dark:border-white rounded-full dark:text-white ' placeholder='Ask your Question ?' />
                <button type='submit' className='dark:text-white bg-transparent px-7 py-2 border-2 dark:border-white rounded-full hover:bg-black hover:text-white'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ChatWithAi
