/**
 * **exiftool.org** - Package from pantry: exiftool.org
 *
 * @domain `exiftool.org`
 *
 * @install `launchpad install exiftool.org`
 * @dependencies `perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.exiftoolorg
 * console.log(pkg.name)        // "exiftool.org"
 * console.log(pkg.description) // "Package from pantry: exiftool.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/exiftool-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const exiftoolorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'exiftool.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'exiftool.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: exiftool.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install exiftool.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +exiftool.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install exiftool.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'perl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/exiftool.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ExiftoolorgPackage = typeof exiftoolorgPackage
