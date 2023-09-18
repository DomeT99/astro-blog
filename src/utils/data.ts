import type {
  SocialButton,
  MenuOptions,
  GitHubRepo
} from "../types/types";

export const socialButtons: SocialButton[] = [
  {
    icon: "fa-brands:linkedin",
    url: "https://www.linkedin.com/in/domenico-tenace/",
  },
  {
    icon: "fa-brands:github",
    url: "https://github.com/DomeT99",
  },
  {
    icon: "fa-brands:mastodon",
    url: "https://mastodon.uno/@dvalin99",
  },
];

export const menuOptions: MenuOptions[] = [
  {
    label: "HOME",
    url: "/",
  },
  {
    label: "BLOG",
    url: "/blog",
  },
  {
    label: "OPEN SOURCE",
    url: "/opensource",
  },
];

export const openSourceProjects: GitHubRepo[] = [
  {
    owner: "vuejs",
    repo: "devtools",
  },
  {
    owner: "Exifly",
    repo: "ApiVault",
  },
  {
    owner: "italia",
    repo: "bootstrap-italia",
  },
  {
    owner: "oruga-ui",
    repo: "oruga",
  },
  {
    owner: "italia-opensource",
    repo: "awesome-italia-opensource",
  }
];

