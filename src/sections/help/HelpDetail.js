import { useEffect, useState } from 'react';
import { foundations, locals, organizations } from './content-help';
import Pagination from '../../components/pagination/Pagination';
import './Help.scss';

const HelpDetails = ({recipients}) => {
    const [deatailsToRender, setDetailsToRender] = useState(foundations);
    const [currentPage, setCurrentPage]  = useState(1);
    const [rowsPerPage] = useState(3);

    const indexOfLastProduct = currentPage * rowsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - rowsPerPage;
    const currentRows = deatailsToRender.slice(indexOfFirstProduct, indexOfLastProduct);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        if (recipients === "foundations") {
            setDetailsToRender(foundations);
            setCurrentPage(1);
        } else if (recipients === "organizations") {
            setDetailsToRender(organizations);
            setCurrentPage(1);
        } else if (recipients === "locals") {
            setDetailsToRender(locals);
            setCurrentPage(1);
        }
    },[recipients]);

    return (
        <div className="help__details">
            {
                currentRows.map((recipient) => {
                    return (
                        <div key={recipient.id}>
                            <div className="help__details-row">
                                <div className="help__details-column-left">
                                    <p className="help__details-recipient">{`${recipient.type} ${recipient.name}`}</p>
                                    <p className="help__details-mission">{`Cel i misja: ${recipient.mission}`}</p>
                                </div>
                                <div className="help__details-column-right">
                                    <p className="help__details-gifts">{recipient.gifts}</p>
                                </div>
                            </div>
                            <div className="help__details-line"></div>
                        </div>
                    )
                })
            }
            <Pagination rowsPerPage={rowsPerPage} totalRows={deatailsToRender.length} paginate={paginate}/>            
        </div>
    )
};

export default HelpDetails;