/**
 * **par2cmdline** - Package from pantry: github.com/Parchive/par2cmdline
 *
 * @domain `github.com/Parchive/par2cmdline`
 *
 * @install `launchpad install github.com/Parchive/par2cmdline`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomparchivepar2cmdline
 * console.log(pkg.name)        // "par2cmdline"
 * console.log(pkg.description) // "Package from pantry: github.com/Parchive/par2cm..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Parchive/par2cmdline.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomparchivepar2cmdlinePackage = {
  /**
   * The display name of this package.
   */
  name: 'par2cmdline' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Parchive/par2cmdline' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/Parchive/par2cmdline' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install github.com/Parchive/par2cmdline' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Parchive/par2cmdline/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomparchivepar2cmdlinePackage = typeof githubcomparchivepar2cmdlinePackage
