import { Flex } from 'antd';
import React, { memo } from 'react';
import { IconReddit } from '../../assets/icons/IconReddit';
import { LocationIcon } from '../../assets/icons/LocationIcon';
import './jobItem.scss';
import { useNavigate } from 'react-router-dom';

const JobItem = memo(({ link, job }) => { // Add job prop
    const navigate = useNavigate();

    return (
        <div className="job-item" onClick={() => navigate(link)}>
            <Flex gap={8} align="center" className="job-item-info">
                <IconReddit />
                <Flex vertical gap={12}>
                    <Flex align="center" gap={4}>
                        <h3 className="title">{job.JobTitle}</h3> {/* Job Title */}
                        <span className="featured">{job.CareerLevel}</span> {/* Career Level or any other relevant tag */}
                    </Flex>
                    <Flex gap={4} align="center" className="location">
                        <LocationIcon />
                        {job.JobAddress} {/* Job Address */}
                    </Flex>
                </Flex>
            </Flex>
            <h3 className="job-item-title">{job.JobTitle}</h3> {/* Job Title */}
            <Flex className="job-item-details">
                <span>{job.JobType}</span> {/* Job Type */}
                <span>{job.Salary}</span> {/* Salary */}
            </Flex>
        </div>
    );
});

export default JobItem;
