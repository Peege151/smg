//key
// - = drop
// space = _
// slash = -

const CATEGORIES = [
  { title: 'Vibe',
    selector: 'vibe',
    inline: true,
    variants: [
      { title: 'Anthemic', status: 0, value: 'anthemic' },
      { title: 'Atmospheric', status: 0, value: 'atmospheric' },
      { title: 'Cinematic', status: 0, value: 'cinematic' },
      { title: 'Cover Song', status: 0, value: 'cover_song' },
      { title: 'Dark', status: 0, value: 'dark' },
      { title: 'Driving', status: 0, value: 'driving' },
      { title: 'Ethereal', status: 0, value: 'ethereal' },
      { title: 'Feel Good', status: 0, value: 'feel_good' },
      { title: 'Fun', status: 0, value: 'fun' },
      { title: 'Holiday', status: 0, value: 'holiday' },
      { title: 'Sad', status: 0, value: 'sad' },
      { title: 'Sultry', status: 0, value: 'sultry' },
    ]
  },
  {
    title: 'Sounds Like',
    selector: 'relatedArtists',
    inline: true,
    variants: [
      { title: 'Adele', status: 0, value: 'adele'},
      { title: 'Arcade Fire', status: 0, value: 'arcade_fire' },
      { title: 'Beyonce / Rihanna', status: 0, value: 'beyonce-rihanna' },
      { title: 'Coldplay / U2', status: 0, value: 'coldplay-u2' },
      { title: 'Feist', status: 0, value: 'fiest'},
      { title: 'Film Score', status: 0, value: 'film_score'},
      { title: 'Jay-Z', status: 0, value: 'jayz'},
      { title: 'Mumford / Lumineers', status: 0, value: 'mumford-lumineers'},
      { title: 'Muse', status: 0, value: 'muse'},
      { title: 'Nine Inch Nails', status: 0, value: 'nine_inch_nails'},
      { title: 'Passion Pit', status: 0, value: 'passion_pit'},
      { title: 'M83', status: 0, value: 'm83' },
      { title: 'The Black Keys', status: 0, value: 'the_black_' },
    ]
  },
  { title: 'Genres',
    selector: 'genres',
    inline: true,
    variants: [
      { title: 'Beats', status: 0, value: 'beats' },
      { title: 'Blues', status: 0, value: 'blues' },
      { title: 'Country', status: 0, value: 'country' },
      { title: 'Disco', status: 0, value: 'disco' },
      { title: 'Electronic', status: 0, value: 'electronic' },
      { title: 'Folk', status: 0, value: 'folk' },
      { title: 'Funk', status: 0, value: 'funk' },
      { title: 'Gospel', status: 0, value: 'gospel' },
      { title: 'Grunge', status: 0, value: 'grunge' },
      { title: 'Hip-Hop / Rap', status: 0, value: 'hiphop-rap' },
      { title: 'Indie Rock', status: 0, value: 'indie_rock' },
      { title: 'Pop', status: 0, value: 'pop' },
      { title: 'Punk', status: 0, value: 'punk' },
      { title: 'R&B', status: 0, value: 'rnb' },
      { title: 'Rock', status: 0, value: 'rock' },
      { title: 'Soul', status: 0, value: 'soul' },
      { title: 'World', status: 0, value: 'world' },
      { title: 'Metal', status: 0, value: 'metal' },
      { title: 'Jazz', status: 0, value: 'jazz' },
      { title: 'Lounge / Easy Listening', status: 0, value: 'lounge-easy_listening' },
    ]
  },
  { title: 'Instruments',
    selector: 'instruments',
    inline: false,
    variants: [
      { title: 'Piano', status: 0, value: 'piano' },
      { title: 'Acoustic Guitar', status: 0, value: 'acoustic_guitar' },
      { title: 'Electric Guitar', status: 0, value: 'electric_guitar' },
      { title: 'Hand Claps', status: 0, value: 'hand_claps' },
      { title: 'Horns', status: 0, value: 'horns' },
      { title: 'Strings', status: 0, value: 'strings' },
      { title: 'Drums', status: 0, value: 'drums' },
      { title: 'Oohs & Ahhs', status: 0, value: 'oohs_n_ahhs' },
      { title: 'Organ', status: 0, value: 'organ' },
      { title: 'Synths', status: 0, value: 'synth' },

    ]
  },
  { title: 'Tempo',
    inline: false,
    selector: 'tempo',
    variants: [
      {
        title: 'Slow Speed',
        status: 0, value: '60-90',
        selected: false,
      },
      {
        title: 'Medium Speed',
        status: 0, value: '91-120',
        selected: false,
      },
      {
        title: `Fast Speed`,
        status: 0, value: '121+',
        selected: false,
      }
    ]
  },
  { title: 'Vocals',
    inline: false,
    selector: 'vocals',
    variants: [
      {
        title: 'Male Vocals',
        status: 0, value: 'male_vocals',
      },
      {
        title: 'Female Vocals',
        status: 0, value: 'female_vocals',
      },
      {
        title: 'Duet',
        status: 0, value: 'duet',
      },
      {
        title: 'Instrumental',
        status: 0, value: 'instrumental',
      },
      {
        title: 'Instrumental Available',
        status: 0, value: 'instrumental_available',
      }
    ]
  }
]

export { CATEGORIES }
