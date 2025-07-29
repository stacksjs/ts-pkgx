/**
 * **libexif.github.io** - Package from pantry: libexif.github.io
 *
 * @domain `libexif.github.io`
 *
 * @install `launchpad install libexif.github.io`
 * @dependencies `gnu.org/gettext`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libexifgithubio
 * console.log(pkg.name)        // "libexif.github.io"
 * console.log(pkg.description) // "Package from pantry: libexif.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libexif-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libexifgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'libexif.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libexif.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libexif.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libexif.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libexif.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libexif.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libexif.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibexifgithubioPackage = typeof libexifgithubioPackage
