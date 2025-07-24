/**
 * **curlie.io** - Package from pantry: curlie.io
 *
 * @domain `curlie.io`
 *
 * @install `launchpad install curlie.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.curlieio
 * console.log(pkg.name)        // "curlie.io"
 * console.log(pkg.description) // "Package from pantry: curlie.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/curlie-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const curlieioPackage = {
  /**
   * The display name of this package.
   */
  name: 'curlie.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'curlie.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: curlie.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install curlie.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +curlie.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install curlie.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/curlie.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CurlieioPackage = typeof curlieioPackage
