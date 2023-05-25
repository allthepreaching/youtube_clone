import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Sidebar, Videos } from './';

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('Scourby Audio Bible');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(selectedCategory)
            .then((data) => {
                setVideos(data.videos);
            })
            .catch((error) => console.log(error));
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
            <Box
                sx={{
                    height: { sx: 'auto', md: '92vh' },
                    borderRight: '1px solid #3d3d3d',
                    px: { sx: 0, md: 2 },
                }}
            >
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography
                    className="copyright"
                    variant="body2"
                    sx={{ mt: 1.5, color: '#fff', fontWeight: 'bold' }}
                >
                    NO Copyright Forever | ALLthePREACHING
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    sx={{ color: '#fff' }}
                >
                    {selectedCategory}
                </Typography>
                <Videos videos={videos} />;
            </Box>
        </Stack>
    );
};

export default Feed;
