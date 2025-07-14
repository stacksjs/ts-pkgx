/**
 * **pinentry** - Package from pantry: gnupg.org/pinentry
 *
 * @domain `gnupg.org/pinentry`
 *
 * @install `launchpad install gnupg.org/pinentry`
 * @dependencies `gnupg.org/libassuan`, `gnupg.org/libgpg-error`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnupgorgpinentry
 * console.log(pkg.name)        // "pinentry"
 * console.log(pkg.description) // "Package from pantry: gnupg.org/pinentry"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/pinentry.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnupgorgpinentryPackage = {
  /**
   * The display name of this package.
   */
  name: 'pinentry' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/pinentry' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnupg.org/pinentry' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnupg.org/pinentry' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnupg.org/pinentry -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnupg.org/pinentry' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnupg.org/libassuan',
    'gnupg.org/libgpg-error',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/pinentry/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnupgorgpinentryPackage = typeof gnupgorgpinentryPackage
