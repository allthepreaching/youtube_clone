import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ProfileCard } from '.';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ProfileDetail = () => {
    const [profileDetail, setProfileDetail] = useState();
    const [videos, setVideos] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        fetchFromAPI(`profiles?part=snippet&id=${id}`).then((data) =>
            setProfileDetail(data.items[0])
        );
        fetchFromAPI(`search?profileId=${id}&part=snippet&order=date`).then(
            (data) => setVideos(data.items)
        );
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        background:
                            'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 50%, rgba(0,0,0,1) 100%)',
                        zIndex: 10,
                        height: '300px',
                    }}
                />
                {profileDetail && (
                    <ProfileCard
                        profileDetail={profileDetail}
                        marginTop="-93px"
                    />
                )}
            </Box>
        </Box>
    );
};

export default ProfileDetail;
