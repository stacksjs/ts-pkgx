/**
 * **cicada** - Package from pantry: hugo.wang/cicada
 *
 * @domain `hugo.wang/cicada`
 *
 * @install `launchpad install hugo.wang/cicada`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hugowangcicada
 * console.log(pkg.name)        // "cicada"
 * console.log(pkg.description) // "Package from pantry: hugo.wang/cicada"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hugo-wang/cicada.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hugowangcicadaPackage = {
  /**
   * The display name of this package.
   */
  name: 'cicada' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hugo.wang/cicada' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: hugo.wang/cicada' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install hugo.wang/cicada' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +hugo.wang/cicada -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install hugo.wang/cicada' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hugo.wang/cicada/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HugowangcicadaPackage = typeof hugowangcicadaPackage
