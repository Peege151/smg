//key
// - = drop
// space = _
// slash = -

const CATEGORIES = [
  { title: 'Vibe',
    selector: 'vibe',
    inline: true,
    variants: [
      { title: 'Anthemic', value: 'anthemic' },
      { title: 'Atmospheric', value: 'atmospheric' },
      { title: 'Cinematic', value: 'cinematic' },
      { title: 'Cover Song', value: 'cover_song' },
      { title: 'Dark', value: 'dark' },
      { title: 'Driving', value: 'driving' },
      { title: 'Ethereal', value: 'ethereal' },
      { title: 'Feel Good', value: 'feel_good' },
      { title: 'Fun', value: 'fun' },
      { title: 'Holiday', value: 'holiday' },
      { title: 'Sad', value: 'sad' },
      { title: 'Sultry', value: 'sultry' },
    ]
  },
  {
    title: 'Sounds Like',
    selector: 'relatedArtists',
    inline: true,
    variants: [
      { title: 'Adele', value: 'adele'},
      { title: 'Arcade Fire', value: 'arcade_fire' },
      { title: 'Beyonce / Rihanna', value: 'beyonce-rihanna' },
      { title: 'Coldplay / U2', value: 'coldplay-u2' },
      { title: 'Feist', value: 'fiest'},
      { title: 'Film Score', value: 'film_score'},
      { title: 'Jay-Z', value: 'jayz'},
      { title: 'Mumford / Lumineers', value: 'mumford-lumineers'},
      { title: 'Muse', value: 'muse'},
      { title: 'Nine Inch Nails', value: 'nine_inch_nails'},
      { title: 'Passion Pit', value: 'passion_pit'},
      { title: 'M83', value: 'm83' },
      { title: 'The Black Keys', value: 'the_black_' },
    ]
  },
  { title: 'Genres',
    selector: 'genres',
    inline: true,
    variants: [
      { title: 'Beats', value: 'beats' },
      { title: 'Blues', value: 'blues' },
      { title: 'Country', value: 'country' },
      { title: 'Disco', value: 'disco' },
      { title: 'Electronic', value: 'electronic' },
      { title: 'Folk', value: 'folk' },
      { title: 'Funk', value: 'funk' },
      { title: 'Gospel', value: 'gospel' },
      { title: 'Grunge', value: 'grunge' },
      { title: 'Hip-Hop / Rap', value: 'hiphop-rap' },
      { title: 'Indie Rock', value: 'indie_rock' },
      { title: 'Pop', value: 'pop' },
      { title: 'Punk', value: 'punk' },
      { title: 'R&B', value: 'rnb' },
      { title: 'Rock', value: 'rock' },
      { title: 'Soul', value: 'soul' },
      { title: 'World', value: 'world' },
      { title: 'Metal', value: 'metal' },
      { title: 'Jazz', value: 'jazz' },
      { title: 'Lounge / Easy Listening', value: 'lounge-easy_listening' },
    ]
  },
  { title: 'Instruments',
    selector: 'instruments',
    inline: false,
    variants: [
      { title: 'Piano', value: 'piano' },
      { title: 'Acoustic Guitar', value: 'acoustic_guitar' },
      { title: 'Electric Guitar', value: 'electric_guitar' },
      { title: 'Hand Claps', value: 'hand_claps' },
      { title: 'Horns', value: 'horns' },
      { title: 'Strings', value: 'strings' },
      { title: 'Drums', value: 'drums' },
      { title: 'Oohs & Ahhs', value: 'oohs_n_ahhs' },
      { title: 'Organ', value: 'organ' },
      { title: 'Synths', value: 'synth' },

    ]
  },
  { title: 'Tempo',
    inline: false,
    selector: 'tempo',
    variants: [
      {
        title: 'Slow Speed',
        value: '60-90',
        selected: false,
      },
      {
        title: 'Medium Speed',
        value: '91-120',
        selected: false,
      },
      {
        title: `Fast Speed`,
        value: '121+',
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
        value: 'male_vocals',
      },
      {
        title: 'Female Vocals',
        value: 'female_vocals',
      },
      {
        title: 'Duet',
        value: 'duet',
      },
      {
        title: 'Instrumental',
        value: 'instrumental',
      },
      {
        title: 'Instrumental Available',
        value: 'instrumental_available',
      }
    ]
  }
]

export { CATEGORIES }
