import React, { memo, useCallback, useMemo, useState, useEffect } from 'react';
import './findJob.scss';
import { Button, Checkbox, Flex, Form, Input, Radio, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { IconSearch } from '../../assets/icons/IconSearch';
import { IconLocation } from '../../assets/icons/IconLocation';
import { IconStack } from '../../assets/icons/IconStack';
import JobItem from '../../components/JobItem/JobItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { getJobs } from '../../service/Apis/job';

const FindJob = memo(() => {
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalJobs, setTotalJobs] = useState(0);
    const [experienceValue, setExperienceValue] = useState(null);
    const [salary, setSalary] = useState(null);
    const [jobLevel, setJobLevel] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchJobs = useCallback(async (page = 1) => {
        setLoading(true);
        setError(null);
        try {
            const params = { 
                experience: experienceValue, 
                salary: salary, 
                jobLevel: jobLevel, 
                page: page,
            };
            const response = await getJobs(params);
            setJobs(response.data.docs); // Adjust according to your API response structure
            setTotalJobs(response.data.totalDocs); // Total number of jobs, adjust according to your API response structure
        } catch (error) {
            console.error("Error fetching jobs:", error);
            setError("Failed to fetch jobs. Please try again later.");
        } finally {
            setLoading(false);
        }
    }, [experienceValue, salary, jobLevel]);

    useEffect(() => {
        fetchJobs(currentPage);
    }, [fetchJobs, currentPage]);

    const experienceOptions = useMemo(() => [
        { label: 'Freshers', value: 'freshers' },
        { label: '1 - 2 Years', value: '1-2years' },
        { label: '2 - 4 Years', value: '2-4years' },
        { label: '4 - 6 Years', value: '4-6years' },
        { label: '6 - 8 Years', value: '6-8years' },
        { label: '8 - 10 Years', value: '8-10years' },
        { label: '10 - 15 Years', value: '10-15years' },
        { label: '15+ Years', value: '15+years' },
    ], []);

    const salaryOptions = useMemo(() => {
        return [
            {
                label: '$50 - $1000',
                value: '50-1000',
            },
            {
                label: '$1000 - $2000',
                value: '1000-2000',
            },
            {
                label: '$3000 - $4000',
                value: '3000-4000',
            },
            {
                label: '$4000 - $6000',
                value: '4000-6000',
            },
            {
                label: '$6000 - $8000',
                value: '6000-8000',
            },
            {
                label: '$8000 - $10000',
                value: '8000-10000',
            },
            {
                label: '$10000 - $15000',
                value: '10000-15000',
            },
            {
                label: '$15000+',
                value: '15000+',
            },
        ];
    }, []);
    const jobTypeOptions = useMemo(() => {
        return [
            {
                label: 'All',
                value: 'all',
            },
            {
                label: 'Full Time',
                value: 'fullTime',
            },
            {
                label: 'Part Time',
                value: 'partTime',
            },
            {
                label: 'Internship',
                value: 'internship',
            },
            {
                label: 'Remote',
                value: 'remote',
            },
            {
                label: 'Temporary',
                value: 'temporary',
            },
            {
                label: 'Contract Base',
                value: 'contractBase',
            },
        ];
    }, []);
    const educationOptions = useMemo(() => {
        return [
            {
                label: 'All',
                value: 'all',
            },
            {
                label: 'High School',
                value: 'highSchool',
            },
            {
                label: 'Intermediate',
                value: 'intermediate',
            },
            {
                label: 'Graduation',
                value: 'graduation',
            },
            {
                label: 'Master Degree',
                value: 'masterDegree',
            },
            {
                label: 'Bachelor Degree',
                value: 'bachelorDegree',
            },
        ];
    }, []);
    const jobLevelOptions = useMemo(() => {
        return [
            {
                label: 'Entry Level',
                value: 'entryLevel',
            },
            {
                label: 'Mid Level',
                value: 'midLevel',
            },
            {
                label: 'Expert Level',
                value: 'expertLevel',
            },
        ];
    }, []);

    const onExperienceChange = e => {
        setExperienceValue(e.target.value);
        setCurrentPage(1); // Reset to first page on filter change
    };

    const onSalaryChange = e => {
        setSalary(e.target.value);
        setCurrentPage(1); // Reset to first page on filter change
    };

    const onJobLevelChange = e => {
        setJobLevel(e.target.value);
        setCurrentPage(1); // Reset to first page on filter change
    };

    const toggleDropdown = useCallback(() => {
        setDropdownVisible(prev => !prev);
    }, []);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <>
            <div className="find-job">
                <Flex align="center" justify="space-between" className="find-job-title">
                    <Typography.Title level={3}>Find Job</Typography.Title>
                </Flex>
                <div className="find-job-details">
                    <Form
                        name="basic"
                        layout="vertical"
                        autoComplete="off"
                        className="form-find-job"
                    >
                        <Form.Item name="job">
                            <Input placeholder="Job title, Keyword..." prefix={<IconSearch />} />
                        </Form.Item>
                        <Form.Item name="location">
                            <Input placeholder="Location" prefix={<IconLocation />} />
                        </Form.Item>
                        <Form.Item name="category">
                            <Input placeholder="Select Category" prefix={<IconStack />} />
                        </Form.Item>
                        <div className={`dropdown--label ${dropdownVisible && 'active'}`} onClick={toggleDropdown}>
                            Advance Filter <DownOutlined />
                        </div>
                        <Form.Item>
                            <Button type="primary" onClick={() => fetchJobs(1)}>
                                Find job
                            </Button>
                        </Form.Item>
                    </Form>
                    {dropdownVisible && (
                        <div className="dropdown--menu">
                            <div className="dropdown--item">
                                <Typography.Title level={4}>Experience</Typography.Title>
                                <Radio.Group
                                    options={experienceOptions}
                                    onChange={onExperienceChange}
                                    value={experienceValue}
                                    className="options--group"
                                />
                            </div>
                            <div className="dropdown--item">
                                <Typography.Title level={4}>
                                    Salary
                                </Typography.Title>
                                <Radio.Group
                                    options={salaryOptions}
                                    onChange={onSalaryChange}
                                    value={salary}
                                    className="options--group"
                                />
                            </div>
                            <div className="dropdown--item">
                                <Typography.Title level={4}>
                                    Job Type
                                </Typography.Title>
                                <Checkbox.Group
                                    options={jobTypeOptions}
                                    className="options--group"
                                />
                            </div>
                            <div className="dropdown--item">
                                <Typography.Title level={4}>
                                    Education
                                </Typography.Title>
                                <Checkbox.Group
                                    options={educationOptions}
                                    className="options--group"
                                />
                            </div>
                            <div className="dropdown--item">
                                <Typography.Title level={4}>
                                    Job Level
                                </Typography.Title>
                                <Radio.Group
                                    options={jobLevelOptions}
                                    onChange={onJobLevelChange}
                                    value={jobLevel}
                                    className="options--group"
                                />
                            </div>
                            
                        </div>
                    )}
                </div>
            </div>
            <div className="find-job-alls">
                {loading && <Typography.Text>Loading jobs...</Typography.Text>}
                {error && <Typography.Text type="danger">{error}</Typography.Text>}
                {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                        <JobItem key={index} link="/job-details" job={job} />
                    ))
                ) : (
                    !loading && <Typography.Text>No jobs found.</Typography.Text>
                )}
            </div>
            <div className="flex justify-center items-center">
                <Stack spacing={2}>
                    <Pagination
                        count={Math.ceil(totalJobs / 10)} // Adjust this based on your pagination logic
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                    />
                </Stack>
            </div>
        </>
    );
});

export default FindJob;
