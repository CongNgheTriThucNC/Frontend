import React, { memo, useCallback, useMemo, useState } from 'react';
import './findJob.scss';
import { Button, Checkbox, Flex, Form, Input, Radio, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { IconSearch } from '../../assets/icons/IconSearch';
import { IconLocation } from '../../assets/icons/IconLocation';
import { IconStack } from '../../assets/icons/IconStack';
import JobItem from '../../components/JobItem/JobItem';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const FindJob = memo(() => {
    const [experienceValue, setExperienceValue] = useState();
    const [salary, setSalary] = useState();
    const [jobLevel, setJobLevel] = useState();
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const experienceOptions = useMemo(() => {
        return [
            {
                label: 'Freshers',
                value: 'freshers',
            },
            {
                label: '1 - 2 Years',
                value: '1-2years',
            },
            {
                label: '2 - 4 Years',
                value: '2-4years',
            },
            {
                label: '4 - 6 Years',
                value: '4-6years',
            },
            {
                label: '6 - 8 Years',
                value: '6-8years',
            },
            {
                label: '8 - 10 Years',
                value: '8-10years',
            },
            {
                label: '10 - 15 Years',
                value: '10-15years',
            },
            {
                label: '15+ Years',
                value: '15+years',
            },
        ];
    }, []);
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
    };
    const onSalaryChange = e => {
        setSalary(e.target.value);
    };
    const onJobLevelChange = e => {
        setJobLevel(e.target.value);
    };
    const toggleDropdown = useCallback(() => {
        setDropdownVisible(prev => !prev);
    }, []);

    return (
        <>
            <div className="find-job">
                <Flex
                    align="center"
                    justify="space-between"
                    className="find-job-title"
                >
                    <Typography.Title level={3}>Find Job</Typography.Title>
                    {/* <span>Home/Find Job</span> */}
                </Flex>
                <div className="find-job-details">
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        layout="vertical"
                        onFinish={() => {}}
                        autoComplete="off"
                        className="form-find-job"
                    >
                        <Form.Item name="job">
                            <Input
                                placeholder="Job tittle, Keyword..."
                                prefix={<IconSearch />}
                            />
                        </Form.Item>
                        <Form.Item name="location">
                            <Input
                                placeholder="Location"
                                prefix={<IconLocation />}
                            />
                        </Form.Item>
                        <Form.Item name="category">
                            <Input
                                placeholder="Select Category"
                                prefix={<IconStack />}
                            />
                        </Form.Item>
                        <div
                            className={`dropdown--label ${
                                dropdownVisible && 'active'
                            }`}
                            onClick={toggleDropdown}
                        >
                            Advance Filter
                            <DownOutlined />
                        </div>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Find job
                            </Button>
                        </Form.Item>
                    </Form>
                    {dropdownVisible && (
                        <div className="dropdown--menu">
                            <div className="dropdown--item">
                                <Typography.Title level={4}>
                                    Experience
                                </Typography.Title>
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
                <JobItem link="/job-details" />
                <JobItem link="/job-details" />
                <JobItem link="/job-details" />
                <JobItem link="/job-details" />
                <JobItem link="/job-details" />
                <JobItem link="/job-details" />
                <JobItem link="/job-details" />
                <JobItem link="/job-details" />
                <JobItem link="/job-details" />
            </div>
            <div className="flex justify-center items-center">
                <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
</div>
 
        </>
    );
});

export default FindJob;