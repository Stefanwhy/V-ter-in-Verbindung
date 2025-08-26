
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BlogList from './components/BlogList';
import Footer from './components/Footer';
import BlogPostView from './components/BlogPostView';
import AboutSection from './components/AboutSection';
import { BLOG_POSTS } from './constants';
import type { Post } from './types';

function App() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const handleSelectPost = (post: Post) => {
    setSelectedPost(post);
    window.scrollTo(0, 0);
  };

  const handleGoBack = () => {
    setSelectedPost(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {selectedPost ? (
          <BlogPostView post={selectedPost} onGoBack={handleGoBack} />
        ) : (
          <>
            <HeroSection />
            <AboutSection />
            <BlogList posts={BLOG_POSTS} onSelectPost={handleSelectPost} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
