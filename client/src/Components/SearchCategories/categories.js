//key
// - = drop
// space = _
// slash = -

const CATEGORIES = [
  {
    title: 'Similar Artists',
    selector: 'similarArtists',
    inline: true,
    variants: [
      { title: 'Adele', value: 'adele'},
      { title: 'Arcade Fire', value: 'arcade_fire' },
      { title: 'Beyonce/Rihanna', value: 'beyonce-rihanna' },
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
  { title: 'Sound',
    selector: 'sound',
    inline: true,
    variants: [
      { title: 'A Capella', value: 'a_capella' },
      { title: 'Acoustic', value: 'acoustic' },
      { title: 'Anthemic', value: 'anthemic' },
      { title: 'Atmospheric / Ethereal', value: 'atmospheric-ethereal' },
      { title: 'Blues', value: 'blues' },
      { title: 'Country', value: 'country' },
      { title: 'Cover Song', value: 'cover_song' },
      { title: 'Dark', value: 'dark' },
      { title: 'Disco', value: 'disco' },
      { title: 'Driving', value: 'driving' },
      { title: 'Dubstep', value: 'dubstep' },
      { title: 'Electro Pop / Synth Pop', value: 'electro_pop-synth_pop' },
      { title: 'Electronic', value: 'electronic' },
      { title: 'Feel Good', value: 'feel_good' },
      { title: 'Folk / Americana', value: 'folk_americana' },
      { title: 'Fun', value: 'fun' },
      { title: 'Funk', value: 'funk' },
      { title: 'Garage', value: 'garage' },
      { title: 'Gospel', value: 'gospel' },
      { title: 'Group Vocals', value: 'group_vocals' },
      { title: 'Guitar Riff', value: 'guitar_riff' },
      { title: 'Hand Claps', value: 'hand_claps' },
      { title: 'Hard Rock / Heavy Metal', value: 'hard_rock-heavy_metal' },
      { title: 'Hip-Hop / Rap', value: 'hiphop-rap' },
      { title: 'Holiday', value: 'holiday' },
      { title: 'Horns', value: 'horns' },
      { title: 'Indie Rock', value: 'indie_rock' },
      { title: 'Jazz', value: 'jazz' },
      { title: 'Latin', value: 'latin' },
      { title: 'Lounge / Easy Listening', value: 'lounge-easy_listening' },
      { title: 'Percussion', value: 'percussion' },
      { title: 'Piano', value: 'piano' },
      { title: 'Pop', value: 'pop' },
      { title: 'Pop / Punk', value: 'pop-punk' },
      { title: 'Pop / Rock', value: 'pop-rock' },
      { title: 'R&B', value: 'rnb' },
      { title: 'Remix', value: 'remix' },
      { title: 'Rock', value: 'rock' },
      { title: 'Sad', value: 'sad' },
      { title: 'Singer / Songwriter', value: 'singer-songwriter' },
      { title: 'Soul', value: 'soul' },
      { title: 'Strings', value: 'strings' },
      { title: 'Sultry', value: 'sultry' },
      { title: 'Trap', value: 'trap' },
      { title: 'Tween Pop', value: 'tween_pop' },
      { title: 'Waltz', value: 'waltz' },
      { title: 'World', value: 'world' }
    ]
  },
  { title: 'Tempo',
    inline: false,
    selector: 'tempo',
    variants: [
      {
        title: 'Slow Speed (60-90BPM)',
        value: '60-90',
        selected: false,
      },
      {
        title: 'Medium Speed (91-120BPM)',
        value: '91-120',
        selected: false,
      },
      {
        title: 'Fast Speed (121+ BPM)',
        value: '121+',
        selected: false,
      }
    ]
  },
  { title: 'Vocal Style',
    inline: false,
    selector: 'vocal',
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
