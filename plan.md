
## Desktop distribution update

The portfolio now includes a responsive Material 3-inspired desktop download section with separate Windows and macOS cards. `public/downloads/vitalforge.exe` is a clearly labeled non-runnable sample placeholder; `public/downloads/vitalforge.app/` contains a minimal replaceable bundle structure and `vitalforge.app.zip` is the downloadable macOS archive. The UI links stay stable so production signed artifacts can replace the samples without changing the page. Motion remains restrained: GSAP/ScrollTrigger provide the existing scroll system, while download cards add small pointer-driven 3D tilt only on non-touch devices and reduced-motion preferences disable it.
