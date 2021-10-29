import React, {useState,useEffect} from 'react'
import { Modal } from "@bigbinary/neetoui/v2";
import { Input, Textarea } from "@bigbinary/neetoui/v2";
import { Typography, Button} from "@bigbinary/neetoui/v2";
import axios from 'axios';

const WriteToUsModal = ({showModal,setShowModal}) => {
    const [info,setInfo]= useState({name: '', email: '', message: ''})

    
    return (
        <div>
           <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="md"
>
        <Modal.Header>
          <Typography style="h2">Can’t find what you came for?</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
          Write to us about which category interests you and we will fetch them for you daily, for free.
          </Typography>
          <div className="flex flex-row space-x-8 ">
          <Input label="Name" name="name" placeholder="Oliver Smith" value={info['name']} onChange={handleChange}/>
          <Input label="Email" name="email" placeholder="oliver@example.com" value={info['email']} onChange={handleChange}/>
          </div>
          <div>
          <Textarea label="Message" name="message" value={info['message']}placeholder="Write your message here." onChange={handleChange}/>
          </div>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            label="Submit"
            onClick={handleSubmit}
            size="large"
          />
          <Button
            style="text"
            label="Cancel"
            onClick={handleCancel}
            size="large"
          />
        </Modal.Footer>
      </Modal> 
        </div>
    )
}

export default WriteToUsModal
