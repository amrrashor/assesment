import React, { useState, useEffect } from 'react';
import { CardList, MainLayout } from '@organisms';
import { TextField, Loader } from '@atoms';
import { POSTS } from '@apis';

const Posts = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    
    // Initialize state variable for the number of posts to display
    const [sliceIndex, setSliceIndex] = useState(20);

    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 576) {
            setSliceIndex(5); // set smaller sliceIndex for smaller screens
        } else if (window.innerWidth <= 768) {
            setSliceIndex(10);
        } else {
            setSliceIndex(20);
        }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);

    // Fetch posts data from API when component mounts
    useEffect(() => {
        const fetchPosts = async () => {
        try {
            const response = await fetch(POSTS);
            const data = await response.json();
            setPosts(data);
            setIsLoading(false);
        } catch (error) {
            setError('Error fetching posts.');
            setIsLoading(false);
        }
        };

        fetchPosts();
    }, []);

    // Function to handle scrolling and lazy loading more posts
    const handleScroll = () => {
    // Get scroll position, document height, and viewport height
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const viewportHeight = window.innerHeight;

    // If user has scrolled to the bottom of the page or close to it, update sliceIndex state variable to display more posts
    if (scrollTop + clientHeight >= scrollHeight - viewportHeight * 0.2) {
        setSliceIndex(sliceIndex + 20);
    }
    };


    // Add event listener for scrolling and remove it when component unmounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [sliceIndex]);

    // Slice posts array based on current sliceIndex value
    const displayedPosts = posts.slice(0, sliceIndex);

    console.log(posts.userId)
    return (
        <MainLayout home logo>
            <TextField search placeholder="Search Posts" onChange={(e) => setSearchTerm(e.target.value)} />
            {isLoading ? (
                <Loader />
            ) : error ? (
                <div>{error}</div>
            ) : (
                <CardList home search={searchTerm} post={displayedPosts} />
            )}
        </MainLayout>
    );
};

export default Posts;
