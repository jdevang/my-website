// export type categories = `windows` | `web` | `mac` | 'ios' | 'chrome';
export type categories = `all` | `media` | `downloaders` | 'tools' | `games`;


export interface ToolType {
  link: string;
  id: string;
  name: string;
  category: categories[];
  labels?: string[];
  description: string;
}

const Tools: ToolType[] = [
  {
    id: `sonarr`,
    category: [`all`, `media`],
    link: `https://sonarr.tv/`,
    labels: [`TV Series`],
    name: `Sonarr`,
    description: `Monitor for new episodes of your favorite shows.`,
  },
  {
    id: `radarr`,
    category: [`all`, `media`],
    link: `https://radarr.video/`,
    labels: [`Movies`],
    name: `Radarr`,
    description: `Monitor for new movies/grab old ones.`,
  },
  {
    id: `transmission`,
    category: [`all`, `media`, `downloaders`],
    link: `https://transmissionbt.com/`,
    labels: [`Torrent Client`],
    name: `Transmission`,
    description: `Transmission is an open source, volunteer-based BitTorrent client.`,
  },
  {
    id: `jackett`,
    category: [`all`, `media`, `downloaders`],
    link: `https://github.com/Jackett/Jackett`,
    labels: [`Indexer Tracker`],
    name: `Jackett`,
    description: `API Support for your favorite torrent trackers.`,
  },
  {
    id: `ombi`,
    category: [`all`, `media`],
    link: `https://ombi.io/`,
    labels: [`Media Request Tool`],
    name: `Ombi`,
    description: `Ombi lets your Jellyfin users request content by themselves.`,
  },
  {
    id: `shlink`,
    category: [`all`, `tools`],
    link: `https://github.com/shlinkio/shlink`,
    labels: [`Url Shortener`],
    name: `Shlink`,
    description: `Shlink makes your long url's tiny.`,
  },
  {
    id: `nzbhydra`,
    category: [`all`, `media`, `downloaders`],
    link: `https://github.com/theotherp/nzbhydra2`,
    labels: [`Meta Indexer Search`],
    name: `NZB-Hydra`,
    description: `NZBHydra 2 is a meta search for newznab indexers and torznab trackers.`,
  },
  {
    id: `unmaniac`,
    category: [`all`, `media`, `tools`],
    link: `https://github.com/Unmanic/unmanic`,
    labels: [`Library Optimiser`],
    name: `Unmaniac`,
    description: `Unmanic is a simple tool for optimising your file library to a single, uniform format.`,
  },
  {
    id: `nzbget`,
    category: [`all`, `media`, `downloaders`],
    link: `https://github.com/nzbget/nzbget`,
    labels: [`Usenet Download Client`],
    name: `NZBGet`,
    description: `NZBGet is a binary downloader, which downloads files from Usenet based on information given in nzb-files.`,
  },
  {
    id: `jellyfin`,
    category: [`all`, `media`],
    link: `https://jellyfin.org/`,
    labels: [`Online Media Player`],
    name: `Jellyfin`,
    description: `Jellyfin is the volunteer-built media solution that puts you in control of your media.`,
  },
  {
    id: `portainer`,
    category: [`all`, `tools`],
    link: `https://www.portainer.io/`,
    labels: [`Docker Manager`],
    name: `Portainer`,
    description: `Portainer enables centralized configuration of Docker environments.`,
  },
  {
    id: `minecraft`,
    category: [`all`, `games`],
    link: `https://www.minecraft.net/en-us`,
    labels: [`Survival Game`],
    name: `Minecraft`,
    description: `Explore your own unique world, survive the night, and create anything you can imagine`,
  },
];
export default Tools;
