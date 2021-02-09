const data = [
  {
    username: 'ilhom',

    followers: [
      { username: 'harun', followers: ['ilhom'], following: ['ilhom'] },
    ],
    following: [
      { username: 'harun', followers: ['ilhom'], following: ['ilhom'] },
    ],
  },

  {
    username: 'harun',
    followers: [
      { username: 'ilhom', followers: ['harun'], following: ['harun'] },
    ],
    following: [
      { username: 'ilhom', followers: ['harun'], following: ['harun'] },
    ],
  },
];

const many = () => data;

const one = (username) => data.find((u) => u.username === username);

const onesFollowers = (username) => {
  if (username !== undefined) {
    return data.find((u) => u.username === username).followers;
  } else {
    return data;
  }
};

const onesFollowing = (username) => {
  if (username !== undefined) {
    return data.find((u) => u.username === username).following;
  } else {
    return data;
  }
};

module.exports.many = many;
module.exports.one = one;
module.exports.onesFollowers = onesFollowers;
module.exports.onesFollowing = onesFollowing;
