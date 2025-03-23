const getRandomAvatar = () => {
  const styles = ["bottts", "pixel-art"];
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  return `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${Math.random()}`;
};

export const notifications = [
  {
    id: 1,
    title: "New Repository Push",
    message: "Just pushed updates to React Portfolio 🚀",
    time: "2m ago",
    getAvatar: getRandomAvatar,
  },
  {
    id: 2,
    title: "Commit Activity",
    message: "48 commits in the last week 💪",
    time: "5m ago",
    getAvatar: getRandomAvatar,
  },
  {
    id: 3,
    title: "Project Star",
    message: "Your AI project got 5 new stars ⭐",
    time: "12m ago",
    getAvatar: getRandomAvatar,
  },
  {
    id: 4,
    title: "Pull Request Merged",
    message: "Feature branch merged into main 🎉",
    time: "15m ago",
    getAvatar: getRandomAvatar,
  },
  {
    id: 5,
    title: "Code Review",
    message: "Reviewed and approved 3 PRs today 👍",
    time: "25m ago",
    getAvatar: getRandomAvatar,
  },
  {
    id: 6,
    title: "Issue Resolved",
    message: "Fixed critical bug in production 🛠️",
    time: "30m ago",
    getAvatar: getRandomAvatar,
  },
  {
    id: 7,
    title: "New Follower",
    message: "Senior dev from Google started following you 🎯",
    time: "45m ago",
    getAvatar: getRandomAvatar,
  },
  {
    id: 8,
    title: "Repository Fork",
    message: "Your API project was forked 10 times today 🔄",
    time: "1h ago",
    getAvatar: getRandomAvatar,
  },
  {
    id: 9,
    title: "Achievement Unlocked",
    message: "Arctic Code Vault Contributor 2024 🏆",
    time: "2h ago",
    getAvatar: getRandomAvatar,
  },
  {
    id: 10,
    title: "Deployment Success",
    message: "Portfolio deployed to production ✨",
    time: "3h ago",
    getAvatar: getRandomAvatar,
  },
];
