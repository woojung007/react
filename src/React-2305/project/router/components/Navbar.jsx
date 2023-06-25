import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            {/* 리액트 라우터에서 제공해주는 a 태그와 비슷한 링크 버튼 */}
            <Link to='/'>Home</Link>
            <Link to='/videos'>Videos</Link>
        </nav>
    );
}
