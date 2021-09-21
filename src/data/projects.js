import fastnfresh from "../images/fast-n-fresh.jpg";
import noteitdown from "../images/note-it-down.jpg";
import radiance from "../images/radiance21.jpg";

export const projectsData = [
  {
    name: "Radiance '21 App",
    description:
      "A registration app for the events conducted in Radiance '21 and deployed it on Play Store. Hosted by PICT ACM Student Chapter - Women in Computing, Radiance is a high spirited event consisting of various technical and non-technical events.",
    image: radiance,
    website: "https://radiance21.in/",
    deployment:
      "https://play.google.com/store/apps/details?id=com.pasc.radiance2021",
  },
  {
    name: "Fast 'n fresh",
    description:
      "An E-commerce grocery delivery application with a focus on simplicity and speed. Has separate login for the user, the admin and the delivery boy.",
    image: fastnfresh,
    code: "https://github.com/Fast-n-fresh/fast-n-fresh-app",
    deployment:
      "https://github.com/Fast-n-fresh/fast-n-fresh-app/releases/download/v1.0-beta/app-release.apk",
  },
  {
    name: "Note It Down",
    description:
      "A Note-taking app along with a to-do list (Tasks) functionality, Note It Down is an app developed for Android devices with Firebase for the backend.",
    image: noteitdown,
    code: "https://github.com/RohinBhat/NoteItDown",
  },
];
