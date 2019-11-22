export default {
  items: [
    {
      title: true,
      name: 'TravelWealth',
      url: '/wallet',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Easy Go Wallet',
      url: '/wallet',
      icon: 'icon-wallet',
    },
    {
      name: 'Award Wallet',
      url: 'https://awardwallet.com/',
      icon: 'fas fa-chart-bar',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Credit Cards',
      url: '/wallet',
      icon: 'icon-credit-card',
      children: [
        {
          name: 'Active Cards',
          url: '/active-cards',
          icon: 'icon-check',
        },
        {
          name: 'Recommendations',
          url: '/wallet',
          icon: 'icon-puzzle',
        },
        {
          name: 'Request a new card',
          url: '/request-card',
          icon: 'icon-plus',
        },
      ],
    },
    {
      name: 'Classroom',
      url: '/classroom',
      icon: 'fas fa-chalkboard-teacher'
    },
    {
      name: 'Meet with JJ',
      url: 'https://calendly.com/easygotraveler/checkin?month=2019-11',
      icon: 'icon-calendar',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      divider: true,
    },
    {
      name: 'Travel',
      url: '/wallet',
      icon: 'icon-globe',
      children: [
        {
          name: 'Request a Flight',
          url: '/request-flights',
          icon: 'icon-plane',
          class: 'mt-auto',
          variant: 'info',
        },
        {
          name: 'Request a hotel',
          url: '/wallet',
          icon: 'fas fa-bed',
          class: 'mt-auto',
          variant: 'success',
          attributes: { target: '_blank', rel: "noopener" },
        },
      ],
    },
    {
      name: 'Refer a Friend',
      url: 'https://calendly.com/easygotraveler/checkin?month=2019-11',
      icon: 'fas fa-users',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'facebook',
      url: '/request-flights',
      icon: 'fab fa-facebook-f',
    },
    {
      name: 'instagram',
      url: '/wallet',
      icon: 'fab fa-instagram',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'twitter',
      url: '/wallet',
      icon: 'fab fa-twitter',
      attributes: { target: '_blank', rel: "noopener" },
    },
    {
      name: 'Deal Alert',
      url: '/wallet',
      icon: 'fab fa-twitter fas fa-bell',
      class: 'mt-auto',
      attributes: { target: '_blank', rel: "noopener", disabled:true },
    },
  ],
};
