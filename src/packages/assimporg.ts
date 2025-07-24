/**
 * **assimp.org** - Package from pantry: assimp.org
 *
 * @domain `assimp.org`
 *
 * @install `launchpad install assimp.org`
 * @dependencies `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.assimporg
 * console.log(pkg.name)        // "assimp.org"
 * console.log(pkg.description) // "Package from pantry: assimp.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/assimp-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const assimporgPackage = {
  /**
   * The display name of this package.
   */
  name: 'assimp.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'assimp.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: assimp.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install assimp.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +assimp.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install assimp.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/assimp.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AssimporgPackage = typeof assimporgPackage
