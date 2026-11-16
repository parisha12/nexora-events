import hero from '../assets/images/conference-hero.webp';
import panel from '../assets/images/leadership-panel.jpg';
import stage from '../assets/images/future-stage.jpg';
import speaker from '../assets/images/keynote.jpg';
import audience from '../assets/images/audience.webp';
export const events = [
  {
    slug: 'future-of-work-summit',
    title: 'Future of Work Summit 2026',
    category: 'Conference',
    date: 'Sep 18–19',
    year: '2026',
    time: '09:00 AM',
    venue: 'The Glasshouse',
    city: 'New York',
    price: 249,
    image: hero,
    featured: true,
    attendees: 1240,
    host: 'Nexora Business Forum',
    description:
      'Two days of bold ideas, practical frameworks and meaningful connections shaping how modern teams work.',
    tags: ['AI at work', 'Culture', 'Leadership'],
  },
  {
    slug: 'leadership-in-motion',
    title: 'Leadership in Motion',
    category: 'Leadership',
    date: 'Oct 08',
    year: '2026',
    time: '10:30 AM',
    venue: 'Harbor Center',
    city: 'Singapore',
    price: 159,
    image: panel,
    attendees: 680,
    host: 'Lead Forward',
    description:
      'A focused gathering for leaders building resilient, human-centered organizations.',
    tags: ['Strategy', 'People', 'Growth'],
  },
  {
    slug: 'product-innovation-live',
    title: 'Product Innovation Live',
    category: 'Technology',
    date: 'Oct 22–23',
    year: '2026',
    time: '09:00 AM',
    venue: 'Messe Forum',
    city: 'Berlin',
    price: 199,
    image: stage,
    attendees: 910,
    host: 'Build Better Collective',
    description:
      'Product thinkers and technology leaders share what it takes to move from insight to impact.',
    tags: ['Product', 'Design', 'Technology'],
  },
  {
    slug: 'storytelling-for-impact',
    title: 'Storytelling for Impact',
    category: 'Workshop',
    date: 'Nov 04',
    year: '2026',
    time: '01:00 PM',
    venue: 'Canvas Studio',
    city: 'London',
    price: 79,
    image: speaker,
    attendees: 120,
    host: 'The Narrative Lab',
    description:
      'A practical half-day workshop to make your ideas clearer, sharper and impossible to ignore.',
    tags: ['Communication', 'Brand', 'Workshop'],
  },
  {
    slug: 'founders-after-five',
    title: 'Founders After Five',
    category: 'Networking',
    date: 'Nov 14',
    year: '2026',
    time: '05:30 PM',
    venue: 'Pier 27',
    city: 'San Francisco',
    price: 39,
    image: audience,
    attendees: 340,
    host: 'Northstar Founders',
    description:
      'An intentional evening for founders, operators and investors to meet beyond the pitch deck.',
    tags: ['Founders', 'Venture', 'Networking'],
  },
];
export const eventBySlug = (slug) => events.find((e) => e.slug === slug);
