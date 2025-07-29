/**
 * **socat** - Package from pantry: dest-unreach.org/socat
 *
 * @domain `dest-unreach.org/socat`
 *
 * @install `launchpad install dest-unreach.org/socat`
 * @dependencies `openssl.org^1.1`, `gnu.org/readline^8.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.destunreachorgsocat
 * console.log(pkg.name)        // "socat"
 * console.log(pkg.description) // "Package from pantry: dest-unreach.org/socat"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dest-unreach-org/socat.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const destunreachorgsocatPackage = {
  /**
   * The display name of this package.
   */
  name: 'socat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dest-unreach.org/socat' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dest-unreach.org/socat' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dest-unreach.org/socat' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dest-unreach.org/socat -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dest-unreach.org/socat' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'gnu.org/readline^8.2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dest-unreach.org/socat/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DestunreachorgsocatPackage = typeof destunreachorgsocatPackage
