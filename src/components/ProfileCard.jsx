import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { demoProfilePicture } from '../utils/constants';

const ProfileCard = ({ profileDetail, marginTop }) => {
    return (
        <Box
            sx={{
                boxShadow: 'none',
                borderRadius: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: { xs: '356px', md: '320px' },
                height: '326px',
                margin: 'auto',
                marginTop,
            }}
        >
            <Link to={`/profile/${profileDetail.id.profileId}`}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: '#fff',
                    }}
                >
                    <CardMedia
                        image={
                            profileDetail.snippet.thumbnails.high.url ||
                            demoProfilePicture
                        }
                        alt={profileDetail.snippet.title}
                        sx={{
                            borderRadius: '50%',
                            height: '180px',
                            width: '180px',
                            mb: 2,
                            border: '1px solid #677',
                        }}
                    />
                    <Typography variant="h6">
                        {profileDetail.snippet.title}
                        <CheckCircle
                            sx={{ fontSize: 14, color: '#677', ml: '5px' }}
                        />
                    </Typography>
                    <div>{console.log(profileDetail.id.statistics)}</div>
                    {profileDetail.statistics.subscriberCount && (
                        <Typography>
                            {parseInt(
                                profileDetail.statistics.subscriberCount
                            ).toLocaleString()}{' '}
                            Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
};

export default ProfileCard;
