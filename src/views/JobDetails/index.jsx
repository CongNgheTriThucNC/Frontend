import { Button, Flex, Form, Input, Modal } from 'antd';
import React, { memo, useState } from 'react';
import { IconCalendar } from '../../assets/icons/IconCalendar';
import { IconClock } from '../../assets/icons/IconClock';
import { IconEducation } from '../../assets/icons/IconEducation';
import { IconInstagram } from '../../assets/icons/IconInstagram';
import { IconInstagramBorder } from '../../assets/icons/IconInstagramBorder';
import { IconLink } from '../../assets/icons/IconLink';
import { IconLocationBig } from '../../assets/icons/IconLocationBig';
import { IconMail } from '../../assets/icons/IconMail';
import { IconPhoneSmall } from '../../assets/icons/IconPhoneSmall';
import { IconSalary } from '../../assets/icons/IconSalary';
import { IconSave } from '../../assets/icons/IconSave';
import './jobDetails.scss';
import JobOverviewItem from './JobOverviewItem';
import JobItem from '../../components/JobItem/JobItem';

const JobDetails = memo(() => {
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="job-details">
                <Flex
                    align="center"
                    justify="space-between"
                    className="job-details-label"
                >
                    <h3>Job Details</h3>
                    <span>
                        Home / Find Job Label / Graphics & Design / Job Details
                    </span>
                </Flex>
            </div>
            <Flex justify="space-between" className="job-details-content">
                <Flex className="job-details-title" gap={24} flex={1}>
                    <div>
                        <IconInstagram />
                    </div>
                    <Flex justify="space-around" vertical>
                        <Flex className="job-title" align="center" gap={12}>
                            <h4>Senior UX Designer</h4>
                            <span className="featured">Featured</span>
                            <span className="fullTime">Full Time</span>
                        </Flex>
                        <Flex align="center" gap={12}>
                            <Flex align="center" gap={8}>
                                <IconLink />
                                <span>https://instagram.com</span>
                            </Flex>
                            <Flex align="center" gap={8}>
                                <IconPhoneSmall />
                                <span>(406) 555-0120</span>
                            </Flex>
                            <Flex align="center" gap={8}>
                                <IconMail />
                                <span>career@instagram.com</span>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex
                    vertical
                    gap={8}
                    justify="space-around"
                    className="apply-btn"
                >
                    <Flex align="center" gap={12}>
                        <span className="btn-save">
                            <IconSave />
                        </span>
                        <Button type="primary" onClick={() => setOpen(true)}>
                            Apply Now
                        </Button>
                    </Flex>
                    <Flex
                        align="center"
                        gap={4}
                        className="expired-date"
                        justify="flex-end"
                    >
                        <span>Job expire in:</span>
                        <span> June 30, 2021</span>
                    </Flex>
                </Flex>
            </Flex>
            <Flex
                className="job-details-description"
                align="flex-start"
                gap={30}
            >
                <div className="job-description">
                    <h3>Job Description</h3>
                    <p>
                        Integer aliquet pretium consequat. Donec et sapien id
                        leo accumsan pellentesque eget maximus tellus. Duis et
                        est ac leo rhoncus tincidunt vitae vehicula augue. Donec
                        in suscipit diam. Pellentesque quis justo sit amet arcu
                        commodo sollicitudin. Integer finibus blandit
                        condimentum. Vivamus sit amet ligula ullamcorper,
                        pulvinar ante id, tristique erat. Quisque sit amet
                        aliquam urna. Maecenas blandit felis id massa sodales
                        finibus. Integer bibendum eu nulla eu sollicitudin. Sed
                        lobortis diam tincidunt accumsan faucibus. Quisque
                        blandit augue quis turpis auctor, dapibus euismod ante
                        ultricies. Ut non felis lacinia turpis feugiat euismod
                        at id magna. Sed ut orci arcu. Suspendisse sollicitudin
                        faucibus aliquet.
                    </p>
                    <p>
                        Nam dapibus consectetur erat in euismod. Cras urna
                        augue, mollis venenatis augue sed, porttitor aliquet
                        nibh. Sed tristique dictum elementum. Nulla imperdiet
                        sit amet quam eget lobortis. Etiam in neque sit amet
                        orci interdum tincidunt.
                    </p>
                    <div className="job-list-items">
                        <h3>Responsibilities</h3>
                        <ul>
                            <li>Quisque semper gravida est et consectetur.</li>
                            <li>
                                Curabitur blandit lorem velit, vitae pretium leo
                                placerat eget.
                            </li>
                            <li>Morbi mattis in ipsum ac tempus.</li>
                            <li>
                                Curabitur eu vehicula libero. Vestibulum sed
                                purus ullamcorper, lobortis lectus nec.
                            </li>
                            <li>
                                vulputate turpis. Quisque ante odio, iaculis a
                                porttitor sit amet.
                            </li>
                            <li>
                                lobortis vel lectus. Nulla at risus ut diam.
                            </li>
                            <li>
                                commodo feugiat. Nullam laoreet, diam placerat
                                dapibus tincidunt.
                            </li>
                            <li>
                                odio metus posuere lorem, id condimentum erat
                                velit nec neque.
                            </li>
                            <li>dui sodales ut. Curabitur tempus augue.</li>
                        </ul>
                    </div>
                </div>
                <div className="job-information">
                    <Flex vertical gap={20}>
                        <div className="job-overview">
                            <h3>Job Overview</h3>
                            <div className="job-overview-list">
                                <JobOverviewItem
                                    icon={<IconCalendar />}
                                    label="job posted"
                                    data="14 June, 2021"
                                />
                                <JobOverviewItem
                                    icon={<IconClock />}
                                    label="job expired in"
                                    data="14 June, 2021"
                                />
                                <JobOverviewItem
                                    icon={<IconEducation />}
                                    label="education"
                                    data="Graduation"
                                />
                                <JobOverviewItem
                                    icon={<IconSalary />}
                                    label="salery"
                                    data="$50k-80k/month"
                                />
                                <JobOverviewItem
                                    icon={<IconLocationBig />}
                                    label="location"
                                    data="New York, USA"
                                />
                                <JobOverviewItem
                                    icon={<IconEducation />}
                                    label="job type"
                                    data="Full Time"
                                />
                                <JobOverviewItem
                                    icon={<IconEducation />}
                                    label="experience"
                                    data="10-15 Years"
                                />
                            </div>
                        </div>
                        <Flex vertical gap={20} className="social-overview">
                            <Flex gap={12} align="center">
                                <IconInstagramBorder />
                                <Flex vertical gap={12} className="social-name">
                                    <h3>Instagram</h3>
                                    <p>Social networking service</p>
                                </Flex>
                            </Flex>
                            <Flex
                                vertical
                                gap={20}
                                className="social-overview-infor"
                            >
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    className="social-overview-infor-item"
                                >
                                    <span>Founded in:</span>
                                    <span>March 21, 2006</span>
                                </Flex>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    className="social-overview-infor-item"
                                >
                                    <span>Organization type:</span>
                                    <span>Private Company</span>
                                </Flex>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    className="social-overview-infor-item"
                                >
                                    <span>Company size:</span>
                                    <span>120-300 Employers</span>
                                </Flex>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    className="social-overview-infor-item"
                                >
                                    <span>Phone:</span>
                                    <span>(406) 555-0120</span>
                                </Flex>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    className="social-overview-infor-item"
                                >
                                    <span>Email:</span>
                                    <span>twitter@gmail.com</span>
                                </Flex>
                                <Flex
                                    align="center"
                                    justify="space-between"
                                    className="social-overview-infor-item"
                                >
                                    <span>Website:</span>
                                    <span>https://twitter.com</span>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </div>
            </Flex>
            <div className="job-details-related">
                <h2>Related Jobs</h2>
                <div className="job-related">
                    <JobItem link="/job-details" />
                    <JobItem link="/job-details" />
                    <JobItem link="/job-details" />
                </div>
            </div>
            <Modal
                title="Apply Job: Senior UX Designer"
                open={open}
                onCancel={() => setOpen(false)}
                footer={[
                    <Flex key="footer" align="center" justify="space-between">
                        <Button key="back" onClick={() => {}}>
                            Cancel
                        </Button>
                        ,
                        <Button
                            htmlType="submit"
                            type="primary"
                            form="apply-job"
                        >
                            Apply now
                        </Button>
                    </Flex>,
                ]}
            >
                <Form
                    form={form}
                    name="apply-job"
                    id="apply-job"
                    layout="vertical"
                    onFinish={() => {}}
                >
                    <Form.Item name="resume" label="Choose Resume">
                        <Input placeholder="Select" />
                    </Form.Item>
                    <Form.Item name="coverLetter" label="Cover Letter">
                        <Input.TextArea placeholder="Cover Letter" rows={4} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
});

export default JobDetails;