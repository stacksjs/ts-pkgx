/**
 * **ruff** - Package from pantry: astral.sh/ruff
 *
 * @domain `astral.sh/ruff`
 *
 * @install `launchpad install astral.sh/ruff`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.astralshruff
 * console.log(pkg.name)        // "ruff"
 * console.log(pkg.description) // "Package from pantry: astral.sh/ruff"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/astral-sh/ruff.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const astralshruffPackage = {
  /**
   * The display name of this package.
   */
  name: 'ruff' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'astral.sh/ruff' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: astral.sh/ruff' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install astral.sh/ruff' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +astral.sh/ruff -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install astral.sh/ruff' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/astral.sh/ruff/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AstralshruffPackage = typeof astralshruffPackage
