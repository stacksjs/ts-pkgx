/**
 * **libassuan** - Package from pantry: gnupg.org/libassuan
 *
 * @domain `gnupg.org/libassuan`
 *
 * @install `launchpad install gnupg.org/libassuan`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnupgorglibassuan
 * console.log(pkg.name)        // "libassuan"
 * console.log(pkg.description) // "Package from pantry: gnupg.org/libassuan"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnupg-org/libassuan.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnupgorglibassuanPackage = {
  /**
   * The display name of this package.
   */
  name: 'libassuan' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnupg.org/libassuan' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gnupg.org/libassuan' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gnupg.org/libassuan' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +gnupg.org/libassuan -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gnupg.org/libassuan' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnupg.org/libassuan/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GnupgorglibassuanPackage = typeof gnupgorglibassuanPackage
