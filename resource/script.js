// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('#mobileNav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80; // Account for fixed nav
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Founder Carousel
const founderCarousel = document.getElementById('founderCarousel');
const founderIndicators = document.getElementById('founderIndicators');
const founderPrev = document.getElementById('founderPrev');
const founderNext = document.getElementById('founderNext');

const founders = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    image: '/professional-female-business-executive.jpg',
    description: 'Agricultural engineer with 15+ years experience in sustainable farming practices.',
  },
  {
    name: 'James Murphy',
    role: 'CTO & Co-founder',
    image: '/professional-male-technology-expert.jpg',
    description: 'AI specialist focused on precision agriculture and IoT solutions.',
  },
  {
    name: 'Maria Garcia',
    role: 'COO & Co-founder',
    image: '/professional-female-business-operations.jpg',
    description: 'Supply chain expert connecting farmers to markets efficiently.',
  },
  {
    name: 'David Kumar',
    role: 'CFO & Co-founder',
    image: '/professional-male-finance-expert.jpg',
    description: 'Financial strategist with venture capital and startup experience.',
  },
  {
    name: 'Emma Wilson',
    role: 'VP Marketing & Co-founder',
    image: '/professional-female-marketing-leader.jpg',
    description: 'Brand builder passionate about connecting solutions to customers.',
  },
];

let founderIndex = 0;

function renderFounders() {
  founderCarousel.innerHTML = founders.map(founder => `
    <div class="min-w-full px-4">
      <div class="flex flex-col items-center text-center space-y-4">
        <div class="w-64 h-64 rounded-lg overflow-hidden shadow-lg bg-muted">
          <img
            src="${founder.image || '/placeholder.svg'}"
            alt="${founder.name}"
            class="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 class="text-2xl font-bold text-secondary">${founder.name}</h3>
          <p class="text-primary font-semibold">${founder.role}</p>
          <p class="text-foreground/70 mt-2 max-w-sm leading-relaxed">${founder.description}</p>
        </div>
      </div>
    </div>
  `).join('');

  founderIndicators.innerHTML = founders.map((_, index) => `
    <button
      class="w-2 h-2 rounded-full transition-colors ${
        index === founderIndex ? 'bg-primary' : 'bg-muted'
      }"
      onclick="founderIndex = ${index}; updateFounderCarousel()"
    />
  `).join('');

  updateFounderCarousel();
}

function updateFounderCarousel() {
  founderCarousel.style.transform = `translateX(-${founderIndex * 100}%)`;
  document.querySelectorAll('#founderIndicators button').forEach((btn, index) => {
    btn.className = `w-2 h-2 rounded-full transition-colors ${
      index === founderIndex ? 'bg-primary' : 'bg-muted'
    }`;
  });
}

founderPrev.addEventListener('click', () => {
  founderIndex = (founderIndex === 0) ? founders.length - 1 : founderIndex - 1;
  updateFounderCarousel();
});

founderNext.addEventListener('click', () => {
  founderIndex = (founderIndex === founders.length - 1) ? 0 : founderIndex + 1;
  updateFounderCarousel();
});

renderFounders();

// Problem Section Animation
const problemContainer = document.getElementById('problemContainer');
const problems = [
  {
    title: 'Agricultural Waste Crisis',
    content: 'High volume of agricultural waste is a major disposal challenge worldwide.',
  },
  {
    title: 'Inefficient Resource Usage',
    content: 'Farmers lack tools to optimize water, fertilizer, and pesticide usage.',
  },
  {
    title: 'Limited Market Access',
    content: 'Small-scale farmers struggle to connect with buyers and get fair prices.',
  },
  {
    title: 'Data Blind Spots',
    content: 'Lack of real-time insights into soil health, weather, and crop conditions.',
  },
];

function renderProblems() {
  problemContainer.innerHTML = problems.map((problem, index) => `
    <div
      class="p-6 rounded-lg border-l-4 border-primary bg-white opacity-0 translate-x-0 transform transition-all duration-700"
      style="transition-delay: ${index * 150}ms"
    >
      <h3 class="text-2xl font-bold text-secondary mb-2">${problem.title}</h3>
      <p class="text-foreground/80 leading-relaxed">${problem.content}</p>
    </div>
  `).join('');

  // Trigger animation on scroll
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      const cards = problemContainer.querySelectorAll('div');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
        }, index * 150);
      });
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.1 });

  observer.observe(problemContainer);
}

renderProblems();

// MVP & USP Section
const differentiators = [
  'Real-time soil and weather monitoring with AI predictions',
  'Direct farmer-to-buyer marketplace eliminating middlemen',
  'Proven 40% reduction in resource waste',
  'Affordable subscription model for small-scale farmers',
  'Multi-language support for global accessibility',
];

const differentiatorsContainer = document.getElementById('differentiators');
differentiatorsContainer.innerHTML = differentiators.map(diff => `
  <div class="flex gap-4 items-start">
    <div class="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
      <span class="text-primary-foreground text-sm font-bold">✓</span>
    </div>
    <p class="text-lg text-foreground/80 leading-relaxed">${diff}</p>
  </div>
`).join('');

// Team Grid
const teamGrid = document.getElementById('teamGrid');
const team = [
  { name: 'Sarah Chen', role: 'CEO', image: '/team-member-professional-photo.jpg' },
  { name: 'James Murphy', role: 'CTO', image: '/team-member-professional-photo.jpg' },
  { name: 'Maria Garcia', role: 'COO', image: '/team-member-professional-photo.jpg' },
  { name: 'David Kumar', role: 'CFO', image: '/team-member-professional-photo.jpg' },
  { name: 'Emma Wilson', role: 'VP Marketing', image: '/team-member-professional-photo.jpg' },
  { name: 'Alex Johnson', role: 'Head of Product', image: '/team-member-professional-photo.jpg' },
];

teamGrid.innerHTML = team.map(member => `
  <div class="flex flex-col items-center text-center">
    <div class="w-48 h-48 rounded-lg border-4 border-secondary overflow-hidden shadow-lg mb-4 bg-muted">
      <img
        src="${member.image || '/placeholder.svg'}"
        alt="${member.name}"
        class="w-full h-full object-cover"
      />
    </div>
    <h3 class="text-xl font-bold text-secondary">${member.name}</h3>
    <p class="text-primary font-semibold">${member.role}</p>
  </div>
`).join('');

// Timeline Carousel
const timelineCarousel = document.getElementById('timelineCarousel');
const timelineIndicators = document.getElementById('timelineIndicators');
const timelinePrev = document.getElementById('timelinePrev');
const timelineNext = document.getElementById('timelineNext');

const events = [
  {
    date: 'Q2 2024',
    title: 'Founded',
    description: 'AgriTech Solutions officially launched with our core team.',
  },
  {
    date: 'Q3 2024',
    title: 'MVP Launch',
    description: 'Released our first version of the IoT monitoring platform.',
  },
  {
    date: 'Q4 2024',
    title: 'Series A Funding',
    description: 'Secured $5M in seed funding to accelerate growth.',
  },
  {
    date: 'Q1 2025',
    title: 'Marketplace Launch',
    description: 'Introduced farmer-to-buyer marketplace connecting suppliers directly.',
  },
  {
    date: 'Q2 2025',
    title: 'Regional Expansion',
    description: 'Expanded operations to 3 new countries across Asia.',
  },
];

let timelineIndex = 2;

function renderTimeline() {
  timelineCarousel.innerHTML = events.map((event, index) => `
    <div class="min-w-full px-4">
      <div class="text-center space-y-4 p-8 bg-muted rounded-xl">
        <div class="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto font-bold text-lg">
          ${index + 1}
        </div>
        <p class="text-primary font-bold text-lg">${event.date}</p>
        <h3 class="text-2xl font-bold text-secondary">${event.title}</h3>
        <p class="text-foreground/80 leading-relaxed">${event.description}</p>
      </div>
    </div>
  `).join('');

  timelineIndicators.innerHTML = events.map((_, index) => `
    <button
      class="w-2 h-2 rounded-full transition-colors ${
        index === timelineIndex ? 'bg-primary' : 'bg-muted'
      }"
      onclick="timelineIndex = ${index}; updateTimelineCarousel()"
    />
  `).join('');

  updateTimelineCarousel();
}

function updateTimelineCarousel() {
  timelineCarousel.style.transform = `translateX(-${timelineIndex * 100}%)`;
  document.querySelectorAll('#timelineIndicators button').forEach((btn, index) => {
    btn.className = `w-2 h-2 rounded-full transition-colors ${
      index === timelineIndex ? 'bg-primary' : 'bg-muted'
    }`;
  });
}

timelinePrev.addEventListener('click', () => {
  timelineIndex = (timelineIndex === 0) ? events.length - 1 : timelineIndex - 1;
  updateTimelineCarousel();
});

timelineNext.addEventListener('click', () => {
  timelineIndex = (timelineIndex === events.length - 1) ? 0 : timelineIndex + 1;
  updateTimelineCarousel();
});

renderTimeline();

// Feature item interaction
const featureItems = document.querySelectorAll('.feature-item');
const featureDisplay = document.querySelector('.feature-display');

const featureContent = {
  precision: {
    title: 'Leverage advanced sensing technology and data analytics',
    description: 'to optimize planting, fertilization, and harvesting processes for maximum efficiency and yield.',
    image: '/precision-farming-technology-sensors.jpg'
  },
  weather: {
    title: 'Real-time weather monitoring and forecasting',
    description: 'Get accurate predictions and alerts to make informed decisions about planting, irrigation, and harvest timing.',
    image: '/weather-monitoring-agricultural-technology.jpg'
  },
  monitoring: {
    title: 'Advanced crop health monitoring systems',
    description: 'Track plant growth, detect diseases early, and optimize treatments with AI-powered image recognition and analysis.',
    image: '/crop-monitoring-drone-technology.jpg'
  },
  analytics: {
    title: 'Predictive analytics for better farm management',
    description: 'Use historical data and machine learning to predict yields, market trends, and optimal harvest windows.',
    image: '/agricultural-data-analytics-dashboard.jpg'
  },
  market: {
    title: 'Direct market access for better pricing',
    description: 'Connect directly with buyers, eliminate middlemen, and get fair prices for your produce through our digital marketplace.',
    image: '/digital-marketplace-agricultural-products.jpg'
  }
};

if (featureItems.length > 0 && featureDisplay) {
  featureItems.forEach(item => {
    item.addEventListener('click', () => {
      const feature = item.getAttribute('data-feature');
      if (featureContent[feature]) {
        const content = featureContent[feature];
        const displayImage = featureDisplay.querySelector('.feature-display-image');
        const displayTitle = featureDisplay.querySelector('.feature-display-title');
        const displayText = featureDisplay.querySelector('.feature-display-text');
        
        if (displayImage) displayImage.src = content.image;
        if (displayTitle) displayTitle.textContent = content.title;
        if (displayText) displayText.textContent = content.description;
        
        // Visual feedback
        featureItems.forEach(i => i.style.backgroundColor = 'white');
        item.style.backgroundColor = 'var(--accent)';
        item.style.color = 'white';
      }
    });
  });
}

// Scroll animations for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply scroll animations to feature cards
const cards = document.querySelectorAll('.feature-card');
cards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
  animateOnScroll.observe(card);
});

// Nav background on scroll
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
  } else {
    nav.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// CTA button interactions
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
ctaButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-2px)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
  });
});

// Carousel functionality
const carouselTrack = document.getElementById('carouselTrack');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let scrollAmount = 0;
const cardWidth = 350 + 24; // card width + gap

if (prevBtn && nextBtn && carouselTrack) {
  prevBtn.addEventListener('click', () => {
    carouselTrack.scrollBy({
      left: -cardWidth,
      behavior: 'smooth'
    });
  });

  nextBtn.addEventListener('click', () => {
    carouselTrack.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    });
  });
}

// Feature row interaction
const featureRows = document.querySelectorAll('.feature-row');
const featureDisplayImg = document.getElementById('featureDisplayImg');
const featureDisplayTitle = document.getElementById('featureDisplayTitle');

const featureData = {
  precision: {
    title: 'Leverage advanced sensing technology and data analytics to optimize planting, fertilization, and harvesting processes.',
    image: '/agricultural-drone-flying-over-green-farm-field.jpg'
  },
  irrigation: {
    title: 'Smart irrigation systems use sensors and weather data to deliver water precisely when and where crops need it most.',
    image: '/smart-irrigation-system-in-modern-farm.jpg'
  },
  monitoring: {
    title: 'Real-time crop health monitoring with AI-powered image recognition to detect diseases and pests early.',
    image: '/crop-monitoring-technology-satellite-imagery.jpg'
  },
  analytics: {
    title: 'Predictive analytics leverage historical data and machine learning to forecast yields and optimize harvest timing.',
    image: '/agricultural-data-analytics-dashboard-graphs.jpg'
  },
  market: {
    title: 'Mobile accessibility allows farmers to manage operations, monitor fields, and access markets from anywhere.',
    image: '/mobile-app-agricultural-technology-smartphone.jpg'
  }
};

featureRows.forEach(row => {
  row.addEventListener('click', () => {
    // Remove active class from all
    featureRows.forEach(r => {
      r.classList.remove('active');
      r.querySelector('.feature-icon').textContent = '-';
    });
    
    // Add active class to clicked
    row.classList.add('active');
    row.querySelector('.feature-icon').textContent = '+';
    
    // Update display
    const feature = row.getAttribute('data-feature');
    if (featureData[feature]) {
      if (featureDisplayImg) featureDisplayImg.src = featureData[feature].image;
      if (featureDisplayTitle) featureDisplayTitle.textContent = featureData[feature].title;
    }
  });
});

// Nav shadow on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

console.log('Terra Agricultural Technology - Website Loaded Successfully');
