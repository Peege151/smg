//key
// - = drop
// space = _
// slash = -

const CATEGORIES = [
  { title: 'Vibe',
    selector: 'vibe',
    inline: true,
    variants: [
      { title: 'Ambient', status: 0, value: 'ambient' },
      { title: 'Anthemic', status: 0, value: 'anthemic' },
      { title: 'Break Up', status: 0, value: 'break_up' },
      { title: 'Chill', status: 0, value: 'chill' },
      { title: 'Cinematic', status: 0, value: 'cinematic' },
      { title: 'Dark', status: 0, value: 'dark' },
      { title: 'Driving', status: 0, value: 'driving' },
      { title: 'Ethereal', status: 0, value: 'ethereal' },
      { title: 'Feel Good', status: 0, value: 'feel_good' },
      { title: 'Fun', status: 0, value: 'fun' },
      { title: 'Holiday', status: 0, value: 'holiday' },
      { title: 'Romantic', status: 0, value: 'romantic' },
      { title: 'Sad', status: 0, value: 'sad' },
      { title: 'Sexy', status: 0, value: 'sexy' },
    ]
  },
  {
    title: 'Sounds Like',
    selector: 'relatedArtists',
    inline: true,
    variants: [
      { title: 'Adele', status: 0, value: 'adele' },
      { title: 'Arcade Fire', status: 0, value: 'arcade_fire' },
      { title: 'Beyonce', status: 0, value: 'beyonce' },
      { title: 'The Black Keys', status: 0, value: 'the_black_keys' },
      { title: 'Chainsmokers', status: 0, value: 'chainsmokers' },
      { title: 'Daniel Caesar', status: 0, value: 'daniel_caesar' },
      { title: 'Future', status: 0, value: 'future' },
      { title: 'Drake', status: 0, value: 'drake' },
      { title: 'Kings of Leon', status: 0, value: 'kings_of_leon'},
      { title: 'Lumineers', status: 0, value: 'lumineers'},
      { title: 'Nine Inch Nails', status: 0, value: 'nine_inch_nails'},
      { title: 'Passion Pit', status: 0, value: 'passion_pit'},
      { title: 'Radiohead', status: 0, value: 'radiohead' },
      { title: 'The Roots', status: 0, value: 'the_roots'},
      { title: 'Sylvan Esso', status: 0, value: 'sylvan_esso'},

    ]
  },
  { title: 'Genres',
    selector: 'genres',
    inline: true,
    variants: [
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
      { title: 'Jazz', status: 0, value: 'jazz' },
      { title: 'Lounge / Easy Listening', status: 0, value: 'lounge-easy_listening' },
      { title: 'Metal', status: 0, value: 'metal' },
      { title: 'Pop', status: 0, value: 'pop' },
      { title: 'Punk', status: 0, value: 'punk' },
      { title: 'R&B', status: 0, value: 'rnb' },
      { title: 'Rock', status: 0, value: 'rock' },
      { title: 'Soul', status: 0, value: 'soul' },
      { title: 'Trap', status: 0, value: 'trap' },
      { title: 'World', status: 0, value: 'world' },
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
      { title: 'Oohs & Ahhs', status: 0, value: 'oohs_n_ahh' },
      { title: 'Organ', status: 0, value: 'organ' },
      { title: 'Synths', status: 0, value: 'synths' },

    ]
  },
  { title: 'Tempo',
    inline: false,
    selector: 'tempo',
    variants: [
      {
        title: 'Slow Speed',
        status: 0, value: 'slow', speed: '0 - 90',
        selected: false,
      },
      {
        title: 'Medium Speed',
        status: 0, value: 'medium', speed: '91-120',
        selected: false,
      },
      {
        title: `Fast Speed`,
        status: 0, value: 'fast', speed: '121+',
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
