/**
 * **wordl** - pkgx package
 *
 * @domain `crates.io/wordl`
 *
 * @install `launchpad install crates.io/wordl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiowordl
 * console.log(pkg.name)        // "wordl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/wordl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiowordlPackage = {
  /**
   * The display name of this package.
   */
  name: 'wordl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/wordl' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/wordl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/wordl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/wordl' as const,
}

export type CratesiowordlPackage = typeof cratesiowordlPackage
