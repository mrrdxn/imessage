export const WALLPAPER_SECTIONS = [
  { id: "desktop", title: "Desktop" },
  { id: "abstract", title: "Abstract" },
];

export const WALLPAPERS = [
  // ---------- Desktop (your photos) ----------
  { id: "my-photo-1", category: "desktop", label: "Photo 1", url: "/wallpapers/my-photo-1.jpg" },
  { id: "my-photo-2", category: "desktop", label: "Photo 2", url: "/wallpapers/my-photo-2.jpg" },
  { id: "my-photo-3", category: "desktop", label: "Photo 3", url: "/wallpapers/my-photo-3.jpg" },
  { id: "my-photo-4", category: "desktop", label: "Photo 4", url: "/wallpapers/my-photo-4.jpg" },
  { id: "my-photo-5", category: "desktop", label: "Photo 5", url: "/wallpapers/my-photo-5.jpg" },
  { id: "my-photo-6", category: "desktop", label: "Photo 6", url: "/wallpapers/my-photo-6.jpg" },
  { id: "my-photo-7", category: "desktop", label: "Photo 7", url: "/wallpapers/my-photo-7.jpg" },
  { id: "my-photo-8", category: "desktop", label: "Photo 8", url: "/wallpapers/my-photo-8.jpg" },
  { id: "my-photo-9", category: "desktop", label: "Photo 9", url: "/wallpapers/my-photo-9.jpg" },
  { id: "my-photo-10", category: "desktop", label: "Photo 10", url: "/wallpapers/my-photo-10.jpg" },
  { id: "my-photo-11", category: "desktop", label: "Photo 11", url: "/wallpapers/my-photo-11.jpg" },
  { id: "my-photo-12", category: "desktop", label: "Photo 12", url: "/wallpapers/my-photo-12.jpg" },
  { id: "my-photo-13", category: "desktop", label: "Photo 13", url: "/wallpapers/my-photo-13.jpg" },
  { id: "my-photo-14", category: "desktop", label: "Photo 14", url: "/wallpapers/my-photo-14.jpg" },
  { id: "my-photo-15", category: "desktop", label: "Photo 15", url: "/wallpapers/my-photo-15.jpg" },
  { id: "my-photo-16", category: "desktop", label: "Photo 16", url: "/wallpapers/my-photo-16.jpg" },
  { id: "my-photo-17", category: "desktop", label: "Photo 17", url: "/wallpapers/my-photo-17.jpg" },
  { id: "my-photo-18", category: "desktop", label: "Photo 18", url: "/wallpapers/my-photo-18.jpg" },

  // ---------- Abstract ----------
  { id: "macos-graphic", category: "abstract", label: "macOS Graphic", url: "/wallpapers/macos-graphic.svg" },
  { id: "radial-yellow", category: "abstract", label: "Radial Yellow", url: "/wallpapers/radial-yellow.svg" },
  { id: "radial-purple", category: "abstract", label: "Radial Purple", url: "/wallpapers/radial-purple.svg" },
  { id: "radial-green", category: "abstract", label: "Radial Green", url: "/wallpapers/radial-green.svg" },
  { id: "radial-blue", category: "abstract", label: "Radial Blue", url: "/wallpapers/radial-blue.svg" },
  { id: "ventura-light", category: "abstract", label: "Ventura", url: "/wallpapers/ventura-light.svg" },
  { id: "ventura-dark", category: "abstract", label: "Ventura Dark", url: "/wallpapers/ventura-dark.svg" },
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