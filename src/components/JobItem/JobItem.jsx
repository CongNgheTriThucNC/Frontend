import { Flex } from 'antd';
import React, { memo } from 'react';
import { IconReddit } from '../../assets/icons/IconReddit';
import { LocationIcon } from '../../assets/icons/LocationIcon';
import './jobItem.scss';
import { useNavigate } from 'react-router-dom';

const JobItem = memo(({ link }) => {
    const navigate = useNavigate();

    return (
        <div className="job-item" onClick={() => navigate(link)}>
            <Flex gap={8} align="center" className="job-item-info">
                <IconReddit />
                <Flex vertical gap={12}>
                    <Flex align="center" gap={4}>
                        <h3 className="title">Reddit</h3>
                        <span className="featured">Featured</span>
                    </Flex>
                    <Flex gap={4} align="center" className="location">
                        <LocationIcon />
                        United Kingdom of Great Britain
                    </Flex>
                </Flex>
            </Flex>
            <h3 className="job-item-title">Marketing Officer</h3>
            <Flex className="job-item-details">
                <span>Full time</span>
                <span>$30K-$35K</span>
            </Flex>
        </div>
    );
});
export default JobItem;
