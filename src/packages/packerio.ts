/**
 * **packer.io** - Package from pantry: packer.io
 *
 * @domain `packer.io`
 *
 * @install `launchpad install packer.io`
 * @dependencies `go.dev^1.18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.packerio
 * console.log(pkg.name)        // "packer.io"
 * console.log(pkg.description) // "Package from pantry: packer.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/packer-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const packerioPackage = {
  /**
   * The display name of this package.
   */
  name: 'packer.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'packer.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: packer.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install packer.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.18',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/packer.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PackerioPackage = typeof packerioPackage
