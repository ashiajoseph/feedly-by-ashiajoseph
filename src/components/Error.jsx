import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button} from "@bigbinary/neetoui/v2";
import { Home } from "@bigbinary/neeto-icons";

function Error() {
    const history = useHistory();
    return ( 
        <div className="flex flex-col justify-center items-center my-40">
            <div className="mb-10">
                <img src={process.env.PUBLIC_URL + '/error.svg'} alt="Error diagram"/>
            </div>
            <Typography style="h3" weight="semibold" className="neeto-ui-text-gray-800  ">
            You have landed somwhere
            </Typography>
            <Typography style="h3" weight="semibold" className="neeto-ui-text-gray-800 mb-7 ">
            unknown.
            </Typography>
            
            <Button
                onClick={()=>{history.push('/')}}
                size="large"
                icon={Home}
                label="Take me home"
                style="secondary"
                iconPosition="left"
              />
        </div>

    )
}

export default Error
