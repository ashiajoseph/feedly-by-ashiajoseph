import React from 'react'
import { useHistory } from 'react-router-dom';
import { Typography, Button} from "@bigbinary/neetoui/v2";
import { Highlight } from "@bigbinary/neeto-icons";

const NoNews = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-10 border-b-2 pb-7">
        <div className="my-5">
            <img src={process.env.PUBLIC_URL + '/nonews.svg'} alt="Error diagram"/>
        </div>
        <Typography style="h3" weight="semibold" className="neeto-ui-text-gray-800  mt-2 mb-5">
        No News Articles Found
        </Typography>
        <Button
            onClick={()=>{}}
            size="large"
            icon={Highlight}
            label="Write to us"
            style="secondary"
            iconPosition="left"
          />
    </div>
    )
}

export default NoNews
