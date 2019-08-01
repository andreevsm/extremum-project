export const gameItemFactory = (target, index) => {
  switch (index) {
    case 0:
      return {
        ...target,
        type: 'social',
        settings: {
          title: 'facebook',
          link: 'https://www.facebook.com/OURWAYGG/',
        },
      };
    case 1:
      return {
        ...target,
        type: 'player',
        settings: { nick: 'TaLkeR', name: 'Aleksey Eroshkin', link: 'https://youtu.be/gyZoLxCom1I' },
      };
    case 2:
      return {
        ...target,
        type: 'social',
        settings: { title: 'twitter', link: 'https://twitter.com/ourwaygg' },
      };
    case 3:
      return {
        ...target,
        type: 'player',
        settings: { nick: 'waterfaLLZ', name: 'Nikita Matveyev', link: 'https://www.youtube.com/watch?v=Zx-mwMf24Qg' },
      };
    case 4:
      return { ...target, type: 'other', settings: { link: 'https://extremum.gg/' } };
    case 5:
      return {
        ...target,
        type: 'player',
        settings: { nick: 'iksou', name: 'Dmitry Mikhaylichenko' },
      };
    case 6:
      return {
        ...target,
        type: 'social',
        settings: {
          title: 'reddit',
          link: 'https://www.reddit.com/r/OURWAYGG',
        },
      };
    case 7:
      return {
        ...target,
        type: 'player',
        settings: { nick: 'balblna', name: 'Gregory Oleinick', link: 'https://www.youtube.com/watch?v=L-QnOoY1vzI' },
      };
    case 8:
      return {
        ...target,
        type: 'social',
        settings: {
          title: 'instagram',
          description: 'insta description',
          link: 'https://www.instagram.com/OURWAYGG/',
        },
      };
    case 9:
      return {
        ...target,
        type: 'player',
        settings: { nick: 'vitosh', name: 'Vitaly Orischenko', link: 'https://youtu.be/Hplxp4dnKbs' },
      };
    case 10:
      return {
        ...target,
        type: 'social',
        settings: {
          title: 'youtube',
          link: 'https://www.youtube.com/channel/UCZw_GSVKur3557ksW7tqHUQ',
        },
      };
    case 11:
      return {
        ...target,
        type: 'player',
        settings: { nick: 'airscape', name: 'Sergey Marochkin', link: 'https://youtu.be/ZeUqinlgX0A' },
      };
    case 12:
      return { ...target, type: 'logo', settings: {} };
    default:
      return target;
  }
};
