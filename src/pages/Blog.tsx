import React, { useState, useEffect } from 'react';
import PageHeaderSection from "../components/PageHeaderSection/PageHeaderSection";
import istanbulImage from "../assets/istanbul_1.jpg";

const Blog = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredPost = {
    id: 1,
    title: "Navigating Cross-Border M&A Transactions in Emerging Markets",
    excerpt: "A comprehensive guide to structuring and executing successful mergers and acquisitions across jurisdictions, with insights on due diligence, regulatory compliance, and post-merger integration strategies for corporate clients.",
    category: "Corporate & Commercial",
    author: "Dr. Mehmet Özkan",
    date: "January 15, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "FIDIC Contracts in Major Infrastructure Projects: Risk Allocation Strategies",
      excerpt: "Analyzing key provisions in FIDIC Yellow and Silver Books for EPC contractors, focusing on force majeure, variation claims, and dispute resolution mechanisms in multi-billion dollar projects.",
      category: "EPC+F",
      author: "Elif Kara",
      date: "January 12, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
    },
    {
      id: 3,
      title: "Convertible Notes vs. SAFE Agreements: Structuring Early-Stage Investments",
      excerpt: "A detailed comparison of financing instruments for startups, including tax implications, conversion mechanics, and investor protection clauses in the Turkish legal framework.",
      category: "Technology & Ventures",
      author: "Can Yılmaz",
      date: "January 10, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80"
    },
    {
      id: 4,
      title: "Supply Chain Contracts: Managing Force Majeure in Post-Pandemic Era",
      excerpt: "Essential clauses for commercial agreements including hardship provisions, price adjustment mechanisms, and alternative performance obligations for corporate clients.",
      category: "Corporate & Commercial",
      author: "Zeynep Demir",
      date: "January 8, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
    },
    {
      id: 5,
      title: "AI and Data Privacy Compliance: KVKK & GDPR for Tech Companies",
      excerpt: "Navigating data protection requirements for AI-powered applications, including data processing agreements, cross-border transfers, and regulatory notifications.",
      category: "Technology & Ventures",
      author: "Dr. Ali Karaçam",
      date: "January 5, 2025",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      id: 6,
      title: "Project Finance Documentation: Key Issues in Renewable Energy Deals",
      excerpt: "Structuring bankable PPAs, EPC contracts, and security packages for solar and wind projects, with focus on completion guarantees and revenue stabilization.",
      category: "EPC+F",
      author: "Ayşe Şirin",
      date: "January 3, 2025",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80"
    },
    {
      id: 7,
      title: "Shareholder Agreements: Protecting Minority Investors in Joint Ventures",
      excerpt: "Drafting effective tag-along, drag-along, and exit provisions, plus strategies for deadlock resolution and valuation mechanisms in corporate partnerships.",
      category: "Corporate & Commercial",
      author: "Mehmet Özkan",
      date: "December 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
    },
    {
      id: 8,
      title: "Construction Disputes: Delay Analysis and Extension of Time Claims",
      excerpt: "Methods for proving critical path delays, concurrent delays, and acceleration claims in construction arbitrations, with case studies from major infrastructure disputes.",
      category: "EPC+F",
      author: "Bora Aksoy",
      date: "December 25, 2024",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
    },
    {
      id: 9,
      title: "Token Economics and Securities Law: Navigating Regulatory Frameworks",
      excerpt: "Legal structuring of utility vs. security tokens, compliance with capital markets regulations, and best practices for token generation events in multiple jurisdictions.",
      category: "Technology & Ventures",
      author: "Selin Aydın",
      date: "December 22, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
    }
  ];

  const categories = ['all', 'Corporate & Commercial', 'EPC+F', 'Technology & Ventures'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const containerStyle = {
    maxWidth: '80rem',
    margin: '0 auto'
  };

  return (
    <>
      <PageHeaderSection
        title="Blog"
        breadcrumb="Ana Sayfa / Blog"
        backgroundImage={istanbulImage}
      />
      <div style={{ backgroundColor: '#ffffff', color: '#333333' }}>
        {/* Hero Section */}
        <section style={{ padding: '8rem 2rem 5rem', backgroundColor: '#ffffff' }}>
          <div style={containerStyle}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 200, lineHeight: 1.1, marginBottom: '2rem', color: '#2e0d50' }}>
              Blog &
              <span style={{ display: 'block', color: '#666666' }}>Insights</span>
            </h1>
            <div style={{ width: '6rem', height: '1px', backgroundColor: '#2e0d50', marginBottom: '2rem' }}></div>
            <p style={{ fontSize: '1.25rem', color: '#666666', maxWidth: '42rem', fontWeight: 300, lineHeight: 1.6 }}>
              Expert insights on complex corporate transactions, infrastructure projects, and technology 
              ventures from our specialized legal teams across multiple jurisdictions.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section style={{ padding: '2rem', borderTop: '1px solid #e0e0e0' }}>
          <div style={containerStyle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              padding: '3rem',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)',
              boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div style={{
                height: '400px',
                backgroundImage: `url(${featuredPost.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                position: 'relative',
                overflow: 'hidden',
                transform: hoveredCard === 0 ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.5s'
              }}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: '#2e0d50',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  fontSize: '0.875rem',
                  fontWeight: 600
                }}>
                  FEATURED
                </div>
              </div>
              <div>
                <div style={{ 
                  fontSize: '0.875rem', 
                  color: '#666666', 
                  marginBottom: '1rem',
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <span>{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 300, marginBottom: '1rem', lineHeight: 1.2, color: '#333333' }}>
                  {featuredPost.title}
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#666666', lineHeight: 1.6, marginBottom: '2rem' }}>
                  {featuredPost.excerpt}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontSize: '0.875rem', color: '#666666' }}>
                    By <span style={{ color: '#333333', fontWeight: 600 }}>{featuredPost.author}</span>
                  </div>
                  <button style={{
                    padding: '0.75rem 2rem',
                    backgroundColor: '#2e0d50',
                    color: 'white',
                    border: 'none',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    borderRadius: '4px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#333333';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#2e0d50';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}>
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section style={{ padding: '3rem 2rem 0' }}>
          <div style={containerStyle}>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '3rem'
            }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: selectedCategory === category ? '#2e0d50' : 'transparent',
                    color: selectedCategory === category ? 'white' : '#333333',
                    border: `1px solid ${selectedCategory === category ? '#2e0d50' : '#e0e0e0'}`,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    borderRadius: '25px',
                    textTransform: 'capitalize'
                  }}
                  onMouseEnter={e => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (selectedCategory !== category) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }
                  }}>
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section style={{ padding: '0 2rem 5rem' }}>
          <div style={containerStyle}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
              gap: '2rem' 
            }}>
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  style={{
                    backgroundColor: hoveredCard === post.id ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    transform: hoveredCard === post.id ? 'translateY(-10px)' : 'translateY(0)',
                    opacity: scrollY > 200 + (index * 50) ? 1 : 0,
                    animation: `fadeInUp 0.8s ease ${index * 0.1}s forwards`
                  }}
                  onMouseEnter={() => setHoveredCard(post.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div style={{
                    height: '250px',
                    backgroundImage: `url(${post.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(82, 45, 114, 0.8) 100%)',
                      opacity: hoveredCard === post.id ? 1 : 0.7,
                      transition: 'opacity 0.3s'
                    }}></div>
                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem'
                    }}>
                      <div style={{
                        fontSize: '0.75rem',
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: '0.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}>
                        {post.category}
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 400, 
                      marginBottom: '1rem',
                      lineHeight: 1.3
                    }}>
                      {post.title}
                    </h3>
                    <p style={{ 
                      color: '#666666', 
                      lineHeight: 1.6, 
                      marginBottom: '1.5rem',
                      fontSize: '0.875rem'
                    }}>
                      {post.excerpt}
                    </p>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      fontSize: '0.75rem',
                      color: 'rgba(255,255,255,0.7)'
                    }}>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section style={{ 
          padding: '5rem 2rem',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%)',
          textAlign: 'center'
        }}>
          <div style={{ ...containerStyle, maxWidth: '600px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 200, marginBottom: '1rem' }}>
              Legal Intelligence Updates
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
              Receive curated insights on regulatory changes, market trends, and legal developments 
              affecting corporate transactions and technology ventures.
            </p>
            <div style={{ display: 'flex', gap: '1rem', maxWidth: '500px', margin: '0 auto' }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  padding: '1rem 1.5rem',
                  fontSize: '1rem',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  borderRadius: '4px',
                  outline: 'none'
                }}
              />
              <button style={{
                padding: '1rem 2rem',
                backgroundColor: 'white',
                color: 'rgba(0,0,0,0.8)',
                border: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s',
                borderRadius: '4px'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </section>

        <style>
          {`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            input::placeholder {
              color: rgba(255, 255, 255, 0.5);
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Blog;