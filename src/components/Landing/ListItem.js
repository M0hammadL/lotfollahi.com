import React from 'react';
import {Box} from '@mui/material';

const LOGOS = {
  helmholtz: '/img/logos/helmholtz.svg',
  sanger: '/img/logos/sanger.svg',
  tum: '/img/logos/tum.png',
  email: '/img/logos/email.jpg',
};

export default function ListItem({logo, text, link}) {
  const src = LOGOS[logo];
  return (
    <Box
      component="li"
      sx={{fontSize:'1rem', display:'flex', alignItems:'center', lineHeight:1.5, cursor:'default'}}
    >
      {src && (
        <Box
          component="img"
          alt={`${logo} logo`}
          src={src}
          sx={{height:17, width:'auto', mr:1.2}}
        />
      )}
      <a
        target="_blank"
        rel="noopener noreferrer"
        style={{textDecoration:'none'}}
        href={link}
      >
        {text}
      </a>
    </Box>
  );
}
