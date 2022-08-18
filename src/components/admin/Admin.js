import React, { useState} from 'react';
import { useDispatch } from "react-redux";

import FileBase from 'react-file-base64'
import { createImage } from '../../actions/images';
import './admin.scss'

const Admin = () => {
    const dispatch = useDispatch();
    const [files, setFiles] = useState({
        category:'', selectedFile:''
    })
    
    
    console.log(files.category)
    const handleSubmit=((e)=>{
        e.preventDefault();
         if (files.category && files.selectedFile){
            dispatch(createImage(files)) 
        } else{
            alert('select category and file')
        }
    });
    return (
        <div className='adminn'>
            <h1>ADMIN</h1>
            <form onSubmit={handleSubmit}>
                <h4>Upload Images</h4>
                <FileBase multiple={false} type='file' onDone={({base64})=>setFiles({...files, selectedFile:base64})} />
                <select className='' onChange={(e)=>setFiles({...files, category:e.target.value})}>
                    <option value=''>Select Category</option>
                    <option value='wedding'>Wedding</option>
                    <option value='branding'>branding</option>
                    <option value='studio'>studio</option>
                    <option value='outdoors'>outdoors</option>
                    <option value='featured'>featured</option>
                </select>
                <button className='btn-gradddd' type='submit'>Submit</button>
            </form>
            
        </div>
    );
};

export default Admin;