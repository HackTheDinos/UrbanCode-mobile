// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.hackthedinos.backyard',
  name: 'Helix',
  description: 'Report fossils found in your backyard! Praise Helix.',
  author: 'Gerard O\'Neill',
  email: 'grardb@gmail.com',
  website: 'gerardoneill.com'
});

App.icons({
  'android_ldpi': 'public/helix.png',
  'android_mdpi': 'public/helix.png',
  'android_hdpi': 'public/helix.png',
  'android_xhdpi': 'public/helix.png'
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xffffffff');
App.setPreference('HideKeyboardFormAccessoryBar', true);

App.accessRule('*');
