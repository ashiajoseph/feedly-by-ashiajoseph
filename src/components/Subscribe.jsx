import React, {useState} from 'react'
import { Modal } from "@bigbinary/neetoui/v2";
import { Input } from "@bigbinary/neetoui/v2";
import { Typography, Button} from "@bigbinary/neetoui/v2";
import axios from 'axios';

export const Subscribe = ({showSubscribeModal , setShowSubscribeModal}) => {
    const [email, setEmail] = useState("")

    const handleChange= (e) => {
      setEmail(() => e.target.value)
    }
    const postData= async () => {
      await axios.post(process.env.REACT_APP_WEBHOOK_URL, email);
    }
    const handleClick= (type) => {
      if (type==='submit')
      {  postData() }

      setEmail("")
      setShowSubscribeModal(false)
    }

    return (
        <>
           <Modal
        isOpen={showSubscribeModal}
        onClose={() => setShowSubscribeModal(false)}
        size="xs"
      >
        <Modal.Header>
          <img src={process.env.PUBLIC_URL + '/subscribe.png'} alt="subscription"/>
          <Typography style="h2" className="mt-5 ">Subscribe to Feed.ly</Typography>
        </Modal.Header>
        <Modal.Body>
          <Typography style="body2" lineHeight="normal">
          We don’t spam, but, we deliver the latest news in short.
          </Typography>
        <div className="mt-6">
          <Input placeholder="oliver@example.com" value={email} onChange={handleChange}/>
        </div>
        </Modal.Body>
        <Modal.Footer className="space-x-2">
          <Button
            size="large"
            label="Sign Up"
            onClick={() => handleClick('submit')}
          />
          <Button
            style="text"
            size="large"
            label="Cancel"
            onClick={() => handleClick('cancel')}
          />
        </Modal.Footer>
      </Modal> 
        </>
    )
}
