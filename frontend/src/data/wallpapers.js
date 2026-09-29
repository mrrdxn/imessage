export const WALLPAPER_SECTIONS = [
    { id: "desktop", title: "Desktop" },
    { id: "abstract", title: "Abstract" },
  ];
  
  export const WALLPAPERS = [
    {
      id: "sonoma-horizon",
      category: "desktop",
      label: "Sonoma Horizon",
      url: "/wallpapers/sonoma-horizon.jpg",
    },
    {
      id: "redwoods",
      category: "desktop",
      label: "Redwoods",
      url: "/wallpapers/redwoods.jpg",
    },
    {
      id: "utah-evening",
      category: "desktop",
      label: "Utah Evening",
      url: "/wallpapers/utah-evening.jpg",
    },
    {
      id: "san-francisco-bay",
      category: "desktop",
      label: "San Francisco Bay",
      url: "/wallpapers/san-francisco-bay.jpg",
    },
    {
      id: "iceland-coast",
      category: "desktop",
      label: "Iceland Coast",
      url: "/wallpapers/iceland-coast.jpg",
    },
    {
      id: "new-york-midtown",
      category: "desktop",
      label: "New York Midtown",
      url: "/wallpapers/new-york-midtown.jpg",
    },
    {
      id: "macos-graphic",
      category: "abstract",
      label: "macOS Graphic",
      url: "/wallpapers/macos-graphic.svg",
    },
    {
      id: "radial-yellow",
      category: "abstract",
      label: "Radial Yellow",
      url: "/wallpapers/radial-yellow.svg",
    },
    {
      id: "radial-purple",
      category: "abstract",
      label: "Radial Purple",
      url: "/wallpapers/radial-purple.svg",
    },
    {
      id: "radial-green",
      category: "abstract",
      label: "Radial Green",
      url: "/wallpapers/radial-green.svg",
    },
    {
      id: "radial-blue",
      category: "abstract",
      label: "Radial Blue",
      url: "/wallpapers/radial-blue.svg",
    },
    {
      id: "ventura-light",
      category: "abstract",
      label: "Ventura",
      url: "/wallpapers/ventura-light.svg",
    },
    {
      id: "ventura-dark",
      category: "abstract",
      label: "Ventura Dark",
      url: "/wallpapers/ventura-dark.svg",
    },
  ];
  
  export function frameStyleFromUrl(url) {
    return {
      backgroundImage: `url("${url}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }
  
  export function getWallpaperById(id) {
    return WALLPAPERS.find((w) => w.id === id) ?? WALLPAPERS[0];
  }