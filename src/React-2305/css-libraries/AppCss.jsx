import React from 'react';
import Button1 from './post-css/Button1';
import Button2 from './post-css/Button2';
import StyledCompoents from './styled-components/StyledComponents';
import TailwindCss from './tailwind-css/TailwindCss';

export default function AppCss() {
    return (
        <>
            <>
                <Button1 />
                <Button2 />
            </>

            <StyledCompoents />

            <TailwindCss />
        </>
    );
}
