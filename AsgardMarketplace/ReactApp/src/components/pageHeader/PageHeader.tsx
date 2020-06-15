import React from 'react';

interface IPageHeaderProps {
    title: string,
    subtitle: string
}

const PageHeader = ({ title, subtitle } : IPageHeaderProps) => (
    <div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
    </div>
);

export default PageHeader;