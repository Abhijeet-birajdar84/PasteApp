
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateToPastes, addToPastes } from '../redux/pasteSlice';

const ViewPaste = () => {

  const {id} = useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];

  return (
    <div>
      <div className= 'flex'>
        <input
        className='abhi'
        type='text'
        placeholder='enter title here'
        value={paste.title}
        disabled
        onChange={(e) => setTitle(e.target.value)}
         />

         {/* <button
          onClick={createPaste}
           className='ab'>
            {
              pasteId ? "Update My Paste" : "Create My Paste"
            }
         </button> */}
    </div>

    <div className='mt'>
            <textarea
                className='bira'

                value={paste.content}
                placeholder='Enter Content here'
                disabled
                onChange={(e) => setValue(e.target.value)}
                rows={20}

            
            
            />  


    </div>
   </div>
  )
}

export default ViewPaste