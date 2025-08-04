/**
 * **pnpm.io** - Package from pantry: pnpm.io
 *
 * @domain `pnpm.io`
 *
 * @install `launchpad install pnpm.io`
 * @dependencies `nodejs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pnpmio
 * console.log(pkg.name)        // "pnpm.io"
 * console.log(pkg.description) // "Package from pantry: pnpm.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pnpm-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pnpmioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pnpm.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pnpm.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pnpm.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pnpm.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pnpm.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pnpm.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pnpm.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PnpmioPackage = typeof pnpmioPackage
