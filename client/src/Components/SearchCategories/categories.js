const CATEGORIES = [
  {
    title: 'Similar Artists',
    selector: 'similarArtists',
    inline: true,
    variants: [
      { title: 'Adele', value: 'adele'},
      { title: 'Arcade Fire' },
      { title: 'Beyonce/Rihanna' },
      { title: 'Coldplay / U2' },
      { title: 'Feist' },
      { title: 'Film Score' },
      { title: 'Jay-Z' },
      { title: 'Mumford / Lumineers' },
      { title: 'Muse' },
      { title: 'Nine Inch Nails' },
      { title: 'Passion Pit' },
      { title: 'M83' },
      { title: 'The Black Keys' },
    ]
  },
  { title: 'Sound',
    selector: 'sound',
    inline: true,
    variants: [
      { title: 'A Capella' },
      { title: 'Acoustic' },
      { title: 'Anthemic' },
      { title: 'Atmospheric / Ethereal' },
      { title: 'Blues' },
      { title: 'Country' },
      { title: 'Cover Song' },
      { title: 'Dark' },
      { title: 'Disco' },
      { title: 'Driving' },
      { title: 'Dubstep' },
      { title: 'Electro Pop / Synth Pop' },
      { title: 'Electronic' },
      { title: 'Feel Good' },
      { title: 'Folk / Americana' },
      { title: 'Fun' },
      { title: 'Funk' },
      { title: 'Garage' },
      { title: 'Gospel' },
      { title: 'Group Vocals' },
      { title: 'Guitar Riff' },
      { title: 'Hand Claps' },
      { title: 'Hard Rock / Heavy Metal' },
      { title: 'Hip-Hop / Rap' },
      { title: 'Holiday' },
      { title: 'Horns' },
      { title: 'Indie Rock' },
      { title: 'Jazz' },
      { title: 'Latin' },
      { title: 'Lounge / Easy Listening' },
      { title: 'Percussion' },
      { title: 'Piano' },
      { title: 'Pop' },
      { title: 'Pop / Punk' },
      { title: 'Pop / Rock' },
      { title: 'R&B' },
      { title: 'Remix' },
      { title: 'Rock' },
      { title: 'Sad' },
      { title: 'Singer / Songwriter' },
      { title: 'Soul' },
      { title: 'Strings' },
      { title: 'Sultry' },
      { title: 'Trap' },
      { title: 'Tween Pop' },
      { title: 'Waltz' },
      { title: 'World' }
    ]
  },
  { title: 'Tempo',
    inline: false,
    selector: 'tempo',
    variants: [
      {
        title: 'Slow Speed (60-90BPM)',
        searchQuery: 'speed=60-90',
        selected: false,
      },
      {
        title: 'Medium Speed (91-120BPM)',
        searchQuery: 'speed=91-120',
        selected: false,
      },
      {
        title: 'Fast Speed (121+ BPM)',
        searchQuery: 'speed=121+',
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
      },
      {
        title: 'Female Vocals',
      },
      {
        title: 'Duet',
      },
      {
        title: 'Instrumental',
      },
      {
        title: 'Instrumental Available',
      }
    ]
  }
]

export { CATEGORIES }
