/**
 * **cli** - Package from pantry: snaplet.dev/cli
 *
 * @domain `snaplet.dev/cli`
 *
 * @install `launchpad install snaplet.dev/cli`
 * @dependencies `nodejs.org^10.13.0 || ^12 || ^14 || ^16 || ^18 || ^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.snapletdevcli
 * console.log(pkg.name)        // "cli"
 * console.log(pkg.description) // "Package from pantry: snaplet.dev/cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/snaplet-dev/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const snapletdevcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'snaplet.dev/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: snaplet.dev/cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install snaplet.dev/cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +snaplet.dev/cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install snaplet.dev/cli' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^10.13.0 || ^12 || ^14 || ^16 || ^18 || ^20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/snaplet.dev/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SnapletdevcliPackage = typeof snapletdevcliPackage
