export const APP_NAME = 'SinghKaurs';
export const APP_DESCRIPTION = 'Transform your life through timeless Sikh wisdom';

export const ROUTES = {
  HOME: '/',
  JOURNEYS: '/journeys',
  JOURNEY: '/journey/:slug',
  PRINCIPLE: '/journey/:slug/principle/:id',
  PROFILE: '/profile',
} as const;

export const EXTERNAL_LINKS = {
  BLOG: 'https://singhskaurs.com',
  GITHUB: 'https://github.com/GeeksikhSecurity/singhskaurs-blog',
  CONTACT: 'mailto:gurvinder@singhskaurs.com',
} as const;

export const META = {
  TITLE_TEMPLATE: '%s | SinghKaurs',
  DEFAULT_TITLE: 'SinghKaurs - Modern Sikh Wisdom',
  DEFAULT_DESCRIPTION: 'Transform your life through timeless Sikh principles and modern mindset techniques. An interactive journey of growth and wisdom.',
} as const;