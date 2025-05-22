import React from 'react';
import { Calendar, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      {/* Blog Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Our <span className="text-indigo-600 dark:text-indigo-400">Blog</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Explore articles connecting Sikh wisdom with modern mindset techniques for personal growth and spiritual development.
        </p>
      </section>

      {/* Featured Post */}
      <section className="mb-12">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5 bg-indigo-100 dark:bg-indigo-900/30 p-6 flex items-center justify-center">
              <div className="bg-indigo-600 text-white p-4 rounded-full">
                <span className="text-4xl font-bold">Featured</span>
              </div>
            </div>
            <div className="md:w-3/5 p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">
                  Mindfulness
                </span>
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 rounded-full text-sm">
                  Sikh Principles
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                Moving Beyond Fear: Levels of Consciousness
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Explore how Sikh teachings can help you understand and overcome different levels of fear, transforming your mindset and approach to challenges.
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar className="h-4 w-4 mr-1" />
                <span>May 22, 2024</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
              <Link to="/blog/moving-beyond-fear-levels-of-consciousness" className="text-indigo-600 dark:text-indigo-400 font-medium inline-flex items-center hover:text-indigo-800 dark:hover:text-indigo-300 transition">
                Read Article
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          Get the latest articles, resources, and insights delivered directly to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-500 text-gray-800 dark:text-white dark:bg-gray-700 w-full"
          />
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  categories: string[];
  slug?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Concept of Chardi Kala in Daily Life",
    excerpt: "How to maintain a positive spirit and eternal optimism even in challenging times.",
    date: "June 10, 2024",
    readTime: "5 min read",
    categories: ["Mindset", "Sikh Principles"],
    slug: "chardi-kala-daily-life"
  },
  {
    id: 2,
    title: "Seva: The Practice of Selfless Service",
    excerpt: "Exploring how selfless service can transform your life and community.",
    date: "June 5, 2024",
    readTime: "6 min read",
    categories: ["Community", "Spirituality"],
    slug: "seva-selfless-service"
  },
  {
    id: 3,
    title: "Morning Routines Inspired by Amrit Vela",
    excerpt: "Creating a powerful morning routine based on the Sikh practice of early morning meditation.",
    date: "May 28, 2024",
    readTime: "7 min read",
    categories: ["Productivity", "Spirituality"],
    slug: "morning-routines-amrit-vela"
  },
  {
    id: 4,
    title: "Overcoming Fear Through Sikh Teachings",
    excerpt: "How Sikh principles can help you face and overcome your fears.",
    date: "May 20, 2024",
    readTime: "4 min read",
    categories: ["Mindset", "Personal Growth"],
    slug: "overcoming-fear-sikh-teachings"
  },
  {
    id: 5,
    title: "The Power of Sangat: Building Community",
    excerpt: "How surrounding yourself with positive influences can accelerate your growth.",
    date: "May 15, 2024",
    readTime: "6 min read",
    categories: ["Community", "Relationships"],
    slug: "power-of-sangat-community"
  },
  {
    id: 6,
    title: "Meditation Techniques from Sikh Traditions",
    excerpt: "Practical meditation approaches derived from Sikh spiritual practices.",
    date: "May 8, 2024",
    readTime: "8 min read",
    categories: ["Meditation", "Spirituality"],
    slug: "meditation-techniques-sikh-traditions"
  }
];

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.map((category, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 rounded-full text-xs"
            >
              {category}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <Link to={`/blog/${post.slug || ''}`} className="text-indigo-600 dark:text-indigo-400 font-medium inline-flex items-center hover:text-indigo-800 dark:hover:text-indigo-300 transition">
          Read Article
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default Blog;