import styled, { css } from 'styled-components';
import React from 'react';

const Button = styled.button`
    background: tomato;

    ${({ primary }) =>
        primary &&
        css`
            background: aqua;
        `}
`;

export default function StyledCompoents() {
    return (
        <>
            <Button>Button</Button>
            <Button primary>Primary Button</Button>
        </>
    );
}
