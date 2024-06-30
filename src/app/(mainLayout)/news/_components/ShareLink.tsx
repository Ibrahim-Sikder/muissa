'use client'

import { Share } from '@mui/icons-material';
import Image from 'next/image';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import facebook from '../../../../assets/icon/facebook.png';
import linkedIn from '../../../../assets/icon/linkedin.png';
import instagram from '../../../../assets/icon/instagram.png';
import { useState } from 'react';
import ShareModal from './ShareModal';

const ShareLink = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)


    const urlToShare = "https://facebook.com";
    const title = "Facebook!";

    return (
        <>
            <div className="socialMedia flex-col md:flex-row gap-5 lg:gap-0 flex justify-end mt-10">
                <div className="flex items-center space-x-3">


                    <span onClick={handleOpen} className='cursor-pointer'><Share /> <b>Share</b></span>
                    <a target="_blank" href='https://www.facebook.com/profile.php?id=61558510933789'><Image className="w-10" src={facebook} alt="facebook" /></a>
                    <a target="_blank" href='https://www.instagram.com/muissaltd/?igsh=Nnp4M2d1M2pvMGtr'> <Image className="w-10" src={instagram} alt="facebook" /></a>
                    <a target="_blank" href='https://www.linkedin.com/company/muissa-business-consulting-ltd/'><Image className="w-10" src={linkedIn} alt="facebook" /></a>
                </div>
            </div>

            {
                open && <ShareModal close={handleClose} />
            }
        </>
    );
};

export default ShareLink;
