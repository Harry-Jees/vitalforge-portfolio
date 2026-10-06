
## Desktop distribution update

The portfolio now includes a responsive Material 3-inspired desktop download section with separate Windows and macOS cards. `public/downloads/vitalforge.exe` and `public/downloads/vitalforge.app.zip` are the stable platform download targets, with the macOS bundle source kept in `public/downloads/vitalforge.app/`. Motion remains restrained: GSAP/ScrollTrigger provide the existing scroll system, while download cards add small pointer-driven 3D tilt only on non-touch devices and reduced-motion preferences disable it.
