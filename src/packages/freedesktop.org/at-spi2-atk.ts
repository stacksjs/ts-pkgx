/**
 * **at-spi2-atk** - Package from pantry: freedesktop.org/at-spi2-atk
 *
 * @domain `freedesktop.org/at-spi2-atk`
 *
 * @install `launchpad install freedesktop.org/at-spi2-atk`
 * @dependencies `gnome.org/atk`, `gnome.org/libxml2`, `freedesktop.org/dbus`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgatspi2atk
 * console.log(pkg.name)        // "at-spi2-atk"
 * console.log(pkg.description) // "Package from pantry: freedesktop.org/at-spi2-atk"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/at-spi2-atk.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgatspi2atkPackage = {
  /**
   * The display name of this package.
   */
  name: 'at-spi2-atk' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/at-spi2-atk' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: freedesktop.org/at-spi2-atk' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install freedesktop.org/at-spi2-atk' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +freedesktop.org/at-spi2-atk -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install freedesktop.org/at-spi2-atk' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/atk',
    'gnome.org/libxml2',
    'freedesktop.org/dbus',
    'x.org/xtst',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/at-spi2-atk/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Freedesktoporgatspi2atkPackage = typeof freedesktoporgatspi2atkPackage
