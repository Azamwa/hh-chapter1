/** @jsx createVNode */
import { createVNode } from '../lib';

import { Footer, Header, Navigation, Post, PostForm } from '../components';
import { globalStore } from '../stores';

export const HomePage = () => {
  const { loggedIn, posts } = globalStore.getState();
  return (
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        <Header />

        <Navigation loggedIn={loggedIn} />

        <main class="p-4">
          {loggedIn ? <PostForm /> : ''}
          <div id="posts-container" class="space-y-4">
            {posts.map(props => (
              <Post {...props} />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
