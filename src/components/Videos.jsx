import React from 'react';
import { Stack, Box } from '@mui/material';
import { ProfileCard, VideoCard } from './';

const Videos = ({ videos }) => {
    return (
        <>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="start"
                gap={2}
            >
                {videos.map((video, idx) => (
                    <Box key={idx}>
                        {video.info.videoId != 'NULL' && (
                            <VideoCard video={video} />
                        )}
                        {video.info.profileId != 'NULL' && (
                            <ProfileCard profileDetail={video} />
                        )}
                    </Box>
                ))}
            </Stack>
            <div>Videos</div>
        </>
    );
};

export default Videos;
