/**
 * **pcre.org** - Package from pantry: pcre.org
 *
 * @domain `pcre.org`
 *
 * @install `launchpad install pcre.org`
 * @dependencies `sourceware.org/bzip2@1`, `zlib.net@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pcreorg
 * console.log(pkg.name)        // "pcre.org"
 * console.log(pkg.description) // "Package from pantry: pcre.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pcre-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pcreorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pcre.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pcre.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pcre.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pcre.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pcre.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pcre.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'sourceware.org/bzip2@1',
    'zlib.net@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pcre.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PcreorgPackage = typeof pcreorgPackage
