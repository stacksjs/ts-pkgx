/**
 * **uv** - Package from pantry: astral.sh/uv
 *
 * @domain `astral.sh/uv`
 *
 * @install `launchpad install astral.sh/uv`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.astralshuv
 * console.log(pkg.name)        // "uv"
 * console.log(pkg.description) // "Package from pantry: astral.sh/uv"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/astral-sh/uv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const astralshuvPackage = {
  /**
   * The display name of this package.
   */
  name: 'uv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'astral.sh/uv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: astral.sh/uv' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install astral.sh/uv' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +astral.sh/uv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install astral.sh/uv' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/astral.sh/uv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AstralshuvPackage = typeof astralshuvPackage
