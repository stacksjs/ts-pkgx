/**
 * **corepack** - Package from pantry: nodejs.org/corepack
 *
 * @domain `nodejs.org/corepack`
 *
 * @install `launchpad install nodejs.org/corepack`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nodejsorgcorepack
 * console.log(pkg.name)        // "corepack"
 * console.log(pkg.description) // "Package from pantry: nodejs.org/corepack"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nodejs-org/corepack.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nodejsorgcorepackPackage = {
  /**
   * The display name of this package.
   */
  name: 'corepack' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nodejs.org/corepack' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: nodejs.org/corepack' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nodejs.org/corepack' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +nodejs.org/corepack -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nodejs.org/corepack' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nodejs.org/corepack/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NodejsorgcorepackPackage = typeof nodejsorgcorepackPackage
