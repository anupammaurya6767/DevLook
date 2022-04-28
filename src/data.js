import { user } from "../src/Script";
let url = `https://api.github.com/users/${user}`;
let location = " ";
let link = " ";
let twitter = " ";
let company = " ";
let name = " ";
let username = " ";
let doj = " ";
let avatar = " ";
let repo = " ";
let followers = " ";
let following = " ";

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const dte = date.getDate();
  let month = date.getMonth();
  const year = date.getFullYear();
  switch (month) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
    default:
      break;
  }
  return `Joined ${dte} ${month} ${year}`;
};

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    location = data.location;
    link = data.blog || "NO Data";
    twitter = data.twitter_username || "Not Available";
    company = data.company;
    name = data.name;
    username = data.login;
    doj = formatDate(data.created_at);
    avatar = data.avatar_url;
    repo = data.public_repos;
    followers = data.followers;
    following = data.following;
  })
  .catch((err) => console.log(err));

export {
  location,
  link,
  twitter,
  company,
  doj,
  name,
  username,
  avatar,
  repo,
  followers,
  following
};
