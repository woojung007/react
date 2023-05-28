import Avatar from 'React-2305/basic/props/avatar/Avatar';
import React from 'react';
import GNB from './GNB';

export default function Wrapper() {
    return (
        <div>
            <GNB>
                <Avatar
                    name='Bob'
                    size={200}
                    image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
                />
                <p>Hi!</p>
            </GNB>
        </div>
    );
}
