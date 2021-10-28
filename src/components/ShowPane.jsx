import React from 'react'
import { Pane } from "@bigbinary/neetoui/v2";
import { Check } from "@bigbinary/neeto-icons";
import { Typography, Button} from "@bigbinary/neetoui/v2";

const ShowPane = ({showPane,setShowPane}) => {
    return (
        <div>
            <Pane isOpen={showPane} onClose={() => setShowPane(false)}>
            <Pane.Header className="mt-4">
            <Typography style="h2" weight="semibold">
                Filter Articles
            </Typography>
            </Pane.Header>
            <Pane.Body>
            <Typography style="body2">
                Somewhere out in space live The Herculoids! Zok, the laser-ray
                dragon! Igoo, the giant rock ape! Tundro, the tremendous! Gloop and
                Gleep, the formless, fearless wonders! With Zandor, their leader,
                and his wife, Tara, and son, Dorno, they team up to protect their
                planet from sinister invaders! All-strong! All-brave! All-heroes!
                They're The Herculoids!
            </Typography>
            </Pane.Body>
            <Pane.Footer className="flex items-center space-x-2 border-t-2 neeto-ui-text-gray-300 ">
            <Button
                icon={Check}
                size="large"
                label="Save Changes"
                onClick={() => setShowPane(false)}
                className="mb-5"
            />
            <Button
                style="text"
                size="large"
                label="Cancel"
                onClick={() => setShowPane(false)}
                className="mb-5"
            />
            </Pane.Footer>
        </Pane>
        </div>
    )
}

export default ShowPane
