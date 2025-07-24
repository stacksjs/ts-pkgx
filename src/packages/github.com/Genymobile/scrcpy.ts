/**
 * **scrcpy** - Package from pantry: github.com/Genymobile/scrcpy
 *
 * @domain `github.com/Genymobile/scrcpy`
 *
 * @install `launchpad install github.com/Genymobile/scrcpy`
 * @dependencies `ffmpeg.org`, `libusb.info`, `libsdl.org`, ... (+3 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomgenymobilescrcpy
 * console.log(pkg.name)        // "scrcpy"
 * console.log(pkg.description) // "Package from pantry: github.com/Genymobile/scrcpy"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Genymobile/scrcpy.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomgenymobilescrcpyPackage = {
  /**
   * The display name of this package.
   */
  name: 'scrcpy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Genymobile/scrcpy' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/Genymobile/scrcpy' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Genymobile/scrcpy' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Genymobile/scrcpy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Genymobile/scrcpy' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'ffmpeg.org',
    'libusb.info',
    'libsdl.org',
    'linux:webmproject.org/libvpx<1.15.1 # since 3.3, .9 lib api',
    'darwin:sourceware.org/bzip2',
    'darwin:zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Genymobile/scrcpy/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomgenymobilescrcpyPackage = typeof githubcomgenymobilescrcpyPackage
