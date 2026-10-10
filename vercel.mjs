const apiUrl = (process.env.API_URL || 'https://student-skill-tracker-api.onrender.com/api').replace(/\/+$/, '');

export const config = {
  framework: null,
  outputDirectory: 'frontend',
  rewrites: [
    {
      source: '/api/:path*',
      destination: `${apiUrl}/:path*`,
    },
  ],
};