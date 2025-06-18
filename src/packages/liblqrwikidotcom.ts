/**
 * **liblqr.wikidot.com** - Package from pantry: liblqr.wikidot.com
 *
 * @domain `liblqr.wikidot.com`
 *
 * @install `launchpad install liblqr.wikidot.com`
 * @dependencies `gnome.org/glib`, `freedesktop.org/pkg-config`, `freedesktop.org/pkg-config`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.liblqrwikidotcom
 * console.log(pkg.name)        // "liblqr.wikidot.com"
 * console.log(pkg.description) // "Package from pantry: liblqr.wikidot.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/liblqr-wikidot-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const liblqrwikidotcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'liblqr.wikidot.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'liblqr.wikidot.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: liblqr.wikidot.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install liblqr.wikidot.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/glib',
    'freedesktop.org/pkg-config',
    'freedesktop.org/pkg-config',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/liblqr.wikidot.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LiblqrwikidotcomPackage = typeof liblqrwikidotcomPackage
