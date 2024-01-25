import React from 'react';
import PropTypes from 'prop-types';

export const MoonFillIcon = React.memo(({color}) => (
    <svg className="icon-button" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
        <g fill="none" fillRule="evenodd" transform="translate(-440 -200)">
            <path
                fill={color}
                fillRule="nonzero"
                stroke={color}
                strokeWidth="0.5"
                d="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 
                105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,
                30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,
                31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,
                34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,
                13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,
                30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z"
                transform="translate(354.5 192)"
            />
            <polygon points="444 228 468 228 468 204 444 204" />
        </g>
    </svg>
));

MoonFillIcon.propTypes = {
    color: PropTypes.string.isRequired,
};

MoonFillIcon.displayName = 'MoonFillIcon';
