const SITE_SEARCH_INDEX = [
  { title: 'Echoes of Summer', type: 'Music', description: 'Hit single by Nova Pulse.', href: 'music.html' },
  { title: 'Neon Dreams', type: 'Music', description: 'A synth-pop essential from Luna Echo.', href: 'music.html' },
  { title: 'Midnight Glow', type: 'Music', description: 'Dancefloor favorite by Pulse Sync.', href: 'music.html' },
  { title: 'Electric Vibes', type: 'Music', description: 'High-energy track from Sonic Wave.', href: 'music.html' },
  { title: 'City Lights', type: 'Video', description: 'Trending video clip from Aero Films.', href: 'videos.html' },
  { title: 'Night Drive', type: 'Video', description: 'Stylish visuals from Pulse Studios.', href: 'videos.html' },
  { title: 'The Neon Horizon', type: 'Movie', description: 'Sci-fi feature with acclaimed visuals.', href: 'movies.html' },
  { title: 'Nova Safari', type: 'Movie', description: 'Sci-fi adventure with stunning effects.', href: 'movies.html' },
  { title: 'Streaming Trends for 2026', type: 'Article', description: 'Analysis of the latest entertainment trends.', href: 'news.html' },
  { title: 'Festival Season: What to Expect', type: 'Article', description: 'Your guide to music festivals and concerts.', href: 'news.html' },
  { title: 'Summer Vibes 2026', type: 'Mixtape', description: 'Curated summer playlist for your weekend.', href: 'mixtape.html' },
  { title: 'Late Night Sessions', type: 'Mixtape', description: 'Ambient and chill tracks for late nights.', href: 'mixtape.html' }
];

const AUTH_USER = {
  email: 'ejimeprecious46@gmail.com',
  password: 'Holychild53',
  name: 'downloaded User',
  role: 'admin'
};

const STORAGE_KEY = 'downloadedUser';

// News Articles Database
const NEWS_ARTICLES = {
  'news-1': {
    id: 'news-1',
    title: 'New album release roundup',
    description: 'Check out this week\'s biggest records and what makes them essential listening.',
    content: 'This week brings an exciting collection of new album releases across multiple genres. From indie rock to hip-hop and R&B, there\'s something for every music lover. Our editors have selected the standout tracks and albums that deserve your attention.',
    author: 'Music Editor',
    publishDate: '2026-06-05',
    category: 'Music',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%23667eea" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-2': {
    id: 'news-2',
    title: 'Video premieres to watch',
    description: 'From viral clips to cinematic trailers, these premieres are making waves.',
    content: 'Discover the latest video premieres that are taking the internet by storm. We\'ve curated a selection of music videos, short films, and cinematic trailers that showcase cutting-edge filmmaking and creative direction.',
    author: 'Video Correspondent',
    publishDate: '2026-06-04',
    category: 'Videos',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%2376e4f7" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-3': {
    id: 'news-3',
    title: 'Movie picks for the weekend',
    description: 'Handpicked film recommendations for your next watch party.',
    content: 'Looking for your next movie night? Our critics have selected the best films currently available for streaming. Whether you\'re in the mood for action, drama, comedy, or science fiction, we\'ve got recommendations that will keep you entertained.',
    author: 'Film Critic',
    publishDate: '2026-06-03',
    category: 'Movies',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%23ffa502" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-4': {
    id: 'news-4',
    title: 'Festival highlights and recaps',
    description: 'Experience the best moments and exclusive performances from major music festivals.',
    content: 'This summer\'s festival season has been incredible! We bring you exclusive coverage of the biggest music festivals, featuring stunning performances, artist interviews, and behind-the-scenes moments that you won\'t find anywhere else.',
    author: 'Events Reporter',
    publishDate: '2026-06-02',
    category: 'Events',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%2349dba7" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-5': {
    id: 'news-5',
    title: 'Artist collaborations trending now',
    description: 'Epic team-ups breaking records and creating buzz across the industry.',
    content: 'Some of the year\'s biggest moments have been unexpected artist collaborations. We explore the most talked-about team-ups that are breaking records and shaping the future of music. From surprise features to genre-bending partnerships, these collaborations are redefining what\'s possible.',
    author: 'Music Analyst',
    publishDate: '2026-06-01',
    category: 'Music',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%23ff6b9d" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-6': {
    id: 'news-6',
    title: 'Behind the scenes production stories',
    description: 'Exclusive interviews and insights into how your favorite content is made.',
    content: 'Ever wondered how your favorite songs, videos, and films are created? We dive deep into the production process with exclusive interviews from producers, directors, and artists. Learn about the creative decisions, technical challenges, and inspiring moments that bring entertainment to life.',
    author: 'Production Correspondent',
    publishDate: '2026-05-31',
    category: 'Culture',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%239d5cff" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-7': {
    id: 'news-7',
    title: 'Streaming platform updates',
    description: 'Latest features, price changes, and new shows coming to your favorite services.',
    content: 'The streaming landscape is constantly evolving. We track all the latest updates from major platforms including new features, pricing changes, exclusive releases, and service improvements. Stay informed about what\'s changing in your favorite streaming services.',
    author: 'Tech Reporter',
    publishDate: '2026-05-30',
    category: 'Technology',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%2338b6ff" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-8': {
    id: 'news-8',
    title: 'Year in review: Top trends 2026',
    description: 'Analyzing the music, movies, and moments that defined the year so far.',
    content: 'Halfway through 2026, we\'ve seen some incredible moments in entertainment. This comprehensive analysis looks at the biggest trends, breakthrough artists, viral moments, and industry shifts that have defined the year. From streaming dominance to surprise comebacks, here\'s what matters.',
    author: 'Chief Entertainment Correspondent',
    publishDate: '2026-05-29',
    category: 'Analysis',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%23c9a0dc" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-9': {
    id: 'news-9',
    title: 'Emerging producers redefining sound',
    description: 'Fresh talent revolutionizing music production with innovative techniques.',
    content: 'A new wave of producers is transforming the music landscape with groundbreaking approaches to sound design and production. These talented individuals are challenging traditional methods and creating sonic experiences that captivate audiences worldwide.',
    author: 'Sound Design Editor',
    publishDate: '2026-05-28',
    category: 'Music',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%23ffc857" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-10': {
    id: 'news-10',
    title: 'Documentary highlights of June',
    description: 'Must-watch documentaries exploring music, culture, and entertainment.',
    content: 'June brings a compelling lineup of documentaries that offer deep insights into the entertainment industry. From artist biopics to cultural phenomena, these films provide fascinating perspectives on the creative process and industry dynamics.',
    author: 'Documentary Critic',
    publishDate: '2026-05-27',
    category: 'Movies',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%2312a8a8" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-11': {
    id: 'news-11',
    title: 'Music streaming records broken',
    description: 'Historic milestones as artists continue to break streaming records.',
    content: 'The music industry continues to reach new heights as artists break streaming records on an unprecedented scale. These achievements reflect the global reach of music platforms and the growing audience engagement in the digital age.',
    author: 'Industry Analyst',
    publishDate: '2026-05-26',
    category: 'Technology',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%238338ec" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-12': {
    id: 'news-12',
    title: 'Concert tour announcements',
    description: 'Exciting tour dates and venue announcements from major artists.',
    content: 'Summer tour season is here! Major artists are announcing exciting tour dates across the globe. From intimate venues to massive festivals, there\'s something for every music fan. Get the details on how to secure your tickets.',
    author: 'Tour Reporter',
    publishDate: '2026-05-25',
    category: 'Events',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%23ff006e" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-13': {
    id: 'news-13',
    title: 'Podcast boom continues strong',
    description: 'Audio content revolution as podcasts reach new audiences.',
    content: 'The podcast industry continues its explosive growth with new shows launching daily. From music reviews to behind-the-scenes interviews, audio content is becoming the preferred medium for entertainment discovery and consumption.',
    author: 'Audio Content Editor',
    publishDate: '2026-05-24',
    category: 'Culture',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%2300d9ff" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-14': {
    id: 'news-14',
    title: 'Music awards and recognition',
    description: 'Celebrating excellence in music with industry awards.',
    content: 'The latest music awards ceremony celebrates outstanding achievements in various genres. These prestigious awards recognize artists, producers, and creators who have made significant contributions to the entertainment industry this year.',
    author: 'Awards Correspondent',
    publishDate: '2026-05-23',
    category: 'Music',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%23fb5607" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-15': {
    id: 'news-15',
    title: 'Viral moments reshaping culture',
    description: 'Internet sensations and trending content changing entertainment landscape.',
    content: 'Viral moments continue to shape popular culture in unexpected ways. From spontaneous performances to creative challenges, these organic internet phenomena are proving that entertainment in 2026 is more democratic and participatory than ever.',
    author: 'Digital Culture Writer',
    publishDate: '2026-05-22',
    category: 'Culture',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%236366f1" width="400" height="240"/%3E%3C/svg%3E)'
  },
  'news-16': {
    id: 'news-16',
    title: 'International music week celebrations',
    description: 'Global music events connecting artists and fans worldwide.',
    content: 'International music week brings together artists and fans from around the globe to celebrate music and cultural diversity. With performances, workshops, and panel discussions, this week-long celebration showcases the universal power of music.',
    author: 'International Correspondent',
    publishDate: '2026-05-21',
    category: 'Events',
    image: 'url(data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="240"%3E%3Crect fill="%2310b981" width="400" height="240"/%3E%3C/svg%3E)'
  }
};

function getStoredUser() {
  try {
    const rawData = window.localStorage.getItem(STORAGE_KEY);
    if (!rawData) return null;
    return JSON.parse(rawData);
  } catch (error) {
    console.warn('Unable to parse stored user data', error);
    return null;
  }
}

function storeUser(user) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function clearUser() {
  window.localStorage.removeItem(STORAGE_KEY);
}

function normalizeArtistQuery(artist) {
  return encodeURIComponent(artist.trim().toLowerCase().replace(/\s+/g, '-'));
}

function expandArtistNameFromQuery(queryValue) {
  return queryValue ? queryValue.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : '';
}

function getArtistPageUrl(tag) {
  return `artist.html?artist=${normalizeArtistQuery(tag)}`;
}

function createArtistProfile(artistSlug) {
  const artist = lookupArtistTagBySlug(artistSlug);
  return {
    title: artist,
    summary: `Explore songs, albums, videos, and related content for ${artist}.`,
    songs: [
      `${artist} - Official Single`,
      `${artist} - Live Performance`,
      `${artist} - Remix Edition`
    ],
    albums: [
      `${artist} Essentials`,
      `${artist} Live`,
      `${artist} Greatest Hits`
    ],
    videos: [
      `${artist} Official Video`,
      `${artist} Behind The Scenes`,
      `${artist} Concert Cut`
    ],
    related: [
      `${artist} interview`,
      `${artist} fan playlist`,
      `${artist} studio session`
    ]
  };
}

function createMessageBox(parent, text, type = 'info') {
  let box = parent.querySelector('.message-box');
  if (!box) {
    box = document.createElement('div');
    box.className = 'message-box';
    parent.append(box);
  }
  box.textContent = text;
  box.classList.toggle('error', type === 'error');
  box.classList.toggle('success', type === 'success');
  box.classList.remove('hidden');
  return box;
}

function hideMessageBox(parent) {
  const box = parent.querySelector('.message-box');
  if (box) {
    box.classList.add('hidden');
  }
}

function renderSearchResults(container, query) {
  let resultsPane = container.querySelector('.search-results');
  if (!resultsPane) {
    resultsPane = document.createElement('div');
    resultsPane.className = 'search-results';
    container.append(resultsPane);
  }

  const normalized = query.toLowerCase();
  const results = SITE_SEARCH_INDEX.filter(item => {
    return [item.title, item.type, item.description].some(value => value.toLowerCase().includes(normalized));
  });

  if (results.length === 0) {
    resultsPane.innerHTML = `<div class="search-results-empty">No results found for "${query}".</div>`;
    return;
  }

  resultsPane.innerHTML = results.map(item => {
    return `
      <article class="search-result-item">
        <div>
          <strong>${item.title}</strong>
          <p>${item.description}</p>
        </div>
        <a class="search-result-link" href="${item.href}">${item.type}</a>
      </article>
    `;
  }).join('');
}

function handleSearchAction(button) {
  const container = button.closest('.search-container, .hero-search, .media-controls, .search-section');
  if (!container) return;
  const input = container.querySelector('input[type="search"], input[type="text"]');
  if (!input) return;

  const query = input.value.trim();
  if (!query) {
    createMessageBox(container, 'Enter a search term to discover music, videos, or movies.', 'error');
    return;
  }

  hideMessageBox(container);
  renderSearchResults(container, query);
}

function attachSearchHandlers() {
  document.querySelectorAll('button').forEach(button => {
    if (button.textContent.trim().toLowerCase() !== 'search') return;
    const container = button.closest('.search-container, .hero-search, .media-controls, .search-section');
    if (!container) return;
    const input = container.querySelector('input[type="search"], input[type="text"]');
    if (!input) return;

    button.addEventListener('click', () => handleSearchAction(button));
    input.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSearchAction(button);
      }
    });
  });
}

function setActiveNavigation() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === page);
  });
}

function updateAuthNav() {
  const currentUser = getStoredUser();
  const navAction = document.querySelector('.nav-action');
  const signInLink = document.querySelector('.nav-action a[href="signin.html"]');
  
  if (signInLink) {
    if (currentUser) {
      // Update Sign In link to Sign Out
      signInLink.textContent = 'Sign Out';
      signInLink.href = '#signout';
      signInLink.addEventListener('click', event => {
        event.preventDefault();
        clearUser();
        window.location.reload();
      });
      
      // Add Upload Content link for signed-in users
      if (!document.querySelector('a[href="upload.html"]') && !navAction.querySelector('a[href="upload.html"]')) {
        const uploadLink = document.createElement('a');
        uploadLink.href = 'upload.html';
        uploadLink.className = 'button secondary';
        uploadLink.textContent = 'Upload Content';
        uploadLink.style.marginRight = '12px';
        navAction.insertBefore(uploadLink, signInLink);
      }
    } else {
      signInLink.textContent = 'Sign In';
      signInLink.href = 'signin.html';
      
      // Remove Upload Content link if user logs out
      const uploadLink = navAction?.querySelector('a[href="upload.html"]');
      if (uploadLink) {
        uploadLink.remove();
      }
    }
  }
}

function handleSignInPage() {
  if (!window.location.pathname.endsWith('signin.html')) return;

  const pageShell = document.querySelector('.page-shell');
  const emailInput = document.querySelector('input[type="email"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const togglePasswordBtn = document.getElementById('toggle-password');
  const rememberMeCheckbox = document.getElementById('remember-me');
  const buttons = Array.from(document.querySelectorAll('button'));
  const signInButton = buttons.find(btn => btn.textContent.trim() === 'Sign In');
  const createButton = buttons.find(btn => btn.textContent.trim() === 'Create account');

  if (!emailInput || !passwordInput || !signInButton) return;

  // Check if user was previously remembered and auto-fill
  const savedEmail = localStorage.getItem('downloadedRememberedEmail');
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberMeCheckbox.checked = true;
  }

  const currentUser = getStoredUser();
  if (currentUser) {
    createMessageBox(pageShell, `You are already signed in as ${currentUser.name}. Visit the admin dashboard or sign out from the top menu.`, 'success');
  }

  // Toggle password visibility
  if (togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      togglePasswordBtn.textContent = isPassword ? '🙈' : '👁️';
    });
  }

  signInButton.addEventListener('click', () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValid) {
      createMessageBox(pageShell, 'Enter a valid email address.', 'error');
      return;
    }

    if (!password) {
      createMessageBox(pageShell, 'Enter your password.', 'error');
      return;
    }

    if (email.toLowerCase() !== AUTH_USER.email || password !== AUTH_USER.password) {
      createMessageBox(pageShell, 'The email or password does not match our records.', 'error');
      return;
    }

    // Handle remember me
    if (rememberMeCheckbox.checked) {
      localStorage.setItem('downloadedRememberedEmail', email);
    } else {
      localStorage.removeItem('downloadedRememberedEmail');
    }

    storeUser({ email: AUTH_USER.email, name: AUTH_USER.name, role: AUTH_USER.role });
    createMessageBox(pageShell, 'Signed in successfully! Redirecting to the admin dashboard...', 'success');
    setTimeout(() => {
      window.location.href = 'admin.html';
    }, 900);
  });

  if (createButton) {
    createButton.addEventListener('click', () => {
      createMessageBox(pageShell, 'Creating an account is not available in this demo. Use the credentials shown below to sign in.', 'info');
    });
  }
}

function renderRecentUploads() {
  const container = document.getElementById('recent-uploads');
  if (!container) return;

  const uploads = JSON.parse(localStorage.getItem('downloadedUploads')) || [];

  if (!uploads.length) {
    container.innerHTML = '<p class="uploads-empty">No uploads yet. <a href="upload.html">Create one now!</a></p>';
    return;
  }

  container.innerHTML = uploads.slice(0, 6).map(upload => `
    <article class="recent-upload-card">
      <h3>${upload.title || 'Untitled upload'}</h3>
      <p><strong>Type:</strong> ${upload.type || 'Content'}</p>
      <p><strong>Uploaded:</strong> ${upload.uploadDate || ''} at ${upload.uploadTime || ''}</p>
      <p>${Object.values(upload.details || {}).filter(Boolean).slice(0, 2).join(' • ') || 'No extra details provided.'}</p>
    </article>
  `).join('');
}

function handleAdminPage() {
  if (!window.location.pathname.endsWith('admin.html')) return;

  const currentUser = getStoredUser();
  const dashboard = document.getElementById('admin-dashboard-content');
  const loginPrompt = document.getElementById('admin-login-prompt');
  const welcomeTitle = document.getElementById('admin-welcome');
  const statusText = document.getElementById('admin-status');
  const logoutButton = document.getElementById('logout-btn');

  if (!dashboard || !loginPrompt) return;

  if (currentUser && currentUser.role === 'admin') {
    dashboard.classList.remove('hidden');
    loginPrompt.classList.add('hidden');
    if (welcomeTitle) {
      welcomeTitle.textContent = `Welcome back, ${currentUser.name}`;
    }
    if (statusText) {
      statusText.textContent = `Signed in as ${currentUser.name} (${currentUser.email})`;
    }
    renderRecentUploads();

    if (logoutButton) {
      logoutButton.onclick = () => {
        clearUser();
        window.location.reload();
      };
    }
    return;
  }

  dashboard.classList.add('hidden');
  loginPrompt.classList.remove('hidden');

  const adminEmail = document.getElementById('admin-email');
  const adminPassword = document.getElementById('admin-password');
  const adminButton = document.getElementById('admin-signin-button');
  const authMessage = document.getElementById('admin-auth-message');

  if (!adminEmail || !adminPassword || !adminButton || !authMessage) return;

  authMessage.classList.add('hidden');

  adminButton.addEventListener('click', () => {
    const email = adminEmail.value.trim();
    const password = adminPassword.value;
    if (!email || !password) {
      authMessage.textContent = 'Enter both email and password to continue.';
      authMessage.classList.remove('hidden');
      authMessage.classList.add('error');
      return;
    }

    if (email.toLowerCase() !== AUTH_USER.email || password !== AUTH_USER.password) {
      authMessage.textContent = 'Wrong credentials. Use admin@downloaded.com / Media2026!';
      authMessage.classList.remove('hidden');
      authMessage.classList.add('error');
      return;
    }

    storeUser({ email: AUTH_USER.email, name: AUTH_USER.name, role: AUTH_USER.role });
    window.location.reload();
  });
}

function setupNewsletterForms() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    const input = form.querySelector('input[type="email"]');
    const feedback = form.querySelector('.newsletter-feedback');

    form.addEventListener('submit', event => {
      event.preventDefault();
      const email = input.value.trim();
      const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!validEmail.test(email)) {
        feedback.textContent = 'Please enter a valid email address.';
        feedback.classList.remove('success');
        feedback.classList.add('error');
        input.focus();
        return;
      }

      feedback.textContent = 'Thanks for subscribing! Fresh updates are on the way.';
      feedback.classList.remove('error');
      feedback.classList.add('success');
      input.value = '';
    });
  });
}

function setupTabs() {
  document.querySelectorAll('.trending-tabs .tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.trending-tabs .tab').forEach(item => item.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function setupPagination() {
  document.querySelectorAll('.pagination').forEach(nav => {
    const grid = nav.previousElementSibling;
    if (!grid) return;
    const items = Array.from(grid.children);
    const pageSize = parseInt(nav.dataset.pagesize, 10) || 4;
    let current = 1;

    function totalPages() {
      return Math.max(1, Math.ceil(items.length / pageSize));
    }

    function showPage(p) {
      const t = totalPages();
      if (p < 1) p = 1;
      if (p > t) p = t;
      current = p;
      items.forEach((item, idx) => {
        item.style.display = idx >= (p - 1) * pageSize && idx < p * pageSize ? '' : 'none';
      });
      nav.querySelectorAll('.page').forEach(button => {
        const txt = button.textContent.trim();
        button.classList.toggle('active', txt === String(p));
      });
    }

    showPage(1);

    nav.addEventListener('click', event => {
      const button = event.target.closest('.page');
      if (!button) return;
      const txt = button.textContent.trim();
      if (txt === 'Next') {
        showPage(current + 1);
      } else if (txt === 'Prev') {
        showPage(current - 1);
      } else if (txt !== '…') {
        const pageNum = Number(txt);
        if (!Number.isNaN(pageNum)) showPage(pageNum);
      }
    });
  });
}

function setupMobileNav() {
  console.log('Setting up mobile nav...');
  
  const navToggle = document.querySelector('.nav-toggle');
  const header = document.querySelector('header.glass-nav');
  const navLinksContainer = document.querySelector('.nav-links');
  const navAction = document.querySelector('.nav-action');
  
  if (!navToggle || !header) {
    console.warn('Nav toggle or header not found');
    return;
  }
  
  // Toggle menu on hamburger click
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('Hamburger clicked');
    const wasOpen = header.classList.contains('menu-open');
    header.classList.toggle('menu-open');
    console.log('Menu is now:', wasOpen ? 'closed' : 'open');
  });
  
  // Close menu when clicking nav links
  if (navLinksContainer) {
    const navLinks = navLinksContainer.querySelectorAll('a');
    console.log('Found', navLinks.length, 'nav links');
    
    navLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        console.log('Nav link clicked:', link.href, 'Index:', index);
        // Allow navigation to happen
        setTimeout(() => {
          header.classList.remove('menu-open');
          console.log('Menu closed after navigation');
        }, 100);
      });
    });
  }
  
  // Close menu when clicking Sign In button
  if (navAction) {
    const actionLinks = navAction.querySelectorAll('a, button');
    console.log('Found', actionLinks.length, 'action links');
    
    actionLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        console.log('Action link clicked:', link.href || link.textContent);
        // Allow navigation to happen
        setTimeout(() => {
          header.classList.remove('menu-open');
          console.log('Menu closed after action');
        }, 100);
      });
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (header.classList.contains('menu-open')) {
      const isClickOnHeader = header.contains(e.target);
      const isClickOnToggle = e.target.closest('.nav-toggle');
      
      if (!isClickOnHeader && !isClickOnToggle) {
        console.log('Click outside detected, closing menu');
        header.classList.remove('menu-open');
      }
    }
  });
  
  // Close menu on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 720 && header.classList.contains('menu-open')) {
      console.log('Window resized to desktop, closing menu');
      header.classList.remove('menu-open');
    }
  });
  
  console.log('Mobile nav setup complete');
}

function setupFavorites() {
  const favBtns = document.querySelectorAll('.favorite-btn');
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  favBtns.forEach(btn => {
    const id = btn.closest('[data-detail-id]')?.dataset.detailId;
    if (id && favorites.includes(id)) {
      btn.classList.add('active');
      btn.textContent = '♥';
    }
    
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemId = btn.closest('[data-detail-id]')?.dataset.detailId;
      if (!itemId) return;
      
      const idx = favorites.indexOf(itemId);
      if (idx > -1) {
        favorites.splice(idx, 1);
        btn.classList.remove('active');
        btn.textContent = '♡';
      } else {
        favorites.push(itemId);
        btn.classList.add('active');
        btn.textContent = '♥';
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));
    });
  });
}

function setupFilterSort() {
  const filterSelects = document.querySelectorAll('.filter-options select');
  
  filterSelects.forEach(select => {
    select.addEventListener('change', () => {
      const section = select.closest('section');
      if (!section) return;
      
      const grid = section.querySelector('.grid, .media-grid, .trending-grid');
      const items = Array.from(grid?.children || []);
      
      const genreSelect = Array.from(filterSelects).find(s => s.options[0].text.includes('Genre'));
      const sortSelect = Array.from(filterSelects).find(s => s.options[0].text.includes('First') || s.options[0].text.includes('Popular'));
      
      let filtered = items;
      
      if (genreSelect?.value && genreSelect.value !== 'All Genres') {
        filtered = filtered.filter((item, idx) => {
          if (idx % 2 === 0) return true;
          return Math.random() > 0.5;
        });
      }
      
      if (sortSelect?.value && sortSelect.value === 'Most Popular') {
        filtered.reverse();
      }
      
      grid?.querySelectorAll('[style*="display"]').forEach(el => el.style.display = '');
    });
  });
}

function setupArtistVideos() {
  const artistButtons = document.querySelectorAll('.artist-link');
  const videoItems = document.querySelectorAll('.video-item');
  const clearButton = document.createElement('button');
  const artistInfo = document.querySelector('.artist-filter-info');

  if (!artistButtons.length || !videoItems.length) return;

  const resetFilter = () => {
    videoItems.forEach(item => item.style.display = '');
    artistButtons.forEach(btn => btn.classList.remove('active'));
    if (artistInfo) artistInfo.textContent = 'Click an artist name to view videos by that creator.';
    clearButton.style.display = 'none';
  };

  artistButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const artist = btn.dataset.artist;
      if (!artist) return;
      videoItems.forEach(item => {
        item.style.display = item.dataset.artist === artist ? '' : 'none';
      });
      artistButtons.forEach(other => other.classList.toggle('active', other === btn));
      if (artistInfo) artistInfo.textContent = `Showing videos by ${artist}.`;
      clearButton.style.display = 'inline-flex';
    });
  });

  clearButton.type = 'button';
  clearButton.className = 'button secondary small clear-artist-filter';
  clearButton.textContent = 'Show all artists';
  clearButton.style.display = 'none';
  clearButton.addEventListener('click', resetFilter);
  const filterSection = document.querySelector('.artist-filter-section');
  if (filterSection) filterSection.appendChild(clearButton);
}

function renderArtistList(items, targetId) {
  const list = document.getElementById(targetId);
  if (!list) return;
  list.innerHTML = items.length > 0
    ? items.map(item => `<li>${item}</li>`).join('')
    : '<li>No content available yet.</li>';
}

function setupArtistPage() {
  const pageShell = document.querySelector('.artist-page-shell');
  if (!pageShell) return;

  const params = new URLSearchParams(window.location.search);
  const artistSlug = params.get('artist');
  const profile = artistSlug ? createArtistProfile(artistSlug) : null;

  const titleElement = document.getElementById('artist-name');
  const summaryHeading = document.getElementById('artist-page-summary');
  const summaryBody = document.getElementById('artist-summary');

  if (!artistSlug || !profile) {
    if (titleElement) titleElement.textContent = 'Artist not found';
    if (summaryHeading) summaryHeading.textContent = 'No matching artist tag was found.';
    if (summaryBody) summaryBody.textContent = 'Choose an artist tag on the site to view curated songs, albums, videos, and content.';
    renderArtistList([], 'artist-songs');
    renderArtistList([], 'artist-albums');
    renderArtistList([], 'artist-videos');
    renderArtistList([], 'artist-related');
    return;
  }

  if (titleElement) titleElement.textContent = profile.title;
  if (summaryHeading) summaryHeading.textContent = `${profile.title} content hub.`;
  if (summaryBody) summaryBody.textContent = profile.summary;

  renderArtistList(profile.songs, 'artist-songs');
  renderArtistList(profile.albums, 'artist-albums');
  renderArtistList(profile.videos, 'artist-videos');
  renderArtistList(profile.related, 'artist-related');
}

function setupDetailPages() {
  document.querySelectorAll('.tile[data-detail-id], .article-card[data-detail-id], .trending-item, .media-item').forEach(item => {
    item.style.cursor = 'pointer';
    item.addEventListener('click', (e) => {
      if (e.target.closest('.favorite-btn') || e.target.closest('.button') || e.target.closest('a')) return;
      const id = item.dataset.detailId || item.textContent;
      const title = item.querySelector('h3, .track-title, .artist')?.textContent || 'Item';
      const img = item.querySelector('[style*="background-image"]')?.style.backgroundImage || '';
      
      showDetailModal({
        id: id || Math.random(),
        title: title,
        image: img,
        description: item.querySelector('p')?.textContent || 'View details and more information about this item.'
      });
    });
  });
}

function showDetailModal(item) {
  let modal = document.getElementById('detail-modal');
  const isNewsItem = item.id && String(item.id).startsWith('news-');
  
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'detail-modal';
    modal.className = 'detail-modal';
    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-content">
        <button class="modal-close">×</button>
        <div class="modal-image"></div>
        <div class="modal-body">
          <h2 class="modal-title"></h2>
          <p class="modal-description"></p>
          <div class="modal-player">
            <audio class="modal-audio-player" controls style="width: 100%; margin: 16px 0;"></audio>
          </div>
          <div class="modal-actions">
            <button class="button primary play-btn">▶ Play</button>
            <button class="button secondary download-btn">⬇ Download</button>
            <button class="button secondary share-btn">📤 Share</button>
          </div>
          <div class="news-features" style="display: none; margin-top: 16px; gap: 10px; display: flex; flex-direction: column;">
            <button class="button primary read-full-btn">📖 Read Full Article</button>
            <button class="button secondary save-article-btn">💾 Save Article</button>
            <button class="button secondary share-article-btn">📤 Share Article</button>
          </div>
          <div class="share-menu" style="display: none; margin-top: 12px; gap: 8px; display: flex; flex-wrap: wrap;">
            <button class="share-option" data-share="twitter">𝕏 Twitter</button>
            <button class="share-option" data-share="facebook">f Facebook</button>
            <button class="share-option" data-share="whatsapp">W WhatsApp</button>
            <button class="share-option" data-share="telegram">📱 Telegram</button>
            <button class="share-option" data-share="email">✉️ Email</button>
            <button class="share-option" data-share="copy">🔗 Copy Link</button>
          </div>
          <div class="modal-related">
            <h3 style="margin-top: 24px; margin-bottom: 12px; font-size: 16px;">Related Items</h3>
            <div class="related-items"></div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    modal.querySelector('.modal-close').addEventListener('click', () => modal.style.display = 'none');
    modal.querySelector('.modal-backdrop').addEventListener('click', () => modal.style.display = 'none');
    
    const playBtn = modal.querySelector('.play-btn');
    playBtn.addEventListener('click', () => {
      const audio = modal.querySelector('.modal-audio-player');
      if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸ Pause';
      } else {
        audio.pause();
        playBtn.textContent = '▶ Play';
      }
    });
    
    const downloadBtn = modal.querySelector('.download-btn');
    downloadBtn.addEventListener('click', () => {
      const title = modal.querySelector('.modal-title')?.textContent || 'Content';
      handleDownload(downloadBtn, title);
    });
    
    const readFullBtn = modal.querySelector('.read-full-btn');
    readFullBtn.addEventListener('click', () => {
      const articleId = modal.dataset.articleId || '';
      const title = modal.querySelector('.modal-title')?.textContent || 'Article';
      if (articleId) {
        window.location.href = 'news.html?id=' + articleId;
      } else {
        window.location.href = 'news.html';
      }
    });
    
    const saveArticleBtn = modal.querySelector('.save-article-btn');
    saveArticleBtn.addEventListener('click', () => {
      const title = modal.querySelector('.modal-title')?.textContent || 'Article';
      const saved = JSON.parse(localStorage.getItem('savedArticles')) || [];
      if (!saved.find(a => a.title === title)) {
        saved.unshift({ title: title, timestamp: Date.now() });
        localStorage.setItem('savedArticles', JSON.stringify(saved.slice(0, 50)));
        saveArticleBtn.textContent = '✓ Article Saved';
        saveArticleBtn.disabled = true;
        setTimeout(() => {
          saveArticleBtn.textContent = '💾 Save Article';
          saveArticleBtn.disabled = false;
        }, 2000);
      }
    });
    
    const shareArticleBtn = modal.querySelector('.share-article-btn');
    const shareMenu = modal.querySelector('.share-menu');
    shareArticleBtn.addEventListener('click', () => {
      shareMenu.style.display = shareMenu.style.display === 'none' ? 'flex' : 'none';
    });
    
    const shareBtn = modal.querySelector('.share-btn');
    shareBtn.addEventListener('click', () => {
      shareMenu.style.display = shareMenu.style.display === 'none' ? 'flex' : 'none';
    });
    
    modal.querySelectorAll('.share-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const type = e.target.dataset.share;
        const title = modal.querySelector('.modal-title').textContent;
        const url = window.location.href;
        shareContent(type, title, url);
        shareMenu.style.display = 'none';
      });
    });
  }
  
  // Show/hide elements based on item type
  const playBtn = modal.querySelector('.play-btn');
  const downloadBtn = modal.querySelector('.download-btn');
  const shareBtn = modal.querySelector('.share-btn');
  const audioPlayer = modal.querySelector('.modal-audio-player');
  const playerContainer = modal.querySelector('.modal-player');
  const newsFeatures = modal.querySelector('.news-features');
  
  if (isNewsItem) {
    playBtn.style.display = 'none';
    downloadBtn.style.display = 'none';
    shareBtn.style.display = 'none';
    playerContainer.style.display = 'none';
    newsFeatures.style.display = 'flex';
    modal.dataset.articleId = item.id;
  } else {
    playBtn.style.display = 'inline-block';
    downloadBtn.style.display = 'inline-block';
    shareBtn.style.display = 'inline-block';
    playerContainer.style.display = 'block';
    newsFeatures.style.display = 'none';
  }
  
  modal.querySelector('.modal-image').style.backgroundImage = item.image;
  modal.querySelector('.modal-title').textContent = item.title;
  modal.querySelector('.modal-description').textContent = item.description;
  
  // For news items, add article metadata if available
  if (isNewsItem) {
    const articleData = NEWS_ARTICLES[item.id];
    if (articleData) {
      modal.dataset.articleId = articleData.id;
      modal.dataset.articleTitle = articleData.title;
      modal.dataset.articleAuthor = articleData.author;
      modal.dataset.articleDate = articleData.publishDate;
      
      // Show full content instead of just description
      modal.querySelector('.modal-description').innerHTML = `
        <div style="margin: 16px 0;">
          <small style="color: #888;">
            <strong>${articleData.author}</strong> • ${articleData.publishDate} • ${articleData.category}
          </small>
        </div>
        <div>${articleData.content}</div>
      `;
    }
  }
  
  // Track in recently viewed
  trackRecentlyViewed(item);
  
  // Load related items
  loadRelatedItems(item, modal);
  
  modal.style.display = 'flex';
}

function shareContent(type, title, url) {
  const text = 'Check out ' + title + ' on downloaded!';
  const shareUrl = encodeURIComponent(url);
  const shareTitle = encodeURIComponent(title);
  const shareText = encodeURIComponent(text);
  
  switch(type) {
    case 'twitter':
      window.open('https://twitter.com/intent/tweet?text=' + shareText + '&url=' + shareUrl, '_blank');
      break;
    case 'facebook':
      window.open('https://www.facebook.com/sharer/sharer.php?u=' + shareUrl, '_blank');
      break;
    case 'whatsapp':
      window.open('https://wa.me/?text=' + shareText + ' ' + shareUrl, '_blank');
      break;
    case 'telegram':
      window.open('https://t.me/share/url?url=' + shareUrl + '&text=' + shareText, '_blank');
      break;
    case 'email':
      window.location.href = 'mailto:?subject=' + shareTitle + '&body=' + encodeURIComponent(text + '\n\n' + url);
      break;
    case 'copy':
      navigator.clipboard.writeText(url);
      alert('✓ Link copied to clipboard!');
      break;
  }
}

function trackRecentlyViewed(item) {
  const viewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
  const newItem = { id: item.id, title: item.title, timestamp: Date.now() };
  
  viewed.unshift(newItem);
  const unique = [];
  const ids = new Set();
  viewed.forEach(v => {
    if (!ids.has(v.id)) {
      unique.push(v);
      ids.add(v.id);
    }
  });
  
  localStorage.setItem('recentlyViewed', JSON.stringify(unique.slice(0, 20)));
}

function loadRelatedItems(item, modal) {
  const container = modal.querySelector('.related-items');
  const allItems = document.querySelectorAll('[data-detail-id]');
  const related = Array.from(allItems).slice(0, 4).map(el => ({
    id: el.dataset.detailId,
    title: el.querySelector('h3, .track-title')?.textContent || 'Item',
    type: el.classList.contains('trending-item') ? 'Track' : 'Content'
  }));
  
  container.innerHTML = related.map(r => 
    '<div style="padding: 8px 12px; background: rgba(255,255,255,0.05); border-radius: 8px; cursor: pointer; font-size: 14px;">' +
    r.title + ' <span style="opacity: 0.6;">(' + r.type + ')</span></div>'
  ).join('');
}

function setupRecentlyViewed() {
  const viewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
  if (viewed.length === 0) return;
  
  let section = document.getElementById('recently-viewed-section');
  if (!section) {
    section = document.createElement('section');
    section.id = 'recently-viewed-section';
    section.className = 'recently-viewed-section';
    section.innerHTML = `
      <div style="padding: 24px;">
        <span class="section-label">Your Activity</span>
        <h2>Recently Viewed</h2>
        <div class="recent-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px; margin-top: 16px;"></div>
      </div>
    `;
    const newsSection = document.getElementById('news');
    if (newsSection) newsSection.parentElement.insertBefore(section, newsSection);
  }
  
  const grid = section.querySelector('.recent-grid');
  grid.innerHTML = viewed.slice(0, 8).map(v => 
    '<div style="padding: 12px; background: rgba(99,102,241,0.1); border-radius: 12px; border: 1px solid rgba(99,102,241,0.3); cursor: pointer; font-size: 12px; text-align: center; overflow: hidden; text-overflow: ellipsis;" title="' + v.title + '">' +
    v.title + '</div>'
  ).join('');
}

function setupPlaylists() {
  const playlists = JSON.parse(localStorage.getItem('userPlaylists')) || [];
  
  document.querySelectorAll('.tile, .trending-item').forEach(item => {
    const playlistBtn = document.createElement('button');
    playlistBtn.className = 'playlist-btn';
    playlistBtn.textContent = '+ Playlist';
    playlistBtn.style.cssText = 'position: absolute; bottom: 12px; right: 12px; width: auto; padding: 6px 12px; font-size: 12px; background: rgba(139,92,246,0.2); border: 1px solid rgba(139,92,246,0.4); color: #d8b4fe; border-radius: 6px; cursor: pointer; transition: all 0.2s;';
    playlistBtn.addEventListener('mouseenter', () => {
      playlistBtn.style.background = 'rgba(139,92,246,0.4)';
      playlistBtn.style.borderColor = 'rgba(139,92,246,0.6)';
    });
    playlistBtn.addEventListener('mouseleave', () => {
      playlistBtn.style.background = 'rgba(139,92,246,0.2)';
      playlistBtn.style.borderColor = 'rgba(139,92,246,0.4)';
    });
    playlistBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemData = {
        id: item.dataset.detailId,
        title: item.querySelector('h3, .track-title')?.textContent || 'Item'
      };
      showPlaylistMenu(itemData, playlists);
    });
    if (item.querySelector('.favorite-btn')) {
      item.querySelector('.favorite-btn').parentElement.appendChild(playlistBtn);
    }
  });
}

function showPlaylistMenu(item, playlists) {
  const menu = prompt('Create or select playlist:\n\nExisting: ' + (playlists.map(p => p.name).join(', ') || 'None') + '\n\nEnter playlist name (or leave blank to cancel):', '');
  if (!menu) return;
  
  let playlist = playlists.find(p => p.name === menu);
  if (!playlist) {
    playlist = { name: menu, items: [] };
    playlists.push(playlist);
  }
  
  if (!playlist.items.find(i => i.id === item.id)) {
    playlist.items.push(item);
  }
  
  localStorage.setItem('userPlaylists', JSON.stringify(playlists));
  alert(item.title + ' added to "' + menu + '"!');
}

function setupSearchBar() {
  const searchBtns = document.querySelectorAll('button:has-text("Search"), .input-field + .button');
  const searchInputs = document.querySelectorAll('input[placeholder*="Search"]');
  
  searchInputs.forEach(input => {
    const btn = input.nextElementSibling;
    if (btn && btn.classList.contains('button')) {
      btn.addEventListener('click', () => performSearch(input.value));
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch(input.value);
      });
    }
  });
}

function performSearch(query) {
  if (!query.trim()) return;
  
  const results = SITE_SEARCH_INDEX.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );
  
  if (results.length > 0) {
    const first = results[0];
    showDetailModal({
      id: first.title,
      title: first.title + ' (' + first.type + ')',
      image: 'url(https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=760&q=80)',
      description: first.description + ' - Click to view on ' + first.type + ' page.'
    });
  } else {
    alert('No results found for "' + query + '"');
  }
}

function createDownloadFile(title, details = '') {
  const safeTitle = String(title || 'downloaded-content')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'downloaded-content';

  const content = [
    `Title: ${title}`,
    `Downloaded on: ${new Date().toLocaleString()}`,
    details ? `Details: ${details}` : '',
    'Source: downloaded MVP download flow'
  ].filter(Boolean).join('\n');

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  return { blob, fileName: `${safeTitle}.txt` };
}

function triggerDownload(title, details = '') {
  const { blob, fileName } = createDownloadFile(title, details);

  if (typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function') {
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(href), 1000);
    return true;
  }

  return false;
}

function handleDownload(button, title = 'Content') {
  const card = button.closest('.mixtape-card, .media-item, .movie-item, .trending-item, .tile, .explore-card, [data-detail-id]');
  const details = [
    card?.querySelector('.track-meta')?.textContent,
    card?.querySelector('.mixtape-meta')?.textContent,
    card?.querySelector('.genre')?.textContent,
    card?.querySelector('p')?.textContent
  ].filter(Boolean).join(' • ');

  triggerDownload(title, details);

  const downloads = JSON.parse(localStorage.getItem('downloads')) || [];
  downloads.push({
    title: title,
    details: details,
    timestamp: Date.now()
  });
  localStorage.setItem('downloads', JSON.stringify(downloads.slice(-50)));

  const originalText = button.textContent;
  button.textContent = '✓ Downloaded';
  button.style.opacity = '0.7';
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;
    button.style.opacity = '1';
    button.disabled = false;
  }, 2000);

  showDownloadNotification(title);
}

function showDownloadNotification(title) {
  let toast = document.getElementById('download-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'download-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      color: white;
      padding: 16px 24px;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.3);
      font-size: 14px;
      font-weight: 500;
      z-index: 10000;
      animation: slideIn 0.3s ease-out;
    `;
    document.body.appendChild(toast);
  }
  
  toast.textContent = '📥 ' + title + ' is downloading...';
  toast.style.display = 'block';
  
  setTimeout(() => {
    toast.style.display = 'none';
  }, 3000);
}

function setupDownloadButtons() {
  // Modal download button - will be set up when modal is created
  const setupModalDownload = () => {
    const modal = document.getElementById('detail-modal');
    if (!modal) return;
    const downloadBtn = modal.querySelector('.download-btn');
    if (downloadBtn && !downloadBtn.classList.contains('download-registered')) {
      downloadBtn.classList.add('download-registered');
      downloadBtn.addEventListener('click', () => {
        const title = modal.querySelector('.modal-title')?.textContent || 'Content';
        handleDownload(downloadBtn, title);
      });
    }
  };
  
  // Page download buttons (cards, videos, movies, mixtapes)
  document.querySelectorAll('button').forEach(btn => {
    const btnText = btn.textContent.toLowerCase();
    if ((btnText.includes('download') || btn.classList.contains('download-btn')) && !btn.classList.contains('download-registered')) {
      btn.classList.add('download-registered');
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.mixtape-card, .media-item, .movie-item, .trending-item, .tile, .explore-card, [data-detail-id]');
        const title = card?.querySelector('h3, .track-title, .track-details')?.textContent || 'Content';
        handleDownload(btn, title);
      });
    }
  });
  
  // Re-setup when modal is shown
  const observer = new MutationObserver(() => setupModalDownload());
  observer.observe(document.body, { childList: true, subtree: true });
}

function setupAds() {
  const ads = Array.from(document.querySelectorAll('.ad-card'));
  if (!ads.length) return;

  // compute sticky top from header if present
  const header = document.querySelector('.glass-nav');
  const adsContainer = document.querySelector('.trending-ads');
  if (header && adsContainer) {
    const top = header.offsetHeight + 16;
    adsContainer.style.top = top + 'px';
  }

  // show only first ad initially
  ads.forEach((ad, i) => ad.style.display = i === 0 ? 'block' : 'none');
  // record initial impression
  const recordImpression = (id) => {
    // try server tracking
    fetch('/api/ads/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, type: 'impression', ts: Date.now() })
    }).catch(() => {
      const impressions = JSON.parse(localStorage.getItem('adImpressions') || '{}');
      impressions[id] = (impressions[id] || 0) + 1;
      localStorage.setItem('adImpressions', JSON.stringify(impressions));
    });
  };

  recordImpression(ads[0].dataset.adId);

  let idx = 0;
  let interval = null;
  const rotate = () => {
    ads[idx].style.display = 'none';
    idx = (idx + 1) % ads.length;
    ads[idx].style.display = 'block';
    recordImpression(ads[idx].dataset.adId);
  };
  const start = () => { if (!interval) interval = setInterval(rotate, 6000); };
  const stop = () => { if (interval) { clearInterval(interval); interval = null; } };
  start();

  // pause on hover
  ads.forEach(ad => {
    ad.addEventListener('mouseenter', stop);
    ad.addEventListener('mouseleave', start);
  });

  // click handlers with server fallback
  document.querySelectorAll('.ad-cta').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const adCard = btn.closest('.ad-card');
      const id = adCard?.dataset.adId;
      // try server
      fetch('/api/ads/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, type: 'click', ts: Date.now() })
      }).catch(() => {
        const clicks = JSON.parse(localStorage.getItem('adClicks') || '{}');
        clicks[id] = (clicks[id] || 0) + 1;
        localStorage.setItem('adClicks', JSON.stringify(clicks));
      });
      const href = btn.dataset.adLink || '#';
      window.open(href, '_blank', 'noopener');
    });
  });
}

function setupPlayButtons() {
  document.querySelectorAll('.mixtape-card, .media-item, .movie-item').forEach(card => {
    const playBtn = card.querySelector('.play-btn') || card.querySelector('button[aria-label^="Play"]');
    if (!playBtn) return;
    if (playBtn.classList.contains('play-registered')) return;
    playBtn.classList.add('play-registered');
    playBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const title = card.querySelector('h3')?.textContent || card.dataset.detailId || 'Item';
      const desc = card.querySelector('.movie-details p, .mixtape-desc')?.textContent || '';
      const imgEl = card.querySelector('.movie-poster, .cover-image');
      const img = imgEl ? (getComputedStyle(imgEl).backgroundImage || '') : '';
      showDetailModal({ id: card.dataset.detailId || title, title: title, image: img, description: desc });
    });
  });
}

function setupNotifications() {
  const bell = document.getElementById('notification-bell');
  const badge = document.getElementById('notification-badge');
  
  if (!bell) return;
  
  const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
  
  if (notifications.length > 0) {
    badge.style.display = 'flex';
  }
  
  bell.addEventListener('click', () => {
    showNotificationsPanel(notifications);
  });
}

function showNotificationsPanel(notifications) {
  let panel = document.getElementById('notifications-panel');
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'notifications-panel';
    panel.className = 'notifications-panel';
    panel.innerHTML = `
      <div class="notifications-header">
        <h3>Notifications</h3>
        <button class="close-btn">×</button>
      </div>
      <div class="notifications-list"></div>
    `;
    document.body.appendChild(panel);
    panel.querySelector('.close-btn').addEventListener('click', () => panel.style.display = 'none');
  }
  
  const list = panel.querySelector('.notifications-list');
  if (notifications.length === 0) {
    list.innerHTML = '<p style="padding: 16px; text-align: center; color: #64748b;">No new notifications</p>';
  } else {
    list.innerHTML = notifications.map((n, idx) => `
      <div class="notification-item">
        <div>${n.message}</div>
        <small style="opacity: 0.6;">${n.time || 'Just now'}</small>
        <button style="background: none; border: none; color: #64748b; cursor: pointer; margin-top: 8px;" onclick="this.parentElement.style.display='none';">Dismiss</button>
      </div>
    `).join('');
  }
  
  panel.style.display = 'block';
}

function setupPersonalizedRecommendations() {
  const section = document.getElementById('personalized');
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  if (favorites.length === 0) return;
  
  section.style.display = 'block';
  
  const container = section.querySelector('.recommendations-grid');
  const allItems = document.querySelectorAll('[data-detail-id]');
  
  const recommendations = Array.from(allItems)
    .filter(item => favorites.includes(item.dataset.detailId))
    .slice(0, 8)
    .map(item => ({
      id: item.dataset.detailId,
      title: item.querySelector('h3, .track-title')?.textContent || 'Item',
      type: 'Recommended'
    }));
  
  if (recommendations.length > 0) {
    container.innerHTML = recommendations.map(r => `
      <div class="recommendation-card" style="padding: 12px; background: rgba(99,102,241,0.1); border-radius: 8px; cursor: pointer; border: 1px solid rgba(99,102,241,0.3); transition: all 0.2s;" title="${r.title}">
        <div style="font-size: 14px; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${r.title}</div>
        <small style="opacity: 0.6; display: block; margin-top: 4px;">${r.type}</small>
      </div>
    `).join('');
  }
  
  const tabs = section.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
}

function setupTopCharts() {
  const sections = document.querySelectorAll('.top-charts-section');
  
  sections.forEach(section => {
    const filters = section.querySelectorAll('.chart-filter');
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        filters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
        
        const items = section.querySelectorAll('.chart-item');
        items.forEach(item => {
          item.style.opacity = '0.5';
          setTimeout(() => item.style.opacity = '1', 100);
        });
      });
    });
  });
  
  addChartNotifications();
}

function addChartNotifications() {
  const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
  
  if (Math.random() > 0.7) {
    const newNotifications = [
      { message: '🎵 New releases in your favorite genre', time: '1h ago' },
      { message: '📹 Trending video from artist you follow', time: '2h ago' },
      { message: '⭐ Popular playlist updated', time: 'Today' }
    ];
    
    const toAdd = newNotifications.filter(n => !notifications.find(notif => notif.message === n.message));
    if (toAdd.length > 0) {
      notifications.unshift(...toAdd);
      localStorage.setItem('notifications', JSON.stringify(notifications.slice(0, 10)));
      
      const badge = document.getElementById('notification-badge');
      if (badge) badge.style.display = 'flex';
    }
  }
}

function handleUploadPage() {
  if (!window.location.pathname.endsWith('upload.html')) return;

  const currentUser = getStoredUser();
  const authPrompt = document.getElementById('upload-auth-prompt');
  const uploadSection = document.getElementById('upload-section');
  const uploadedSection = document.getElementById('uploaded-content-section');

  // Check authentication
  if (!currentUser || currentUser.role !== 'admin') {
    if (authPrompt) authPrompt.classList.remove('hidden');
    if (uploadSection) uploadSection.classList.add('hidden');
    if (uploadedSection) uploadedSection.classList.add('hidden');
    return;
  }

  // Show upload section if authenticated
  if (authPrompt) authPrompt.classList.add('hidden');
  if (uploadSection) uploadSection.classList.remove('hidden');
  if (uploadedSection) uploadedSection.classList.remove('hidden');

  // Handle form submissions
  const forms = [
    { id: 'music-upload-form', type: 'Music' },
    { id: 'video-upload-form', type: 'Video' },
    { id: 'movie-upload-form', type: 'Movie' },
    { id: 'news-upload-form', type: 'News' },
    { id: 'mixtape-upload-form', type: 'Mixtape' },
    { id: 'image-upload-form', type: 'Image' }
  ];

  forms.forEach(({ id, type }) => {
    const form = document.getElementById(id);
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        handleFormSubmit(form, type);
      });
    }
  });

  // Display uploaded items
  displayUploadedItems();
}

function handleFormSubmit(form, type) {
  const formData = new FormData(form);
  const upload = {
    id: Date.now(),
    type: type,
    title: form.querySelector('[id$="-title"]')?.value || 'Untitled',
    details: {},
    uploadDate: new Date().toLocaleDateString(),
    uploadTime: new Date().toLocaleTimeString()
  };

  // Collect form data
  form.querySelectorAll('input, textarea, select').forEach(field => {
    if (field.name || field.id) {
      const key = field.id || field.name;
      upload.details[key] = field.value;
    }
  });

  // Store in localStorage
  let uploads = JSON.parse(localStorage.getItem('downloadedUploads')) || [];
  uploads.unshift(upload);
  uploads = uploads.slice(0, 50); // Keep last 50 uploads
  localStorage.setItem('downloadedUploads', JSON.stringify(uploads));

  // Show success message
  const pageShell = document.querySelector('.page-shell');
  createMessageBox(pageShell, `✅ ${type} "${upload.title}" uploaded successfully!`, 'success');

  // Reset form
  form.reset();

  // Refresh display
  displayUploadedItems();
}

function displayUploadedItems() {
  const container = document.getElementById('uploaded-items');
  if (!container) return;

  const uploads = JSON.parse(localStorage.getItem('downloadedUploads')) || [];

  if (uploads.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #94a3b8; padding: 40px;">No uploads yet. Create your first upload above!</p>';
    return;
  }

  container.innerHTML = uploads.map(upload => `
    <div class="uploaded-item">
      <span class="uploaded-item-type">${upload.type}</span>
      <h3 class="uploaded-item-title">${upload.title}</h3>
      <p class="uploaded-item-info"><strong>Uploaded:</strong> ${upload.uploadDate} at ${upload.uploadTime}</p>
      <p class="uploaded-item-info"><strong>Details:</strong> ${Object.values(upload.details).filter(v => v).slice(0, 2).join(' • ')}</p>
      <div class="uploaded-item-actions">
        <button class="button secondary small" onclick="editUpload(${upload.id})">Edit</button>
        <button class="button secondary small" onclick="deleteUpload(${upload.id})">Delete</button>
      </div>
    </div>
  `).join('');
}

function editUpload(id) {
  const uploads = JSON.parse(localStorage.getItem('downloadedUploads')) || [];
  const upload = uploads.find(u => u.id === id);
  if (upload) {
    const pageShell = document.querySelector('.page-shell');
    createMessageBox(pageShell, `Edit feature for "${upload.title}" - Coming soon!`, 'info');
  }
}

function deleteUpload(id) {
  if (!confirm('Are you sure you want to delete this upload?')) return;

  let uploads = JSON.parse(localStorage.getItem('downloadedUploads')) || [];
  uploads = uploads.filter(u => u.id !== id);
  localStorage.setItem('downloadedUploads', JSON.stringify(uploads));

  const pageShell = document.querySelector('.page-shell');
  createMessageBox(pageShell, '✅ Upload deleted successfully!', 'success');
  displayUploadedItems();
}

function initPage() {
  setActiveNavigation();
  setupMobileNav();
  attachSearchHandlers();
  updateAuthNav();
  handleSignInPage();
  handleAdminPage();
  handleUploadPage();
  setupNewsletterForms();
  setupTabs();
  setupPagination();
  setupFavorites();
  setupFilterSort();
  setupDetailPages();
  setupSearchBar();
  setupRecentlyViewed();
  setupPlaylists();
  setupNotifications();
  setupPersonalizedRecommendations();
  setupTopCharts();
  setupArtistVideos();
  setupArtistPage();
  setupAds();
  setupPlayButtons();
  setupDownloadButtons();
}

document.addEventListener('DOMContentLoaded', initPage);
