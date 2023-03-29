import React from 'react';
import helmholtz from '../../img/logo/Helmholtz-Munich-Logo-Arrow-Symbol-Red-RGB.png';
import sanger from '../../img/logo/wellcome-sanger.jpg';
import tum from '../../img/logo/tum-logo.png'
import email from '../../img/logo/email.jpg';

import {Box} from "@mui/material";

function ListItem(props) {
    const {logo, text, link} = props;

    console.log(link);

    return (
        <Box component={'li'} fontSize={'1rem'} display={'flex'} alignItems={'center'} lineHeight={1.5} style={{cursor: 'default'}}>
            {/* Helmholtz Logo */}
            {
                logo === "helmholtz" && <Box
                component={"img"}
                sx={{
                    height: 17,
                    width: 17
                }}
                alt="helmholtz logo"
                src={helmholtz}
                margin="10px"
            />
            }
            {/* Sanger Logo */}
            {
                logo === "sanger" && <Box
                component={"img"}
                sx={{
                    height: 17,
                    width: 17
                }}
                alt="sanger logo"
                src={sanger}
                margin="10px"
            />
            }
            {/* TUM Logo */}
            {
                logo === "tum" && <Box
                component={"img"}
                sx={{
                    height: 13,
                    width: 17
                }}
                alt="tum logo"
                src={tum}
                margin="10px"
            />
            }
            {/* Email Logo */}
            {
                logo === "email" && <Box
                component={"img"}
                sx={{
                    height: 17,
                    width: 17
                }}
                alt="email logo"
                src={email}
                margin="10px"
            />
            }
            <a
                target='_blank'
                rel='noopener noreferrer'
                href={link}
            >
                {text}
            </a>
        </Box>
    );
}

export default ListItem;