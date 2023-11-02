export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Portfolio', href: '/portfolio' },
    { text: 'Blog', href: '/blog'},
    { text: 'Github', href: 'https://github.com/yahia3200', target: '_blank' }
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  secondaryLinks: [],
  links: [],
  socialLinks: [
    
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made using <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/onwidget/astrowind"> &nbsp; onWidget AstroWind</a> .
  `,
};
