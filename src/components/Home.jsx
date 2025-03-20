import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateToPastes, addToPastes } from '../redux/pasteSlice';



const Home = () => {
      const [title,setTitle] = useState('');
      const [value,setValue] = useState('');
      const [searchParams, setSearchParams] = useSearchParams();
      const pasteId = searchParams.get("pasteId");
      const dispatch = useDispatch();
      const allPastes = useSelector((state) => state.paste.pastes);


      useEffect(() => {
        if(pasteId){
          const paste = allPastes.find((p) => p._id === pasteId);
          setTitle(paste.title);
          setValue(paste.content);
        }
          setTitle()
      }, [pasteId])

  function createPaste(){
    const paste = {
      title: title,
      constent: value,
      _id: pasteId ||
          Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }


    
    

    if (pasteId){
      dispatch(updateToPastes(paste));

    }
    else{
      dispatch(addToPastes(paste));
  
    }

    //after creation or updation
    setTitle('');
    setValue('');
    setSearchParams({});
  }

  
      
  return (
    <div>
      <div className= 'flex'>
        <input
        className='abhi'
        type='text'
        placeholder='enter title here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
         />

         <button
          onClick={createPaste}
           className='ab'>
            {
              pasteId ? "Update My Paste" : "Create My Paste"
            }
         </button>
    </div>

    <div className='mt'>
            <textarea
                className='bira'

                value={value}
                placeholder='Enter Content here'
                onChange={(e) => setValue(e.target.value)}
                rows={20}

            
            
            />  


    </div>
   </div>
  );
};

export default Home