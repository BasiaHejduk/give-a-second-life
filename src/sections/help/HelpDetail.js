import { useEffect, useState } from 'react';
import { foundations, locals, organizations } from './content-help';
import './Help.scss';

const HelpDetails = ({recipients}) => {
    const [deatailsToRender, setDetailsToRender] = useState(locals);

    useEffect(() => {

        if (recipients === "foundations") {
            setDetailsToRender(foundations);
        } else if (recipients === "organizations") {
            setDetailsToRender(organizations);
        } else if (recipients === "locals") {
            setDetailsToRender(locals);
        }

    },[recipients]);

    return (
        <div className="help__details">
            {
                deatailsToRender.map((recipient) => {
                    return (
                        <>
                            <div className="help__details-row" key={recipient.id}>
                                <div className="help__details-column-left">
                                    <p className="help__details-recipient">{`${recipient.type} ${recipient.name}`}</p>
                                    <p className="help__details-mission">{`Cel i misja: ${recipient.mission}`}</p>
                                </div>
                                <div className="help__details-column-right">
                                    <p className="help__details-gifts">{recipient.gifts}</p>
                                </div>
                            </div>
                            <div className="help__details-line"></div>
                        </>
                    )
                })
            }

        </div>
    )
};

export default HelpDetails;