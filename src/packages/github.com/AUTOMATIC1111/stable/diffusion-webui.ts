/**
 * **github.com/AUTOMATIC1111/stable-diffusion-webui** - pkgx package
 *
 * @domain `github.com/AUTOMATIC1111/stable/diffusion-webui`
 *
 * @install `pkgx github.com/AUTOMATIC1111/stable-diffusion-webui`
 * @aliases `github.com/AUTOMATIC1111/stable-diffusion-webui`, `AUTOMATIC1111/stable-diffusion-webui`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomAUTOMATIC1111stablediffusionwebui
 * // Or access via domain
 * const samePkg = pantry.githubcomautomatic1111stablediffusionwebui
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "AUTOMATIC1111"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AUTOMATIC1111/stable/diffusion-webui.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomAUTOMATIC1111stablediffusionwebuiPackage = {
  /**
   * The display name of this package.
   */
  name: 'AUTOMATIC1111' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AUTOMATIC1111/stable/diffusion-webui' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/AUTOMATIC1111/stable-diffusion-webui' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/AUTOMATIC1111/stable-diffusion-webui',
    'AUTOMATIC1111/stable-diffusion-webui',
  ] as const,
  fullPath: 'github.com/AUTOMATIC1111/stable-diffusion-webui' as const,
}

export type GithubcomAUTOMATIC1111stablediffusionwebuiPackage = typeof githubcomAUTOMATIC1111stablediffusionwebuiPackage
