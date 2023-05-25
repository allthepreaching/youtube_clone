import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import {
    demoThumbnailUrl,
    demoVideoUrl,
    demoVideoTitle,
    demoChannelUrl,
    demoChannelTitle,
} from '../utils/constants';

const VideoCard = ({
    video: {
        info: { videoId },
        content,
    },
}) => (
    <Card
        sx={{
            width: { xs: '100%', sm: '358px', md: '320px' },
            boxShadow: 'none',
            borderRadius: 0,
        }}
    >
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
            <CardMedia
                image={content.thumbUrl || demoThumbnailUrl}
                alt={content.title}
                sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
            />
        </Link>
        <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                    {content.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link
                to={
                    content.vidCategory
                        ? `/channel/${content.vidCategory}`
                        : demoChannelUrl
                }
            >
                <Typography variant="subtitle2" color="gray">
                    {content.searchCategory || demoChannelTitle}
                    <CheckCircle
                        sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                    />
                </Typography>
            </Link>
        </CardContent>
    </Card>
);

export default VideoCard;
